// packages/Store/forum.js
import { addPost, getPosts } from "./store.js";

const postsContainer = document.getElementById("posts");
const input = document.getElementById("post-input");
const send = document.getElementById("send-btn");

// Render all posts
function renderPosts() {
  const posts = getPosts();

  postsContainer.innerHTML = posts
    .map(
      (p) => `
      <div class="card" style="margin-top:12px; padding:14px;">
        <p style="white-space:pre-wrap;">${p.text}</p>
        <p style="opacity:0.5; margin-top:6px; font-size:13px;">
          ${new Date(p.time).toLocaleString()}
        </p>
      </div>
    `
    )
    .join("");
}

// Send post
send.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;

  addPost(text);
  input.value = "";
  renderPosts();
});

renderPosts();
