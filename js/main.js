// Function to validate a contact form
function validateContactForm() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const errorElement = document.getElementById("error-message");

  // Reset the error message
  errorElement.textContent = "";

  // Check if the name, email, and message fields are empty
  if (
    nameInput.value === "" ||
    emailInput.value === "" ||
    messageInput.value === ""
  ) {
    errorElement.textContent = "Please fill in all fields.";
    return false; // Prevent form submission
  }

  // Check if the email address is valid (basic check)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    errorElement.textContent = "Please enter a valid email address.";
    return false; // Prevent form submission
  }

  // Form is valid, allow submission
  return true;
}

// Event listener for the contact form submission
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    if (!validateContactForm()) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });
}

// Example of dynamic content loading
const loadMoreButton = document.getElementById("load-more-button");
const coursesContainer = document.getElementById("courses-container");
let currentPage = 1;

if (loadMoreButton && coursesContainer) {
  loadMoreButton.addEventListener("click", function () {
    // Simulate loading more courses (replace with actual data fetching)
    const newCourse = `
            <div class="course">
                <h2>New Course Title</h2>
                <p>Description of the new course.</p>
            </div>
        `;

    // Append the new course to the container
    coursesContainer.insertAdjacentHTML("beforeend", newCourse);

    // Update the current page
    currentPage++;

    // Hide the "Load More" button after a certain number of pages
    if (currentPage >= 3) {
      loadMoreButton.style.display = "none";
    }
  });
}
