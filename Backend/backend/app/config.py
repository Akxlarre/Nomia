import os

class Config:
    SQLALCHEMY_DATABASE_URI        = os.getenv("DATABASE_URL")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY                 = os.getenv("JWT_SECRET_KEY")
    JWT_ACCESS_TOKEN_EXPIRES       = 3600  # segundos
    WEBPAY_API_KEY                 = os.getenv("WEBPAY_API_KEY")
    MP_ACCESS_TOKEN                = os.getenv("MP_ACCESS_TOKEN")