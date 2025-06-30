from app.extensions import db
from datetime import datetime
import uuid

class Name(db.Model):
    __tablename__     = "names"

    id                = db.Column(db.String, primary_key=True, default=lambda: str(uuid.uuid4()))
    nombre            = db.Column(db.String(100), nullable=False)
    significado       = db.Column(db.Text)
    simbolo           = db.Column(db.String(100))
    origen            = db.Column(db.ARRAY(db.String), default=list)
    energia           = db.Column(db.ARRAY(db.String), default=list)
    personalidad      = db.Column(db.ARRAY(db.String), default=list)
    sonoridad         = db.Column(db.String(100))
    estilo            = db.Column(db.String(50))
    numerologia       = db.Column(db.String(50))
    personajes_famosos = db.Column(db.ARRAY(db.String), default=list)
    ia_generado       = db.Column(db.Boolean, default=False, nullable=False)
    popularidad       = db.Column(db.Integer, default=0, nullable=False)
    visible           = db.Column(db.Boolean, default=True, nullable=False)
    creado_en         = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
