const swatches = document.querySelectorAll('.swatch');

// Define a regular function (NOT arrow function)
function applyColor() {
  // Read the data-color attribute
  const color = this.dataset.color;

  // Apply it as the background color
  this.style.backgroundColor = color;
}

// Attach the handler to every swatch
swatches.forEach(function(swatch) {
  swatch.addEventListener('click', applyColor);
});
