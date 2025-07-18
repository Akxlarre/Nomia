"""Create tables Result and QuizLog

Revision ID: d01be96c78aa
Revises: b8342abfa333
Create Date: 2025-06-30 13:09:26.429496

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd01be96c78aa'
down_revision = 'b8342abfa333'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('results', schema=None) as batch_op:
        batch_op.alter_column('fuente_ia',
               existing_type=sa.BOOLEAN(),
               nullable=True)
        batch_op.alter_column('pagado',
               existing_type=sa.BOOLEAN(),
               nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('results', schema=None) as batch_op:
        batch_op.alter_column('pagado',
               existing_type=sa.BOOLEAN(),
               nullable=False)
        batch_op.alter_column('fuente_ia',
               existing_type=sa.BOOLEAN(),
               nullable=False)

    # ### end Alembic commands ###
