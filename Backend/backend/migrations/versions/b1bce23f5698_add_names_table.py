"""add names table

Revision ID: b1bce23f5698
Revises: ac0ad40ea1a4
Create Date: 2025-07-01 00:00:00.000000

"""
from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision = 'b1bce23f5698'
down_revision = 'ac0ad40ea1a4'
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        'names',
        sa.Column('id', sa.String(), nullable=False),
        sa.Column('nombre', sa.String(length=100), nullable=False),
        sa.Column('significado', sa.Text(), nullable=True),
        sa.Column('simbolo', sa.String(length=100), nullable=True),
        sa.Column('origen', sa.ARRAY(sa.String()), nullable=True),
        sa.Column('energia', sa.ARRAY(sa.String()), nullable=True),
        sa.Column('personalidad', sa.ARRAY(sa.String()), nullable=True),
        sa.Column('sonoridad', sa.String(length=100), nullable=True),
        sa.Column('estilo', sa.String(length=50), nullable=True),
        sa.Column('numerologia', sa.String(length=50), nullable=True),
        sa.Column('personajes_famosos', sa.ARRAY(sa.String()), nullable=True),
        sa.Column('ia_generado', sa.Boolean(), nullable=False),
        sa.Column('popularidad', sa.Integer(), nullable=False),
        sa.Column('visible', sa.Boolean(), nullable=False),
        sa.Column('creado_en', sa.DateTime(), nullable=False),
        sa.PrimaryKeyConstraint('id')
    )


def downgrade():
    op.drop_table('names')
