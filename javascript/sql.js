// Connect to the MySQL database
const db = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword",
    database: "yourdatabase"
  });
  
  // Define a function to fetch data from the database
  function getResponse(query, callback) {
    db.query(query, function (error, results, fields) {
      if (error) throw error;
      if (results.length > 0) {
        callback(results[0].response);
      } else {
        callback("Sorry, I don't understand.");
      }
    });
  }
  
  // Define a function to handle user input and fetch responses
  function handleUserInput(userInput, callback) {
    const query = `SELECT response FROM chatbot WHERE question LIKE '${userInput}%'`;
    getResponse(query, callback);
  }
  