// scripts/searchDocs.js

const searchInput = document.getElementById("search-docs");
const docsContent = document.getElementById("docs-content");

searchInput.addEventListener("input", () => {
  const q = searchInput.value.toLowerCase();
  const elements = docsContent.querySelectorAll("h3, p, li");

  elements.forEach(el => {
    el.style.display = el.textContent.toLowerCase().includes(q) ? "block" : "none";
  });
});
