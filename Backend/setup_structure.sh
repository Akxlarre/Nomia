#!/usr/bin/env bash

set -euo pipefail

# Directorio base
BASE_DIR="backend"

# Crear carpetas
mkdir -p "$BASE_DIR"/alembic
mkdir -p "$BASE_DIR"/app/models
mkdir -p "$BASE_DIR"/app/blueprints
mkdir -p "$BASE_DIR"/app/utils

# Crear archivos en la raíz de backend
touch "$BASE_DIR"/.env
touch "$BASE_DIR"/.env.example
touch "$BASE_DIR"/requirements.txt
touch "$BASE_DIR"/wsgi.py

# Crear archivos dentro de app/
touch "$BASE_DIR"/app/__init__.py
touch "$BASE_DIR"/app/config.py
touch "$BASE_DIR"/app/extensions.py

echo "Estructura de carpetas y archivos creada exitosamente bajo '$BASE_DIR/'."
