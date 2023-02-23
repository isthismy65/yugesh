$.ajax({
    url: "/get-response",
    method: "POST",
    data: {
      message: message
    },
    success: function(response) {
      appendMessage(response, false);
    },
    error: function() {
      appendMessage("Sorry, an error occurred. Please try again.", false);
    }
  });
  