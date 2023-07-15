const currentYear = new Date().getFullYear();
document.getElementById(
  'footer-year'
).textContent = `© ${currentYear} VWF. All rights reserved.`;

document.addEventListener('DOMContentLoaded', function () {
  var carousel = new Flickity('.carousel', {
    // Flickity options here
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true,
  });
});
