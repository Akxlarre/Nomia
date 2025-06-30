from app.extensions import ma
from app.models.name import Name

class NameSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Name
        load_instance = True