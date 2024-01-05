document.addEventListener('DOMContentLoaded', function () {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");
  
    sign_up_btn.addEventListener('click', () => {
      container.classList.add("sign-up-mode");
    });
  
    sign_in_btn.addEventListener('click', () => {
      container.classList.remove("sign-up-mode");
      removeErrorMessage(); // Remove error message when switching to sign-in mode
    });
  
    const signInForm = document.querySelector('.sign-in-form');
  
    signInForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent the default form submission behavior
  
      // Get the entered username and password
      const username = signInForm.querySelector('input[type="text"]').value;
      const password = signInForm.querySelector('input[type="password"]').value;
  
      // Check if the username and password are correct
      if (username === 'kilun900900@gmail.com' && password === 'Kailun1234567890') {
        // Redirect to /team/index.html for successful login
        window.location.href = 'index.html';
      } else {
        // Display an error message for incorrect username or password
        displayErrorMessage(signInForm, 'Incorrect username or password');
      }
    });
  
    // Function to display an error message
    function displayErrorMessage(form, message) {
      const errorMessage = document.createElement('p');
      errorMessage.classList.add('error-message');
      errorMessage.textContent = message;
  
      // Check if the error message already exists and remove it
      removeErrorMessage();
  
      // Append the error message to the form
      form.appendChild(errorMessage);
    }
  
    // Function to remove an existing error message
    function removeErrorMessage() {
      const existingErrorMessage = document.querySelector('.error-message');
      if (existingErrorMessage) {
        existingErrorMessage.remove();
      }
    }
  });
  