from flask           import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from app.extensions  import db, bcrypt
from app.models.user import User

bp = Blueprint("auth", __name__, url_prefix="/api/auth")

@bp.route("/login", methods=["POST"])
def login():
    data = request.get_json() or {}
    email    = data.get("email")
    password = data.get("password")
    if not email or not password:
        return jsonify(msg="Faltan credenciales"), 400

    user = User.query.filter_by(email=email, activo=True).first()
    if not user or not user.check_password(password, bcrypt):
        return jsonify(msg="Credenciales inválidas"), 401

    access_token = create_access_token(identity=user.id)
    return jsonify(access_token=access_token), 200