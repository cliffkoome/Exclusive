const heartElement = document.querySelectorAll('.like-btn .fa-heart');

heartElement.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('fa-heart-clicked')) {
      button.classList.remove('fa-heart-clicked');
    } else {
      button.classList.add('fa-heart-clicked');
    }
  });
});

document.querySelector('.fa-arrow-up').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});