from flask             import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required
from sqlalchemy        import desc
from app.extensions    import db
from app.models.name   import Name
from app.schemas.name_schema import NameSchema

bp = Blueprint("names", __name__, url_prefix="/api/names")

@bp.route("", methods=["POST"])
def create_name():
    """
    Recibe JSON:
    {
      nombre: string,
      significado: string,
      simbolo: string,
      ia_generado: bool
    }
    """
    data = request.get_json() or {}
    # Validar campos mínimos
    if not data.get("nombre"):
        return jsonify(msg="El campo 'nombre' es obligatorio"), 400

    name = Name(
        nombre      = data["nombre"],
        significado = data.get("significado"),
        simbolo     = data.get("simbolo"),
        ia_generado = data.get("ia_generado", False),
    )
    db.session.add(name)
    db.session.commit()

    schema = NameSchema()
    return jsonify(schema.dump(name)), 201

@bp.route("/popular", methods=["GET"])
def list_popular():
    """
    Devuelve los top 10 nombres ordenados por popularidad descendente.
    """
    top_n = int(request.args.get("top", 10))
    names = Name.query.order_by(desc(Name.popularidad)).limit(top_n).all()
    schema = NameSchema(many=True)
    return jsonify(schema.dump(names)), 200

@bp.route("/<id>", methods=["GET"])
def get_name(id):
    """
    Detalle de un nombre por ID.
    """
    name = Name.query.get_or_404(id)
    schema = NameSchema()
    return jsonify(schema.dump(name)), 200

@bp.route("/<id>/increment", methods=["POST"])
def increment_popularity(id):
    """
    Incrementa en 1 la popularidad del nombre (uso interno).
    """
    name = Name.query.get_or_404(id)
    name.popularidad += 1
    db.session.commit()
    return jsonify(popularidad=name.popularidad), 200
