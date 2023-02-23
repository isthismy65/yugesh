import mysql.connector

# Connect to the MySQL database
db = mysql.connector.connect(
    host="localhost",
    user="yourusername",
    password="yourpassword",
    database="yourdatabase"
)

# Create a cursor object to execute queries
cursor = db.cursor()

# Define a function to fetch data from the database
def get_response(query):
    cursor.execute(query)
    result = cursor.fetchone()
    if result is not None:
        return result[0]
    else:
        return "Sorry, I don't understand."

# Define a function to handle user input and fetch responses
def handle_user_input(user_input):
    query = f"SELECT response FROM chatbot WHERE question LIKE '{user_input}%'"
    response = get_response(query)
    return response
