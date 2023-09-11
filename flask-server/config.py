from dotenv import load_dotenv
import os
import redis
load_dotenv()

class ApplicationConfig:
    SECRET_KEY = os.environ["SECRET_KEY"]
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = True
    SQLALCHEMY_DATABASE_URI = r"postgresql://csbctgwl:UO4cAHExA9WgIS-BjhN1pFRoZ8QLsOfZ@drona.db.elephantsql.com/csbctgwl"

    SESSION_TYPE = "redis"
    SESSION_PERMANENT = False
    SESSION_USE_SIGNER = True
    SESSION_REDIS = redis.from_url("rediss://red-chio9ae4dad01annfng0:At2i6kqMwQjEq782u8dY3NvBHWZyVrX0@ohio-redis.render.com:6379")
    SESSION_COOKIE_SECURE = True
    SESSION_COOKIE_HTTPONLY = True