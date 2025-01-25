// Function to select language and redirect
function selectLanguage(language) {
  alert(`Language selected: ${language}`);
  // Here, you could redirect to another page if needed
}

// Swipe hint functionality
let inactivityTimeout;

// Function to show the swipe hint
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
  inactivityTimeout = setTimeout(showSwipeHint, 5000); // 5 seconds of inactivity
}

// Attach event listeners for activity detection
document.addEventListener("mousemove", resetInactivityTimer);
document.addEventListener("touchstart", resetInactivityTimer);
document.addEventListener("keydown", resetInactivityTimer);

// Initialize the timer on page load
resetInactivityTimer();
