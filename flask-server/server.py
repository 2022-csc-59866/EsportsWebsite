from flask import Flask, render_template
from flask_cors import CORS

app=Flask(__name__)
CORS(app)

# Members API Routes
@app.route('/members')
def members():
    return {"members" : ["Member1, Member2, Member3"]}

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/register')
def register():
    return render_template('register.html')

if __name__ == "__main__":
    app.run(debug=True) 