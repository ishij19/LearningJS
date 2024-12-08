function getResponse() {
    let userText = document.getElementById("userInput").value;
    if (userText == "") {
        userText = "Hello!";
    }
    let chatBox = document.getElementById("chatbox");
    chatBox.innerHTML += `<p class="userText"><span>${userText}</span></p>`;

    let botResponse = getBotResponse(userText);
    setTimeout(function() {
        chatBox.innerHTML += `<p class="botText"><span>${botResponse}</span></p>`;
        document.getElementById("userInput").value = ""; // clear the input field
    }, 1000);
}

function getBotResponse(input) {
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "how are you?") {
        return "I'm doing well, thanks!";
    } else {
        return "Try asking something else!";
    }
}
