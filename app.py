from flask import Flask, jsonify
from flask_cors import CORS  # Import the CORS module
from contentreturn import main

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes in the app


@app.route('/python-backend-endpoint')
def get_data():
    data_dict = main()  # Call your Python function to get data
    # Process data_dict as needed
    return jsonify(data_dict)  # Return data as JSON


if __name__ == '__main__':
    # app.run(debug=True)
    print("closed")
