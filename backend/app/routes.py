from flask import Blueprint, request, jsonify
from app.models import User, db

api_bp = Blueprint('api', __name__)

@api_bp.route('/api/auth/login', methods=['POST'])
def login():
    print("Login route was hit")  # Debugging statement
    data = request.json
    username = data.get('username')
    password = data.get('password')
    print(f"Received data: {data}")  # Debugging statement
    user = User.query.filter_by(username=username, password=password).first()
    if user:
        response = {'user': {'id': user.id, 'username': user.username}}
        print(f"Login successful: {response}")  # Debugging statement
        return jsonify(response), 200
    print("Login failed: Invalid credentials")  # Debugging statement
    return jsonify({'message': 'Invalid credentials'}), 401

#for testing the route
@api_bp.route('/test', methods=['GET'])
def test_route():
    return "Test route is working", 200
