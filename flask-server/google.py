from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity

app = Flask(__name__)
app.config["SECRET_KEY"] = "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"  # Change this to a secure secret key
jwt = JWTManager(app)
CORS(app)  # Enable Cross-Origin Resource Sharing

# Mock user data
users = {}


@app.route("/api/google/login", methods=["POST"])
def google_login():
    id_token = request.json.get("id_token")

    if not id_token:
        return jsonify({"message": "Missing ID token"}), 400

    # Verify and decode the ID token using the appropriate library (e.g., google-auth-library)
    # For this example, we'll assume the ID token is valid and contains the required user information
    user_info = {
        "username": "user123",
        "email": "user123@example.com",
        "name": "John Doe"
    }

    users[user_info["username"]] = user_info  # Store the user information in the users dictionary

    access_token = create_access_token(identity=user_info["username"])
    return jsonify({"access_token": access_token})


@app.route("/api/logout", methods=["POST"])
@jwt_required()
def logout():
    current_user = get_jwt_identity()
    users.pop(current_user, None)
    return jsonify({"message": "Logout successful"})


if __name__ == "__main__":
    app.run(debug=True)