var modal = document.querySelector('.modal');
var overlayModal = document.querySelector('.modal-overlay');
var orderButton = document.querySelectorAll('.catalog-list__item-button-cart');
console.log(orderButton);
var closeModalButton = modal.querySelector('.cart-modal__toggle-close');

for (var i = 0; i < orderButton.length; i++) {
  orderButton[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add('modal--show');
    overlayModal.classList.add('modal-overlay--show');
  })
}

closeModalButton.addEventListener('click', function () {
  modal.classList.remove('modal--show');
  overlayModal.classList.remove('modal-overlay--show');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    modal.classList.remove('modal--show');
    overlayModal.classList.remove('modal-overlay--show');
  }
});
