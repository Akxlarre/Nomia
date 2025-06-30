# backend/app/blueprints/test/routes.py
from flask             import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required
from app.extensions    import db
from app.models.result import Result
from app.models.quiz_log import QuizLog
from app.schemas.result_schema import ResultSchema

bp = Blueprint("test", __name__, url_prefix="/api/test")

@bp.route("", methods=["POST"])
def create_test():
    """
    Recibe el quizProfile completo y opcional array de quiz_logs:
    {
      quiz_profile: { … },
      quiz_logs: [
        { pregunta, respuesta, tiempo_respuesta },
        …
      ]
    }
    """
    payload = request.get_json() or {}
    profile = payload.get("quiz_profile")
    logs_in  = payload.get("quiz_logs", [])
    token    = profile.get("metadata", {}).get("token_sesion")

    # 1) Crear Result
    result = Result(
        token_usuario=token,
        quiz_profile=profile
    )
    db.session.add(result)
    db.session.commit()  # para obtener result.id

    # 2) Crear logs
    for log in logs_in:
        ql = QuizLog(
            token_usuario    = token,
            pregunta         = log["pregunta"],
            respuesta        = log["respuesta"],
            tiempo_respuesta = log["tiempo_respuesta"],
            result_id        = result.id
        )
        db.session.add(ql)
    db.session.commit()

    # 3) Devolver el resultado serializado
    schema = ResultSchema()
    return jsonify(schema.dump(result)), 201

@bp.route("/<id>", methods=["GET"])
def get_test(id):
    """Recupera un resultado por su ID (incluye logs)."""
    result = Result.query.get_or_404(id)
    schema = ResultSchema()
    return jsonify(schema.dump(result)), 200

@bp.route("", methods=["GET"])
@jwt_required()
def list_tests():
    """Listado paginado (solo admin)."""
    page     = int(request.args.get("page", 1))
    per_page = int(request.args.get("per_page", 20))
    q        = Result.query.order_by(Result.fecha.desc()) \
                             .paginate(page, per_page, error_out=False)

    schema = ResultSchema(many=True)
    return jsonify({
        "items": schema.dump(q.items),
        "total": q.total,
        "page":  q.page,
        "pages": q.pages
    }), 200
