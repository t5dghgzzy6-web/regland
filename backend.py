from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({'status': 'ok'}), 200

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.json
    # Here you would process/store/send the contact form data
    return jsonify({'message': 'Contact form received', 'data': data}), 200

@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    # Here you would handle user registration logic
    return jsonify({'message': 'User registration received', 'data': data}), 200

if __name__ == '__main__':
    app.run(port=5000, debug=True)
