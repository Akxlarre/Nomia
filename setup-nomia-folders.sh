#!/bin/bash

# ⚙️ Script para crear estructura y archivos iniciales del proyecto Nomia (Angular 20 standalone)

BASE="src/app"

echo "📦 Generando carpetas y archivos base para Nomia..."

# Core
mkdir -p $BASE/core/{services,api,guards,interceptors,tokens}
touch $BASE/core/services/ia.service.ts
touch $BASE/core/services/api.service.ts
touch $BASE/core/services/payment.service.ts

# Shared
mkdir -p $BASE/shared/{components,forms,pipes,directives,models,utils}
touch $BASE/shared/components/index.ts
touch $BASE/shared/models/quiz-profile.model.ts

# Theme
mkdir -p $BASE/theme/{tokens,services,utils}
touch $BASE/theme/services/theme.service.ts

# Layout
mkdir -p $BASE/layout/{components,pages}
touch $BASE/layout/components/header.component.ts
touch $BASE/layout/components/footer.component.ts

# Home (Landing)
mkdir -p $BASE/home/{pages,components}
touch $BASE/home/pages/home.page.ts

# Test (quiz emocional)
mkdir -p $BASE/test/{pages,components,services}
touch $BASE/test/pages/test.page.ts
touch $BASE/test/services/quiz.service.ts

# Result (vista premium)
mkdir -p $BASE/result/{pages,components,services}
touch $BASE/result/pages/result.page.ts
touch $BASE/result/components/name-card.component.ts
touch $BASE/result/services/result.service.ts

# Names (gestión de nombres)
mkdir -p $BASE/names/{pages,components,services}
touch $BASE/names/services/name-generator.service.ts
touch $BASE/names/components/name-list.component.ts

# Pay (pasarelas)
mkdir -p $BASE/pay/{pages,components,services}
touch $BASE/pay/services/payment-flow.service.ts
touch $BASE/pay/pages/payment-redirect.page.ts

# Admin (backoffice)
mkdir -p $BASE/admin/{pages,components,services}
touch $BASE/admin/pages/dashboard.page.ts
touch $BASE/admin/services/admin.service.ts

# Data (JSON de test y base simbólica)
mkdir -p $BASE/data/{quiz,results,names}
touch $BASE/data/quiz/ejes.json
touch $BASE/data/names/nombres-curados.json

# Utils (animaciones globales, helpers)
mkdir -p $BASE/utils/animations

# Rutas
mkdir -p $BASE/routes
touch $BASE/routes/app.routes.ts

echo "✅ Estructura + archivos base creados. Nomia está listo para comenzar."

