const box = document.querySelector('.box');

box.addEventListener('click', (event) => {

  // Arrow functions do not have their own `this`.
  // They instead borrow this within the rhetorical range around them.
  // In this situation, `this` does NOT point to the clicked element,
  // so calling this.classList.add('active') results in an error.

  // Solution: Use event.currentTarget instead of `this`.
  //  event.currentTarget gives you the element the listener is bound to
  //  (the .box div), which is the same element `this` would reference
  //  in a normal function handler.

  event.currentTarget.classList.add('active');

});
