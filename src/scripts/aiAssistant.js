const aiInput = document.getElementById("aiInput");
const aiSend = document.getElementById("aiSend");
const aiPanel = document.getElementById("aiPanel");
const aiMessages = document.getElementById("aiMessages");
const aiClose = document.getElementById("aiClose");

// Open chat when typing
aiInput.addEventListener("focus", () => {
  aiPanel.style.display = "flex";
});

// Close panel
aiClose.addEventListener("click", () => {
  aiPanel.style.display = "none";
});

aiSend.addEventListener("click", () => {
  const text = aiInput.value.trim();
  if (!text) return;

  aiMessages.innerHTML += `
    <div class="ai-message"><b>You:</b> ${text}</div>
  `;

  aiInput.value = "";

  setTimeout(() => {
    aiMessages.innerHTML += `
      <div class="ai-message"><b>AI:</b> Processing your request…</div>
    `;
    aiMessages.scrollTop = aiMessages.scrollHeight;
  }, 500);
});
