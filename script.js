// Field Training I - Task 1: Profile Page

const themeToggle = document.getElementById("theme-toggle");
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");
const yearElement = document.getElementById("year");

// Toggle the dark class; CSS variables control the colors.
themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  const isDarkMode = document.body.classList.contains("dark");
  themeToggle.textContent = isDarkMode ? "☀️ Light mode" : "🌙 Dark mode";
  themeToggle.setAttribute("aria-pressed", String(isDarkMode));
});

// Show the current year in the footer.
yearElement.textContent = new Date().getFullYear();

// Demonstration only: this form does not send data to a server.
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  formMessage.textContent = `Thanks, ${name}! The form is working.`;
  contactForm.reset();
});
