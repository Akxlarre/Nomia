# backend/app/schemas/result_schema.py
from app.extensions import ma
from app.models.result import Result
from app.schemas.quiz_log_schema import QuizLogSchema

class ResultSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Result
        load_instance = True

    # Incluir logs anidados
    logs = ma.Nested(QuizLogSchema, many=True)
