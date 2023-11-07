const messageForm = document.getElementById("messageForm");
const messageInput = document.getElementById("message");
const messageList = document.getElementById("messageList");

messageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const messageText = messageInput.value;
    
    // Send the message to the server (you'll need to define this part on the server-side).
    // For simplicity, we'll just display it on the client-side.
    displayMessage(messageText);
    
    // Clear the input field
    messageInput.value = "";
});

function displayMessage(message) {
    const messageItem = document.createElement("div");
    messageItem.textContent = message;
    messageList.appendChild(messageItem);
}
