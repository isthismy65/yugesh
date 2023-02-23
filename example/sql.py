import mysql.connector

# Connect to MySQL database
cnx = mysql.connector.connect(user='myuser', password='mypassword', host='localhost', database='mydatabase')
cursor = cnx.cursor()

# Execute query
query = "SELECT response FROM chatbot_responses WHERE query = %s"
params = ("Hello",) # replace with user input
cursor.execute(query, params)

# Fetch results
result = cursor.fetchone()
if result is not None:
    response = result[0]
    print(response) # replace with code to send response to webpage
else:
    print("I'm sorry, I don't understand. Please try asking me something else.") # replace with code to send response to webpage

# Clean up
cursor.close()
cnx.close()
