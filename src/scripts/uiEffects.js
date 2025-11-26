export function fadeIn(el) {
el.style.opacity = 0;
el.style.transition = 'opacity 0.3s ease';
requestAnimationFrame(() => {
el.style.opacity = 1;
});
}


export function slideDown(el) {
el.style.maxHeight = '0px';
el.style.overflow = 'hidden';
el.style.transition = 'max-height 0.4s ease';
requestAnimationFrame(() => {
el.style.maxHeight = '500px';
});
}