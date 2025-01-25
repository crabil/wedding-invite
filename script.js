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

// Language translations
const translations = {
  en: {
    welcome: "Welcome to Our Wedding!",
    select: "Please select your preferred language:",
    rsvp: "RSVP",
    namePlaceholder: "Your Name",
    guestsPlaceholder: "Number of Guests",
    submit: "Submit",
    giftTitle: "Gift Contributions",
    giftMessage: "We appreciate your generosity! You can deposit your gifts at:",
  },
  ar: {
    welcome: "مرحبًا بكم في حفل زفافنا!",
    select: "يرجى اختيار اللغة المفضلة لديك:",
    rsvp: "رد الدعوة",
    namePlaceholder: "اسمك",
    guestsPlaceholder: "عدد الضيوف",
    submit: "إرسال",
    giftTitle: "المساهمات المالية",
    giftMessage: "نقدّر كرمكم! يمكنكم إيداع هداياكم في:",
  },
};

// Handle language selection
function selectLanguage(language) {
  // Get all translatable elements
  const welcomeText = document.getElementById("welcome-text");
  const selectText = document.getElementById("select-text");
  const rsvpTitle = document.getElementById("rsvp-title");
  const namePlaceholder = document.getElementById("name-placeholder");
  const guestsPlaceholder = document.getElementById("guests-placeholder");
  const submitBtn = document.getElementById("submit-btn");
  const giftTitle = document.getElementById("gift-title");
  const giftMessage = document.getElementById("gift-message");

  // Apply translations
  welcomeText.textContent = translations[language].welcome;
  selectText.textContent = translations[language].select;
  rsvpTitle.textContent = translations[language].rsvp;
  namePlaceholder.placeholder = translations[language].namePlaceholder;
  guestsPlaceholder.placeholder = translations[language].guestsPlaceholder;
  submitBtn.textContent = translations[language].submit;
  giftTitle.textContent = translations[language].giftTitle;
  giftMessage.textContent = translations[language].giftMessage;

  // Automatically move to the next slide
  swiper.slideNext();
}
