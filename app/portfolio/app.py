from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

# Dummy data
dummy_data = [
    {"id": 1, "name": "John Doe", "age": 30},
    {"id": 2, "name": "Jane Smith", "age": 25},
    {"id": 3, "name": "Alice Johnson", "age": 35}
]

@app.route('/api/data')
def get_data():
    return jsonify(dummy_data)

if __name__ == '__main__':
    app.run(debug=True)
