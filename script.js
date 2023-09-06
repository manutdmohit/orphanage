const currentYear = new Date().getFullYear();
document.getElementById(
  'footer-year'
).textContent = `© ${currentYear} VWF. All rights reserved.`;

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

// const tableContainer = document.querySelector('.table-container');
// const tableHeader = document.querySelector('thead');

// tableContainer.addEventListener('scroll', function () {
//   if (tableContainer.scrollTop > 0) {
//     tableHeader.style.transform = `translateY(${tableContainer.scrollTop}px)`;
//   } else {
//     tableHeader.style.transform = 'translateY(0)';
//   }
// });

// // Get the table container element
// const tableContainer = document.querySelector('.sticky-table-container');

// // Get the table element
// const table = document.querySelector('.sticky-table');

// // Add a scroll event listener to the table container
// tableContainer.addEventListener('scroll', function () {
//   // Calculate the scroll position
//   const scrollTop = tableContainer.scrollTop;

//   // Check if the scroll position is greater than the offset of the table header
//   if (scrollTop >= table.offsetTop) {
//     // Add the "sticky" class to the table to apply extra padding to td elements
//     table.classList.add('sticky');
//   } else {
//     // Remove the "sticky" class when not scrolled
//     table.classList.remove('sticky');
//   }
// });

// Get the table element by its id
// const table = document.getElementById('myTable');

// // Add an event listener for scroll events
// window.addEventListener('scroll', () => {
//   const rect = table.getBoundingClientRect();
//   if (rect.top < 0) {
//     table.querySelector('thead').style.transform = `translateY(${Math.min(
//       0,
//       rect.top
//     )}px)`;
//   } else {
//     table.querySelector('thead').style.transform = '';
//   }
// });s
