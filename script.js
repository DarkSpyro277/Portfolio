document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navigation
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });

    // Fade-In Animations on Scroll
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        section.classList.add("hidden");
        observer.observe(section);
    });

    // Hover Effect for Project Cards
    document.querySelectorAll(".project").forEach(project => {
        project.addEventListener("mouseenter", () => {
            project.style.transform = "scale(1.05)";
            project.style.transition = "transform 0.3s ease-in-out";
        });
        project.addEventListener("mouseleave", () => {
            project.style.transform = "scale(1)";
        });
    });

    // Light/Dark Mode Toggle
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Dark Mode";
    toggleBtn.style.position = "fixed";
    toggleBtn.style.top = "10px";
    toggleBtn.style.right = "10px";
    toggleBtn.style.padding = "5px 10px";
    toggleBtn.style.cursor = "pointer";
    document.body.appendChild(toggleBtn);

    toggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            toggleBtn.textContent = "Light Mode";
        } else {
            toggleBtn.textContent = "Dark Mode";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const chatbox = document.createElement("section");
    chatbox.id = "chatbox-section";
    chatbox.innerHTML = `
        <h2>AI Chat</h2>
        <div id="chat-content"></div>
        <input type="text" id="chat-input" placeholder="Type a message...">
        <button id="send-btn">Send</button>
    `;
    document.body.appendChild(chatbox);
    
    const chatContent = document.getElementById("chat-content");
    const chatInput = document.getElementById("chat-input");
    const sendBtn = document.getElementById("send-btn");
    
    function appendMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", sender);
        messageElement.textContent = message;
        chatContent.appendChild(messageElement);
        chatContent.scrollTop = chatContent.scrollHeight;
    }
    
    sendBtn.addEventListener("click", function () {
        const userMessage = chatInput.value.trim();
        if (userMessage) {
            appendMessage("user", userMessage);
            chatInput.value = "";
            setTimeout(() => {
                appendMessage("bot", "I'm an AI bot. How can I assist you?");
            }, 1000);
        }
    });
    
    chatInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendBtn.click();
        }
    });
    
    chatbox.style.cssText = `
        width: 100%;
        max-width: 800px;
        margin: 20px auto;
        padding: 20px;
        background: white;
        border-radius: 10px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        font-family: Arial, sans-serif;
        text-align: center;
    `;
    
    chatContent.style.cssText = `
        height: 300px;
        overflow-y: auto;
        padding: 10px;
        border: 1px solid #ddd;
        margin-bottom: 10px;
    `;
    
    chatInput.style.cssText = `
        width: calc(100% - 80px);
        padding: 10px;
        border: 1px solid #ddd;
        outline: none;
    `;
    
    sendBtn.style.cssText = `
        width: 70px;
        padding: 10px;
        background: #333;
        color: white;
        border: none;
        cursor: pointer;
    `;
});

