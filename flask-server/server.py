from flask import Flask, request, abort, jsonify, session, redirect, url_for
from flask_bcrypt import Bcrypt 
from flask_session import Session
from flask_cors import CORS
from config import ApplicationConfig
import os
from models import db, User, Message, Subscription, Careers

app=Flask(__name__)
CORS(app, supports_credentials=True, resources={r"/login": {"origins": "https://esportsfrenzy.netlify.app"}, r"/register": {"origins": "https://esportsfrenzy.netlify.app"}, r"/@me": {"origins": "https://esportsfrenzy.netlify.app"}})
app.config.from_object(ApplicationConfig)

bcrypt = Bcrypt(app) 
server_session = Session(app)

db.init_app(app)
with app.app_context():
    db.create_all()

@app.route("/@me")
def get_current_user():
    user_id = session.get("user_id")

    if not user_id:
        return jsonify({"error" : "Unauthorized"}), 401

    user = User.query.filter_by(id=user_id).first()
    return jsonify({
        "id" : user.id,
        "email" : user.email
    })

@app.route('/login', methods=["POST"])
def login_user():
    email = request.json["email"]
    password = request.json["password"]

    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"error" : "Unauthorized"}), 401

    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error" : "Unauthorized"}), 401

    session["user_id"] = user.id

    return jsonify({
        "id" : user.id,
        "email" : user.email
    })

@app.route('/logout', methods=["POST"])
def logout_user():
    session.pop("user_id")
    return "200"

@app.route('/register', methods=["POST"])
def register_user():
    email = request.json["email"]
    password = request.json["password"]

    user_exists = User.query.filter_by(email=email).first() is not None

    if user_exists:
        return jsonify({"error" : "User already exists"}), 409

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    new_user = User(email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    session["user_id"] = new_user.id

    return jsonify({
        "id" : new_user.id,
        "email" : new_user.email
    })

@app.route('/message', methods=["POST"])
def enter_message():
    email = request.json["email"]
    full_name = request.json["full_name"]
    subject = request.json["subject"]
    message = request.json["message"]

    message = Message(email=email, full_name=full_name, subject=subject, message=message)
    db.session.add(message)
    db.session.commit()
    return "200"

@app.route('/subscription', methods=["POST"])
def join_list():
    email = request.json["email"]

    subscription = Subscription(email=email)
    db.session.add(subscription)
    db.session.commit()
    return "200"

@app.route('/careers', methods=["POST"])
def apply_job():
    email = request.json["email"]
    full_name = request.json["full_name"]
    position = request.json["position"]

    careers = Careers(email=email, full_name=full_name, position=position)
    db.session.add(careers)
    db.session.commit()
    return "200"

if __name__ == "__main__":
    app.run() 