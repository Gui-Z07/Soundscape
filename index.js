const spans = document.querySelectorAll('.pricipal-titles-main');
spans.forEach((article, index) => {
    article.style.setProperty('--delay', index);
});
