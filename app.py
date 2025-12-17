# from flask import Flask, render_template, request, jsonify
# from pymongo import MongoClient
# import base64

# app = Flask(__name__)

# # Connect to MongoDB
# client = MongoClient("mongodb://localhost:27017/")
# db = client['UserDB']
# collection = db['registrations']

# @app.route('/')
# def index():
#     return render_template('index.html')

# @app.route('/submit', methods=['POST'])
# def submit():
#     try:
#         data = {
#             "name": request.form.get('name'),
#             "email": request.form.get('email'),
#             "phone": request.form.get('phone'),
#             "dob": request.form.get('dob'),
#             "license": request.form.get('license')
#         }

#         # Convert Image to Base64 String
#         photo = request.files.get('photo')
#         if photo:
#             encoded_img = base64.b64encode(photo.read()).decode('utf-8')
#             data['photo'] = f"data:{photo.content_type};base64,{encoded_img}"
#         else:
#             data['photo'] = None

#         collection.insert_one(data)
#         return jsonify({"msg": "Data saved successfully!"})
#     except Exception as e:
#         return jsonify({"msg": f"Error: {str(e)}"}), 500

# @app.route('/get_history', methods=['GET'])
# def get_history():
#     # Fetch all, exclude MongoDB ID
#     users = list(collection.find({}, {"_id": 0}))
#     return jsonify(users)

# if __name__ == '__main__':
#     app.run(debug=True)







# from flask import Flask, render_template, request, jsonify
# from pymongo import MongoClient
# import base64

# app = Flask(__name__)

# # MongoDB Connection
# try:
#     client = MongoClient("mongodb://localhost:27017/", serverSelectionTimeoutMS=2000)
#     db = client['UserRegistrationDB']
#     collection = db['customers']
#     # Test connection
#     client.server_info() 
# except:
#     print("ERROR: Could not connect to MongoDB. Make sure it is running!")

# @app.route('/')
# def index():
#     return render_template('index.html')

# @app.route('/submit', methods=['POST'])
# def submit():
#     try:
#         # Get text data
#         data = {
#             "name": request.form.get('name'),
#             "email": request.form.get('email'),
#             "phone": request.form.get('phone'),
#             "dob": request.form.get('dob'),
#             "license": request.form.get('license')
#         }

#         # Process Image
#         photo = request.files.get('photo')
#         if photo and photo.filename != '':
#             encoded_img = base64.b64encode(photo.read()).decode('utf-8')
#             data['photo'] = f"data:{photo.content_type};base64,{encoded_img}"
#         else:
#             data['photo'] = None

#         # Insert into Mongo
#         collection.insert_one(data)
#         print(f"Success: Registered {data['name']}")
#         return jsonify({"status": "success", "message": "Registration Saved Successfully!"})
    
#     except Exception as e:
#         print(f"Error: {e}")
#         return jsonify({"status": "error", "message": str(e)}), 500

# @app.route('/get_history', methods=['GET'])
# def history():
#     users = list(collection.find({}, {"_id": 0}))
#     return jsonify(users)

# if __name__ == '__main__':
#     app.run(debug=True)





# from flask import Flask, render_template, request, jsonify
# from pymongo import MongoClient
# import base64

# app = Flask(__name__)

# # MongoDB Setup
# try:
#     client = MongoClient("mongodb://localhost:27017/", serverSelectionTimeoutMS=5000)
#     db = client['RegistrationSystem']
#     collection = db['users']
#     client.server_info()
# except Exception as e:
#     print(f"DATABASE ERROR: {e}")

# @app.route('/')
# def index():
#     return render_template('index.html')

# @app.route('/submit', methods=['POST'])
# def submit():
#     try:
#         data = {
#             "name": request.form.get('name'),
#             "email": request.form.get('email'),
#             "phone": request.form.get('phone'),
#             "dob": request.form.get('dob'),
#             "license": request.form.get('license')
#         }
#         photo = request.files.get('photo')
#         if photo:
#             encoded = base64.b64encode(photo.read()).decode('utf-8')
#             data['photo'] = f"data:{photo.content_type};base64,{encoded}"
#         else:
#             data['photo'] = None

#         collection.insert_one(data)
#         return jsonify({"status": "success", "message": "Registered Successfully!"})
#     except Exception as e:
#         return jsonify({"status": "error", "message": str(e)}), 500

# @app.route('/get_history', methods=['GET'])
# def get_history():
#     users = list(collection.find({}, {"_id": 0}))
#     return jsonify(users)

