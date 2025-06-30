from app.extensions import db
from datetime import datetime
import uuid

class Name(db.Model):
    __tablename__     = "names"

    id                = db.Column(db.String, primary_key=True, default=lambda: str(uuid.uuid4()))
    nombre            = db.Column(db.String(100), nullable=False)
    significado       = db.Column(db.Text, nullable=True)
    simbolo           = db.Column(db.String(100), nullable=True)
    ia_generado       = db.Column(db.Boolean, default=False, nullable=False)
    popularidad       = db.Column(db.Integer, default=0, nullable=False)
    creado_en         = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
