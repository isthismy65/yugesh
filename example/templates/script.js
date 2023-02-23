// Connect to the chat API endpoint
const chatSocket = new WebSocket(
    'ws://' + window.location.host +
    '/chat/api'
);

// Send message to the server
function sendMessage(event) {
    const messageInputDom = document.querySelector('#message-input');
    const message = messageInputDom.value;
    chatSocket.send(JSON.stringify({
        'message': message
    }));
    messageInputDom.value = '';
}

// Receive message from the server and update chat log
chatSocket.onmessage = function(event) {
    const data = JSON.parse(event.data);
    const chatLog = document.querySelector('#chat-log');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat');
    if (data['username'] === 'server') {
        messageElement.classList.add('other');
    } else {
        messageElement.classList.add('self');
    }
    messageElement.innerHTML = `
        <div class="user-photo">${data['username'].charAt(0)}</div>
        <div class="chat-message">${data['message']}</div>
    `;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}

// Add event listener for sending messages
document.querySelector('#message-form').addEventListener('submit', sendMessage);
