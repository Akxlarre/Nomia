# backend/app/models/result.py
from app.extensions import db
from datetime import datetime
import uuid

class Result(db.Model):
    __tablename__ = "results"

    id               = db.Column(db.String, primary_key=True, default=lambda: str(uuid.uuid4()))
    token_usuario    = db.Column(db.String, nullable=True)
    quiz_profile     = db.Column(db.JSON, nullable=False)
    nombres_entregados = db.Column(db.ARRAY(db.String), default=[])
    fuente_ia        = db.Column(db.Boolean, default=False)
    pagado           = db.Column(db.Boolean, default=False)
    fecha            = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)

    # Relación con logs
    logs             = db.relationship("QuizLog", backref="result", lazy=True)
