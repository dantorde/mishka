var modal = document.querySelector('.modal');
var overlayModal = document.querySelector('.modal-overlay');
var orderButton = document.querySelector('.popular__button-buy');
var closeModalButton = modal.querySelector('.cart-modal__toggle-close');

orderButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.add('modal--show');
  overlayModal.classList.add('modal-overlay--show');
});

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
