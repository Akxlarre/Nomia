from app.extensions import db
from datetime import datetime
import uuid

class User(db.Model):
    __tablename__ = "users"

    id            = db.Column(db.String, primary_key=True, default=lambda: str(uuid.uuid4()))
    email         = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    role          = db.Column(db.String(20), default="guest", nullable=False)
    creado_en     = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    activo        = db.Column(db.Boolean, default=True, nullable=False)

    def check_password(self, password, bcrypt):
        return bcrypt.check_password_hash(self.password_hash, password)