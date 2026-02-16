const buttons = document.querySelectorAll('.color-btn');

// 1. Define a function called changeColor
function changeColor() {
  // 'this' refers to the button that was clicked
  this.style.backgroundColor = 'yellow';
}

// 2. Loop through buttons with forEach
buttons.forEach(function(button) {
  // Attach changeColor as the click handler
  button.addEventListener('click', changeColor);
});
