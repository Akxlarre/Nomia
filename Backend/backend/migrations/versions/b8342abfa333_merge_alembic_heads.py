"""Merge alembic heads

Revision ID: b8342abfa333
Revises: 20250630165906, dc883c92b343
Create Date: 2025-06-30 13:07:13.673074

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b8342abfa333'
down_revision = ('20250630165906', 'dc883c92b343')
branch_labels = None
depends_on = None


def upgrade():
    pass


def downgrade():
    pass
