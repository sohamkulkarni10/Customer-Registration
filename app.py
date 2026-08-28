

import os
from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient
from dotenv import load_dotenv
import base64

load_dotenv() # This loads the variables from .env

app = Flask(__name__)

# MongoDB Connection

MONGO_URL = os.getenv("MONGO_URI", "mongodb://127.0.0.1:27017/")

try:
    client = MongoClient(MONGO_URL, serverSelectionTimeoutMS=5000)
    db = client['RegistrationSystem']
    collection = db['users']
    client.admin.command('ping') # Test the connection
    print("✅ SUCCESS: Connected to Railway via .env!")

except Exception as e:
    print(f"DATABASE ERROR: {e}")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    try:
        data = request.form.to_dict()
        data['payment_status'] = "COMPLETED" if request.form.get('payment_done') else "PENDING"
        
        photo = request.files.get('photo')
        if photo and photo.filename != '':
            encoded = base64.b64encode(photo.read()).decode('utf-8')
            data['photo'] = f"data:{photo.content_type};base64,{encoded}"
        else:
            data['photo'] = None

        collection.insert_one(data)
        return jsonify({"status": "success", "message": "Registered Successfully!"})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

@app.route('/update_payment', methods=['POST'])
def update_payment():
    try:
        user_email = request.json.get('email')
        # This update sets the status to COMPLETED and all balances to 00
        collection.update_one(
            {"email": user_email}, 
            {"$set": {
                "payment_status": "COMPLETED",
                "total_remaining": "00",
                "inst1_rem": "00",
                "inst2_rem": "00"
            }}
        )
        return jsonify({"status": "success", "message": "Payment Status & Balances Updated!"})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

@app.route('/get_history', methods=['GET'])
def get_history():
    users = list(collection.find({}, {"_id": 0}))
    return jsonify(users)

@app.route('/delete_user', methods=['POST'])
def delete_user():
    try:
        user_email = request.json.get('email')
        collection.delete_one({"email": user_email})
        return jsonify({"status": "success", "message": "User Deleted!"})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)



