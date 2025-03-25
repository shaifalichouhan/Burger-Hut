const hamburgerIcon = document.getElementById('hamburger-icon');
const navList = document.querySelector('.nav-list');

// Add a click event listener to toggle the 'active' class on the nav list
hamburgerIcon.addEventListener('click', () => {
  navList.classList.toggle('active');
});



  document.addEventListener("DOMContentLoaded", () => {
    const subscriptionForm = document.getElementById("subscription-form");
    const emailInput = document.getElementById("email-input");
    const responseMessage = document.getElementById("response-message");

    // Handle form submission
    subscriptionForm.addEventListener("submit", async (event) => {
      event.preventDefault(); // Prevent page reload

      const email = emailInput.value.trim();

      // Basic email validation
      if (!validateEmail(email)) {
        responseMessage.textContent = "Please enter a valid email address.";
        responseMessage.style.color = "red";
        return;
      }

      // Send email to the server (you need a backend endpoint)
      try {
        const response = await fetch("https://your-backend-url.com/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          responseMessage.textContent = "Thank you for subscribing!";
          responseMessage.style.color = "green";
          emailInput.value = ""; // Clear the input field
        } else {
          responseMessage.textContent = "Something went wrong. Please try again.";
          responseMessage.style.color = "red";
        }
      } catch (error) {
        console.error("Error:", error);
        responseMessage.textContent = "Unable to subscribe. Please check your internet connection.";
        responseMessage.style.color = "red";
      }
    });

    // Email validation function
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });