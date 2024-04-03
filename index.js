const spans = document.querySelectorAll('.titles');
spans.forEach((span, index) => {
    span.style.setProperty('--delay', index);
});
