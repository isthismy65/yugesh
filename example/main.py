from flask import Flask, render_template, request
import mysql.connector

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('p1.html')

@app.route('/chatbot', methods=['POST'])
def chatbot():
    # Get user input from form submission
    user_input = request.form['user_input']

    # Connect to MySQL database
    cnx = mysql.connector.connect(user='myuser', password='mypassword', host='localhost', database='mydatabase')
    cursor = cnx.cursor()

    # Execute query
    query = "SELECT response FROM chatbot_responses WHERE query = %s"
    params = (user_input,)
    cursor.execute(query, params)

    # Fetch results
    result = cursor.fetchone()
    if result is not None:
        response = result[0]
    else:
        response = "I'm sorry, I don't understand. Please try asking me something else."

    # Clean up
    cursor.close()
    cnx.close()

    # Return chatbot response to webpage
    return response

if __name__ == '__main__':
    app.run()
