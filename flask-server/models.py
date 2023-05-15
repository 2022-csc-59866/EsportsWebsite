from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4

db = SQLAlchemy()

def get_uuid():
    return uuid4().hex

class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.String(32), primary_key=True, unique=True, default=get_uuid)
    email = db.Column(db.String(345), unique=True)
    password = db.Column(db.Text, nullable=False)

class Message(db.Model):
    __tablename__ = "messages"
    id = db.Column(db.String(32), primary_key=True, unique=True, default=get_uuid)
    email = db.Column(db.String(345))
    full_name = db.Column(db.String(255))
    subject = db.Column(db.String(255))
    message = db.Column(db.String(5000))

class Subscription(db.Model):
    __tablename__ = "subscription"
    id = db.Column(db.String(32), primary_key=True, unique=True, default=get_uuid)
    email = db.Column(db.String(345))

class Careers(db.Model):
    __tablename__ = "careers"
    id = db.Column(db.String(32), primary_key=True, unique=True, default=get_uuid)
    email = db.Column(db.String(345))
    full_name = db.Column(db.String(255))
    position = db.Column(db.String(255))