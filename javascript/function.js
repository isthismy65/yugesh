app.post("/get-response", function(req, res) {
    const message = req.body.message;
    handleUserInput(message, function(response) {
      res.json(response);
    });
  });
  