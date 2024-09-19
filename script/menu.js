const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links-mobile');
const overlay = document.getElementById('overlay');
const close = document.querySelector('.close-menu');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');  // Toggle the slide-in menu
  overlay.classList.toggle('active');   // Toggle the background overlay
});

// Optional: Close the menu if the user clicks on the overlay
overlay.addEventListener('click', () => {
  navLinks.classList.remove('active');
  overlay.classList.remove('active');
});

close.addEventListener('click', () => {
  navLinks.classList.remove('active');
  overlay.classList.remove('active');
});
