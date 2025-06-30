from flask import Flask
from app.config     import Config
from app.extensions import db, migrate, jwt, bcrypt, ma

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Inicializar extensiones
    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)
    bcrypt.init_app(app)
    ma.init_app(app)

    # Registrar blueprints
    from app.blueprints.auth.routes import bp as auth_bp
    app.register_blueprint(auth_bp)
    from app.blueprints.test.routes import bp as test_bp
    app.register_blueprint(test_bp)
    from app.blueprints.names.routes import bp as names_bp
    app.register_blueprint(names_bp)
    return app