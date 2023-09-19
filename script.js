const currentYear = new Date().getFullYear();
document.getElementById(
  'footer-year'
).textContent = `© ${currentYear} VWF. All rights reserved.`;

document.addEventListener('DOMContentLoaded', function () {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const navLinks = document.querySelector('.nav-links');
  const mainContent = document.querySelector('main');

  // const aboutUs = document.querySelector('#about-us-desc');

  hamburgerIcon.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    mainContent.classList.toggle('main-menu-active-padding');
  });

  // aboutUs.addEventListener('click', function () {
  //   // navLinks.classList.toggle('active');
  //   console.log('clicked');
  //   mainContent.classList.toggle('main-menu-active-active-padding');
  // });

  // Get the modal, modal image, and close button
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const closeModal = document.querySelector('.close');

  // Get all images in the gallery
  const galleryImages = document.querySelectorAll('.gallery img');

  // Add click event listeners to gallery images
  galleryImages.forEach((image) => {
    image.addEventListener('click', () => {
      modal.style.display = 'block'; // Display the modal
      modalImage.src = image.src; // Set the modal image source to the clicked image
    });
  });

  // Close the modal when the close button or outside the modal is clicked
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none'; // Hide the modal
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none'; // Close modal if clicked outside of the modal content
    }
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

document.addEventListener('DOMContentLoaded', function () {
  console.log('Gallery');
  // Get all images in the gallery
  const images = document.querySelectorAll('.gallery img');
  console.log(images);

  // Get the modal and modal image elements
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');

  // Function to open the modal and display the clicked image
  function openModal(imageSrc) {
    modal.style.display = 'block';
    modalImage.src = imageSrc;
  }

  // Add click event listeners to all gallery images
  images.forEach((image) => {
    image.addEventListener('click', () => {
      console.log('clicked');
      openModal(image.src);
    });
  });

  // Function to close the modal when the close button is clicked
  document.getElementById('closeModal').addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close the modal when the user clicks anywhere outside of it
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
