<script>
/*****************************
 * Booking Form Handler
 *****************************/
document.addEventListener("DOMContentLoaded", () => {
  const bookingForm = document.getElementById("bookingForm");
  const popup = document.getElementById("popup");

  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = this.querySelector("input[type='text']")?.value.trim() || "User";
      const email = this.querySelector("input[type='email']")?.value.trim() || "your email";

      if (popup) {
        popup.style.display = "flex";
        setTimeout(() => {
          popup.style.display = "none";
        }, 4000);
      } else {
        alert(`Thank you, ${name}! Your project request has been submitted. We'll contact you at ${email}.`);
      }

      this.reset();
    });
  }

  /************************************
   * Matrix Code Background Animation
   ************************************/
  const canvas = document.getElementById("codeBackground");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "0101011001101100111001011010011011001010011010";
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    function drawMatrix() {
      ctx.fillStyle = "rgba(15, 23, 42, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00ff99";
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    }

    setInterval(drawMatrix, 50);

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }

  /*************************
   * Chatbot Interaction
   *************************/
  const chatbotBtn = document.getElementById("chatbot-button");
  const chatWindow = document.getElementById("chat-window");
  const closeChat = document.getElementById("close-chat");
  const sendBtn = document.getElementById("send-btn");
  const userInput = document.getElementById("user-input");
  const chatBody = document.getElementById("chat-body");

  chatbotBtn?.addEventListener("click", () => {
    if (chatWindow) chatWindow.style.display = "block";
  });

  closeChat?.addEventListener("click", () => {
    if (chatWindow) chatWindow.style.display = "none";
  });

  sendBtn?.addEventListener("click", sendMessage);
  userInput?.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });

  function sendMessage() {
    const msg = userInput?.value.trim();
    if (!msg) return;

    appendMessage(msg, "user");
    userInput.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;

    setTimeout(() => botReply(msg), 600);
  }

  function appendMessage(text, type) {
    if (!chatBody) return;
    const msgDiv = document.createElement("div");
    msgDiv.className = type === "user" ? "user-message" : "bot-message";
    msgDiv.innerText = text;
    chatBody.appendChild(msgDiv);
  }

  function botReply(input) {
    const lower = input.toLowerCase();
    let reply = "🤖 Sorry, I didn't understand that.";

    if (lower.includes("hello") || lower.includes("hi")) {
      reply = "👋 Hello! How can I assist you today?";
    } else if (lower.includes("service")) {
      reply = "🚀 We offer Web Development, UI/UX Design, and SEO services.";
    } else if (lower.includes("contact")) {
      reply = "📧 Contact us via the 'Contact Us' page or email support@zycodiva.com.";
    } else if (lower.includes("project")) {
      reply = "📝 Visit 'Request a Project' to start your dream website with us!";
    } else if (lower.includes("bye")) {
      reply = "👋 Goodbye! Have a great day.";
    }

    appendMessage(reply, "bot");
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  /*******************************************
   * Animated Zycodiva Text Transitions
   *******************************************/
  const showcase = document.getElementById("showcase");
  let index = 0;

  function createZycodiva() {
    if (!showcase) return;
    const div = document.createElement("div");
    div.className = "zycotext";
    div.style.animationDelay = `${index * 0.5}s`;
    div.textContent = "Zycodiva";
    showcase.appendChild(div);
    setTimeout(() => showcase.removeChild(div), 8000);
    index = (index + 1) % 20;
  }

  setInterval(createZycodiva, 3000);
  createZycodiva();
});
</script>