# @app.route('/delete_user', methods=['POST'])
# def delete_user():
#     try:
#         user_email = request.json.get('email')
#         collection.delete_one({"email": user_email})
#         return jsonify({"status": "success", "message": "User deleted!"})
#     except Exception as e:
#         return jsonify({"status": "error", "message": str(e)}), 500

# if __name__ == '__main__':
#     app.run(debug=True)



# from flask import Flask, render_template, request, jsonify
# from pymongo import MongoClient
# import base64

# app = Flask(__name__)

# # MongoDB Connection
# try:
#     client = MongoClient("mongodb://localhost:27017/", serverSelectionTimeoutMS=5000)
#     db = client['RegistrationSystem']
#     collection = db['users']
#     client.server_info()
# except Exception as e:
#     print(f"DATABASE ERROR: {e}")

# @app.route('/')
# def index():
#     return render_template('index.html')

# @app.route('/submit', methods=['POST'])
# def submit():
#     try:
#         data = {
#             "name": request.form.get('name'),
#             "email": request.form.get('email'),
#             "phone": request.form.get('phone'),
#             "dob": request.form.get('dob'),
#             "license": request.form.get('license')
#         }
        
#         photo = request.files.get('photo')
#         if photo and photo.filename != '':
#             encoded = base64.b64encode(photo.read()).decode('utf-8')
#             data['photo'] = f"data:{photo.content_type};base64,{encoded}"
#         else:
#             data['photo'] = None

#         collection.insert_one(data)
#         return jsonify({"status": "success", "message": "Successfully Registered!"})
#     except Exception as e:
#         return jsonify({"status": "error", "message": str(e)}), 500

# @app.route('/get_history', methods=['GET'])
# def get_history():
#     users = list(collection.find({}, {"_id": 0}))
#     return jsonify(users)

# @app.route('/delete_user', methods=['POST'])
# def delete_user():
#     try:
#         user_email = request.json.get('email')
#         collection.delete_one({"email": user_email})
#         return jsonify({"status": "success", "message": "User deleted successfully!"})
#     except Exception as e:
#         return jsonify({"status": "error", "message": str(e)}), 500

# if __name__ == '__main__':
#     app.run(debug=True)





# from flask import Flask, render_template, request, jsonify
# from pymongo import MongoClient
# import base64

# app = Flask(__name__)

# # MongoDB Connection
# try:
#     client = MongoClient("mongodb://localhost:27017/", serverSelectionTimeoutMS=5000)
#     db = client['RegistrationSystem']
#     collection = db['users']
#     client.server_info()
# except Exception as e:
#     print(f"DATABASE ERROR: {e}")

# @app.route('/')
# def index():
#     return render_template('index.html')

# @app.route('/submit', methods=['POST'])
# def submit():
#     try:
#         data = request.form.to_dict()
        
#         # Handle the Payment Status checkbox
#         data['payment_status'] = "Completed" if request.form.get('payment_done') else "Pending"
        
#         photo = request.files.get('photo')
#         if photo and photo.filename != '':
#             encoded = base64.b64encode(photo.read()).decode('utf-8')
#             data['photo'] = f"data:{photo.content_type};base64,{encoded}"
#         else:
#             data['photo'] = None

#         collection.insert_one(data)
#         return jsonify({"status": "success", "message": "Record Saved Successfully!"})
#     except Exception as e:
#         return jsonify({"status": "error", "message": str(e)}), 500

# @app.route('/get_history', methods=['GET'])
# def get_history():
#     users = list(collection.find({}, {"_id": 0}))
#     return jsonify(users)

# @app.route('/delete_user', methods=['POST'])
# def delete_user():
#     try:
#         user_email = request.json.get('email')
#         collection.delete_one({"email": user_email})
#         return jsonify({"status": "success", "message": "Deleted!"})
#     except Exception as e:
#         return jsonify({"status": "error", "message": str(e)}), 500

# if __name__ == '__main__':
#     app.run(debug=True)




# from flask import Flask, render_template, request, jsonify
# from pymongo import MongoClient
# import base64

# app = Flask(__name__)

# # MongoDB Connection
# try:
#     client = MongoClient("mongodb://127.0.0.1:27017/", serverSelectionTimeoutMS=5000)
#     db = client['RegistrationSystem']
#     collection = db['users']
#     client.server_info()
# except Exception as e:
#     print(f"DATABASE ERROR: {e}")

