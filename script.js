const currentYear = new Date().getFullYear();
document.getElementById(
  'footer-year'
).textContent = `© ${currentYear} VWF. All rights reserved.`;

document.addEventListener('DOMContentLoaded', function () {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const navLinks = document.querySelector('.nav-links');
  const mainContent = document.querySelector('main');

  const aboutUs = document.querySelector('#about-us');
  // aboutUs.addEventListener('click', function () {
  //   console.log('About us clicked');
  // });

  hamburgerIcon.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    mainContent.classList.toggle('main-menu-active-padding');
  });

  aboutUs.addEventListener('click', function () {
    console.log('About us clicked');
    navLinks.classList.toggle('active');
    mainContent.classList.toggle('main-menu-active-padding');
  });
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
