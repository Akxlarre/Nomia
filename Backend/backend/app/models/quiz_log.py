# backend/app/models/quiz_log.py
from app.extensions import db
from datetime import datetime
import uuid

class QuizLog(db.Model):
    __tablename__ = "quiz_logs"

    id               = db.Column(db.String, primary_key=True, default=lambda: str(uuid.uuid4()))
    token_usuario    = db.Column(db.String, nullable=True)
    pregunta         = db.Column(db.Text,   nullable=False)
    respuesta        = db.Column(db.Text,   nullable=False)
    tiempo_respuesta = db.Column(db.Integer, nullable=False)  # en segundos
    fecha            = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)

    # FK hacia Result
    result_id        = db.Column(db.String, db.ForeignKey("results.id"), nullable=False)
