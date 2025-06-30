"""create results and quiz_logs tables

Revision ID: 20250630165906
Revises: b1bce23f5698
Create Date: 2025-07-01 00:00:00.000000
"""
from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision = '20250630165906'
down_revision = 'b1bce23f5698'
branch_labels = None
depends_on = None

def upgrade():
    op.create_table(
        'results',
        sa.Column('id', sa.String(), nullable=False),
        sa.Column('token_usuario', sa.String(), nullable=True),
        sa.Column('quiz_profile', sa.JSON(), nullable=False),
        sa.Column('nombres_entregados', sa.ARRAY(sa.String()), nullable=True),
        sa.Column('fuente_ia', sa.Boolean(), nullable=False),
        sa.Column('pagado', sa.Boolean(), nullable=False),
        sa.Column('fecha', sa.DateTime(), nullable=False),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_table(
        'quiz_logs',
        sa.Column('id', sa.String(), nullable=False),
        sa.Column('token_usuario', sa.String(), nullable=True),
        sa.Column('pregunta', sa.Text(), nullable=False),
        sa.Column('respuesta', sa.Text(), nullable=False),
        sa.Column('tiempo_respuesta', sa.Integer(), nullable=False),
        sa.Column('fecha', sa.DateTime(), nullable=False),
        sa.Column('result_id', sa.String(), sa.ForeignKey('results.id'), nullable=False),
        sa.PrimaryKeyConstraint('id')
    )

def downgrade():
    op.drop_table('quiz_logs')
    op.drop_table('results')
