// scripts/aiAssistant.js

console.log("AI Assistant Loaded");

const aiInput = document.getElementById("ai-question");
const aiOutput = document.getElementById("ai-response");

const badWords = [
  "fuck", "shit", "bitch", "asshole", "cunt",
  "nigga", "nigger", "slut", "whore", "kill", "suicide"
];

aiInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    runAI(aiInput.value.trim());
  }
});

function runAI(question) {
  if (!question) return;

  const lowered = question.toLowerCase();

  // Bad word detection
  if (badWords.some(w => lowered.includes(w))) {
    aiOutput.textContent = "I am currently unable to assist you with that.";
    aiInput.value = "";
    return;
  }

  // Simple AI auto reply
  const response = generateAIResponse(question);

  aiOutput.textContent = response;
  aiInput.value = "";
}

function generateAIResponse(q) {
  // Lightweight AI-style responses
  if (q.includes("ugc")) {
    return "UGC items are created using Blender + textured in Substance Painter. Need specifics?";
  }

  if (q.includes("game") || q.includes("development")) {
    return "Game development involves modular scripting, UI, optimization, and testing. I can explain any part.";
  }

  if (q.includes("optimize")) {
    return "To optimize: reduce textures, use LOD, limit loops, and use CollectionService.";
  }

  if (q.includes("plugin")) {
    return "Plugins automate tasks like animation, materials, or map cleanup. I can explain how.";
  }

  // Default response
  return "Here’s what I can tell you: " + 
         "This topic is interesting! I can help explain it if you share more details.";
}
