const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  const btn = document.getElementById("submitBtn");
  const btnText = btn.querySelector(".btn-text");
  const btnLoader = btn.querySelector(".btn-loader");

  // Clear errors
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  let isValid = true;

  if (name.value.trim() === "") {
    nameError.textContent = "Please enter your name.";
    isValid = false;
  }

  if (email.value.trim() === "") {
    emailError.textContent = "Please enter your email.";
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email.value.trim())) {
    emailError.textContent = "Please enter a valid email.";
    isValid = false;
  }

  if (message.value.trim() === "") {
    messageError.textContent = "Please enter your message.";
    isValid = false;
  }

  if (isValid) {
    // Show loading state
    btn.classList.add("submitting");
    btnText.textContent = "Sending...";
    btnLoader.style.display = "inline-block";

    setTimeout(() => {
      alert("Message sent successfully!");

      document.getElementById("contactForm").reset();

      // Reset button
      btn.classList.remove("submitting");
      btnText.textContent = "Send Message";
      btnLoader.style.display = "none";
    }, 1000);
  }
});
