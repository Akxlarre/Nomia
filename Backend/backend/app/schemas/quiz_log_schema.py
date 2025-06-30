# backend/app/schemas/quiz_log_schema.py
from app.extensions import ma
from app.models.quiz_log import QuizLog

class QuizLogSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = QuizLog
        load_instance = True
        include_fk = True