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
  // Get references to the gallery images, modal elements, and current image index
  const galleryImages = document.querySelectorAll('.gallery-img');
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const closeModalButton = document.getElementById('closeModal');
  let currentImageIndex = 0;

  // Function to display the current image in the modal
  function showImageInModal() {
    modalImage.src = galleryImages[currentImageIndex].src;
    modal.style.display = 'block';
  }

  // Function to close the modal
  function closeModal() {
    modal.style.display = 'none';
  }

  // Function to navigate to the next image in the modal
  function nextImageInModal() {
    currentImageIndex++;
    if (currentImageIndex >= galleryImages.length) {
      currentImageIndex = 0;
    }
    showImageInModal();
  }

  // Function to navigate to the previous image in the modal
  function prevImageInModal() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
      currentImageIndex = galleryImages.length - 1;
    }
    showImageInModal();
  }

  // Attach keyboard event listeners for modal navigation
  document.addEventListener('keydown', function (event) {
    if (modal.style.display === 'block') {
      if (event.key === 'ArrowRight') {
        nextImageInModal();
      } else if (event.key === 'ArrowLeft') {
        prevImageInModal();
      } else if (event.key === 'Escape') {
        closeModal();
      }
    }
  });

  // Variables to store touch start coordinates
  let touchStartX = 0;
  let touchStartY = 0;

  // Function to handle touch start event
  function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
  }

  // Function to handle touch end event
  function handleTouchEnd(event) {
    const touchEndX = event.changedTouches[0].clientX;
    const touchEndY = event.changedTouches[0].clientY;
    const touchXDiff = touchEndX - touchStartX;
    const touchYDiff = touchEndY - touchStartY;

    if (Math.abs(touchXDiff) > Math.abs(touchYDiff)) {
      // Horizontal swipe detected
      if (touchXDiff > 0) {
        prevImageInModal(); // Swipe right
      } else {
        nextImageInModal(); // Swipe left
      }
    }
  }

  // Attach touch event listeners to the modal
  modal.addEventListener('touchstart', handleTouchStart);
  modal.addEventListener('touchend', handleTouchEnd);

  // Attach click event listener to open modal when a gallery image is clicked
  galleryImages.forEach((image, index) => {
    image.addEventListener('click', function () {
      currentImageIndex = index;
      showImageInModal();
    });
  });

  // Attach click event listener to close modal when clicking outside the image
  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Attach click event listener to close modal
  closeModalButton.addEventListener('click', closeModal);
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
