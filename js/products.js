var claire = document.querySelector('.claire');
var margharita = document.querySelector('.margharita');
var claireTitle = claire.querySelector('.products__product-title');
var margharitaTitle = margharita.querySelector('.products__product-title');

// Hide claire product title
claire.addEventListener('mouseover', function() {
    claireTitle.style.opacity = '0';
});
// Show claire product title
claire.addEventListener('mouseout', function() {
    claireTitle.style.opacity = '1';
});

// Hide margharita product title
margharita.addEventListener('mouseover', function() {
    margharitaTitle.style.opacity = '0';
});
// Show margharita product title
margharita.addEventListener('mouseout', function() {
    margharitaTitle.style.opacity = '1';
});