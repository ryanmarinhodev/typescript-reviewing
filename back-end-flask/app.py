from flask import Flask, jsonify # type: ignore
from flask_cors import CORS # type: ignore

app = Flask(__name__)
CORS(app)

@app.route("/api/hello")
def hello():
    return jsonify({"message": "Olá world ryan!"})

if __name__ == "__main__":
    app.run(port=5000, debug=True)
