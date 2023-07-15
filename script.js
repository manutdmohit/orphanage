const currentYear = new Date().getFullYear();
document.getElementById(
  'footer-year'
).textContent = `© ${currentYear} VWF. All rights reserved.`;

document.addEventListener('DOMContentLoaded', function () {
  var carousel = new Flickity('.carousel', {
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true,
    autoPlay: 4000, // Initial autoplay duration
    pauseAutoPlayOnHover: false,
    draggable: false, // Disable dragging
  });

  function playCarousel() {
    carousel.next();
  }

  var autoplayInterval = setInterval(playCarousel, 4000); // Interval between slide transitions

  carousel.on('dragStart', function () {
    clearInterval(autoplayInterval); // Clear the autoplay interval when dragging starts
  });

  carousel.on('dragEnd', function () {
    autoplayInterval = setInterval(playCarousel, 4000); // Reset the autoplay interval when dragging ends
  });
});
