!function() {
  'use strict';

  const button = document.querySelector('#donate-button');
  const modal = document.querySelector('.modal');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('active');
  });
}();
