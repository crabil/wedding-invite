// Initialize Swiper.js for swipe functionality
const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal', // Swiping horizontally
  loop: false, // No looping
  pagination: {
    el: '.swiper-pagination', // Enable pagination dots
    clickable: true,
  },
  slidesPerView: 1, // One card visible at a time
  spaceBetween: 20, // Spacing between cards
});

// Handle language selection (no popups)
function selectLanguage(language) {
  console.log(`Language selected: ${language}`);
  // Store language in localStorage or use it to customize content dynamically
}

// Swipe hint functionality
let inactivityTimeout;

function showSwipeHint() {
  const swipeHint = document.getElementById("swipe-hint");
  swipeHint.classList.add("visible");

  // Hide the hint after 3 seconds
  setTimeout(() => {
    swipeHint.classList.remove("visible");
  }, 3000);
}

// Reset inactivity timer on any activity
function resetInactivityTimer() {
  clearTimeout(inactivityTimeout);
  inactivityTimeout = setTimeout(showSwipeHint, 5000); // Show hint after 5 seconds of inactivity
}

// Attach event listeners for activity detection
document.addEventListener("mousemove", resetInactivityTimer);
document.addEventListener("touchstart", resetInactivityTimer);
document.addEventListener("keydown", resetInactivityTimer);

// Initialize the timer on page load
resetInactivityTimer();
