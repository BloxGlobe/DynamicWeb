export function setTheme(mode) {
document.documentElement.setAttribute('data-theme', mode);
localStorage.setItem('theme', mode);
}


export function loadTheme() {
const saved = localStorage.getItem('theme') || 'dark';
setTheme(saved);
}