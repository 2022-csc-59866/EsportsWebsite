from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.model):
    __table__ = "users"