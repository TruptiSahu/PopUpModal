const forgetBtn = document.querySelector('.btn');
const modal = document.querySelector('.modal');
const content = document.querySelector('.content');
const closeModal = document.querySelector('.modal__close');

forgetBtn.addEventListener('click', () => {
  modal.classList.add('active');
  content.classList.add('active');
});

closeModal.addEventListener('click', () => {
  content.classList.remove('active');
  modal.classList.remove('active');
});
