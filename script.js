const currentYear = new Date().getFullYear();
document.getElementById(
  'footer-year'
).textContent = `© ${currentYear} VWF. All rights reserved.`;

document.addEventListener('DOMContentLoaded', function () {
  async function createGallery() {
    const gallery = document.getElementById('imageGallery');
    const images = [
      '20231126_162904.jpg',
      '20231126_162924.jpg',
      '20231126_163007.jpg',
      '20231126_163110.jpg',
      '20231126_162834.jpg',
      '20231126_162840(1).jpg',
      '20231126_162840.jpg',
      '20231126_162854(1).jpg',
      '20231126_162854.jpg',
      '20231126_162902.jpg',
      '20231126_162904.jpg',
      '20231126_162924.jpg',
      '20231126_162925.jpg',
      '20231126_162952.jpg',
      '20231126_163005.jpg',
      '20231126_163007.jpg',
      '20231126_163038.jpg',
      '20231126_163042.jpg',
      '20231126_163046.jpg',
      '20231126_163048.jpg',
      '20231126_163051.jpg',
      '20231126_163053.jpg',
      '20231126_163110.jpg',
      '20231126_091223.jpg',
      '20231126_091228.jpg',
      '20231126_091230.jpg',
      '20231126_091245.jpg',
      '20231126_091430.jpg',
      '20231126_091434.jpg',
      '20231126_091525.jpg',
      '20231126_091530.jpg',
      '20231126_091536.jpg',
      '20231126_091541.jpg',
      '20231126_091548.jpg',
      '20231126_091555.jpg',
      '20231126_091601.jpg',
      '20231126_091604.jpg',
      '20231126_091618.jpg',
      '20231126_091630.jpg',
      '20231126_091636.jpg',
      '20231126_091648.jpg',
      '20231126_091658.jpg',
      '20231126_091705.jpg',
      '20231126_091709.jpg',
      '20231126_091713.jpg',
      '20231126_091722.jpg',
      '20231126_091728.jpg',
      '20231126_091731.jpg',
      '20231126_091737.jpg',
      '20231126_091740.jpg',
      '20231126_091750.jpg',
      '20231126_091754.jpg',
      '20231126_091759.jpg',
      '20231126_091808.jpg',
      '20231126_091813.jpg',
      '20231126_091822.jpg',
      '20231126_091830.jpg',
      '20231126_091842.jpg',
      '20231126_091855.jpg',
      '20231126_091901.jpg',
      '20231126_091903.jpg',
      '20231126_091918.jpg',
      '20231126_091922.jpg',
      '20231126_091930.jpg',
      '20231126_092123.jpg',
      '20231126_092134.jpg',
      '20231126_092242.jpg',
      '20231126_093003.jpg',
      '20231126_093007.jpg',
      '20231126_093239.jpg',
      '20231126_093256.jpg',
      '20231126_093309.jpg',
      '20231126_093559.jpg',
      '20231126_093606.jpg',
      '20231126_093611.jpg',
      '20231126_093618.jpg',
      '20231126_093622.jpg',
      '20231126_093632.jpg',
      '20231126_093637.jpg',
      '20231126_093644.jpg',
      '20231126_093718.jpg',
      '20231126_093813.jpg',
      '20231126_093821.jpg',
      '20231126_093826.jpg',
      '20231126_093832.jpg',
      '20231126_093838.jpg',
      '20231126_093847.jpg',
      '20231126_093901.jpg',
      '20231126_093911.jpg',
      '20231126_094007.jpg',
    ];

    images.forEach((imageSrc) => {
      const img = document.createElement('img');
      img.src = `./assets/${imageSrc}`;
      img.alt = '';
      img.classList.add('gallery-img');

      gallery.appendChild(img);
    });
  }

  // Call the createGallery function when the page is loaded
  window.onload = createGallery();

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
