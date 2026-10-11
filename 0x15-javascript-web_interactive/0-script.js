// select the element
const element = document.querySelector('header');

// Check if element was found
if (element) {
    // set color
    element.style.color = '#FFOOO';
} else {
    console.error('Header element not found');
}
