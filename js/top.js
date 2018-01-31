var dropdownButton = document.querySelector('.dropdown-button');
var dropdownContent = document.querySelector('.dropdown-content');

dropdownContent.addEventListener('mouseover', function() {
    dropdownButton.style.textShadow = '0 0 8px white';
});

dropdownContent.addEventListener('mouseout', function() {
    dropdownButton.style.textShadow = '0 0 0 white';
});