# @app.route('/')
# def index():
#     return render_template('index.html')

# @app.route('/submit', methods=['POST'])
# def submit():
#     try:
#         data = request.form.to_dict()
#         # Initial Payment Status
#         data['payment_status'] = "Completed" if request.form.get('payment_done') else "Pending"
        
#         photo = request.files.get('photo')
#         if photo and photo.filename != '':
#             encoded = base64.b64encode(photo.read()).decode('utf-8')
#             data['photo'] = f"data:{photo.content_type};base64,{encoded}"
#         else:
#             data['photo'] = None

#         collection.insert_one(data)
#         return jsonify({"status": "success", "message": "Registered Successfully!"})
#     except Exception as e:
#         return jsonify({"status": "error", "message": str(e)}), 500

# @app.route('/update_payment', methods=['POST'])
# def update_payment():
#     try:
#         user_email = request.json.get('email')
#         collection.update_one({"email": user_email}, {"$set": {"payment_status": "Completed"}})
#         return jsonify({"status": "success", "message": "Payment Status Updated!"})
#     except Exception as e:
#         return jsonify({"status": "error", "message": str(e)}), 500

# @app.route('/get_history', methods=['GET'])
# def get_history():
#     users = list(collection.find({}, {"_id": 0}))
#     return jsonify(users)

# @app.route('/delete_user', methods=['POST'])
# def delete_user():
#     try:
#         user_email = request.json.get('email')
#         collection.delete_one({"email": user_email})
#         return jsonify({"status": "success", "message": "User Deleted!"})
#     except Exception as e:
#         return jsonify({"status": "error", "message": str(e)}), 500

# if __name__ == '__main__':
#     app.run(debug=True)


# from flask import Flask, render_template, request, jsonify
# from pymongo import MongoClient
# import base64

# app = Flask(__name__)

# # MongoDB Connection
# try:
#     client = MongoClient("mongodb://127.0.0.1:27017/", serverSelectionTimeoutMS=5000)
#     db = client['RegistrationSystem']
#     collection = db['users']
#     client.server_info()
# except Exception as e:
#     print(f"DATABASE ERROR: {e}")

# @app.route('/')
# def index():
#     return render_template('index.html')

# @app.route('/submit', methods=['POST'])
# def submit():
#     try:
#         data = request.form.to_dict()
#         data['payment_status'] = "COMPLETED" if request.form.get('payment_done') else "PENDING"
        
#         photo = request.files.get('photo')
#         if photo and photo.filename != '':
#             encoded = base64.b64encode(photo.read()).decode('utf-8')
#             data['photo'] = f"data:{photo.content_type};base64,{encoded}"
#         else:
#             data['photo'] = None

#         collection.insert_one(data)
#         return jsonify({"status": "success", "message": "Registered Successfully!"})
#     except Exception as e:
#         return jsonify({"status": "error", "message": str(e)}), 500

# @app.route('/update_payment', methods=['POST'])
# def update_payment():
#     try:
#         user_email = request.json.get('email')
#         collection.update_one({"email": user_email}, {"$set": {"payment_status": "COMPLETED"}})
#         return jsonify({"status": "success", "message": "Payment Status Updated!"})
#     except Exception as e:
#         return jsonify({"status": "error", "message": str(e)}), 500



# @app.route('/get_history', methods=['GET'])
# def get_history():
#     users = list(collection.find({}, {"_id": 0}))
#     return jsonify(users)

# @app.route('/delete_user', methods=['POST'])
# def delete_user():
#     try:
#         user_email = request.json.get('email')
#         collection.delete_one({"email": user_email})
#         return jsonify({"status": "success", "message": "User Deleted!"})
#     except Exception as e:
#         return jsonify({"status": "error", "message": str(e)}), 500

# if __name__ == '__main__':
#     app.run(debug=True)



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


# try:
#     railway_url = "mongodb://mongo:NQRMguRmhCiDSthMwRtofJrVrCHbJqUQ@tramway.proxy.rlwy.net:14422"
#     client = MongoClient(railway_url, serverSelectionTimeoutMS=5000)
#     db = client['RegistrationSystem']
#     collection = db['users']
    
    # This checks if the connection is actually alive
    client.server_info() 
    print("SUCCESS: Connected to Railway MongoDB!")
    
    # client = MongoClient("mongodb://127.0.0.1:27017/", serverSelectionTimeoutMS=5000)
    # db = client['RegistrationSystem']
    # collection = db['users']
    # client.server_info()
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



