from dotenv import load_dotenv
import os
import redis
load_dotenv()

class ApplicationConfig:
    SECRET_KEY = os.environ["SECRET_KEY"]
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = True
    SQLALCHEMY_DATABASE_URI = ["DATABASE"]

    SESSION_TYPE = "redis"
    REDIS_URL = ["REDIS_URI"]
    SESSION_PERMANENT = False
    SESSION_USE_SIGNER = True
    SESSION_REDIS = redis.from_url(REDIS_URL)
    SESSION_COOKIE_SECURE = True
    SESSION_COOKIE_HTTPONLY = True