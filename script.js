// contact functionality
function openContactPopup() {
    document.getElementById('contactPopup').style.display = 'block';
  }
  
  function closeContactPopup() {
    document.getElementById('contactPopup').style.display = 'none';
  }

  // form validaiton
  function submitForm() {
    if (validateForm()) {
      var formData = new FormData(document.getElementById('myForm'));

      // AJAX submission
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://formspree.io/f/xgegojbn', true);
      xhr.setRequestHeader('Accept', 'application/json');

      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            // Form submitted successfully
            document.getElementById('successMessage').style.display = 'block';
          } else {
            // Handle errors if any
            alert('Error submitting the form. Please try again later.');
          }
        }
      };

      xhr.send(formData);
    }
  }

  function validateForm() {
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Check if fullName is not empty
    if (fullName.trim() === '') {
      alert('Please enter your full name.');
      return false; // Prevent form submission
    }

    // Check if email is valid
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return false; // Prevent form submission
    }

    // Check if message is not empty
    if (message.trim() === '') {
      alert('Please enter your message.');
      return false; // Prevent form submission
    }

    // Additional validation logic can be added here

    return true; // Allow form submission
  }

  function isValidEmail(email) {
    // Basic email validation regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // filter functionality
  document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.portfolio--filter button');
    const portfolioCards = document.querySelectorAll('.portfolio--card');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', function () {
        // Remove 'active' class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
  
        // Add 'active' class to the clicked button
        this.classList.add('active');
  
        const category = this.textContent.toLowerCase().replace(' ', '-');
        
        // Show/hide portfolio cards based on the selected category
        portfolioCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');
  
          if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  });

  // intro video functionality
  function openVideoPopup() {
    document.getElementById('videoPopup').style.display = 'block';
}

function closeVideoPopup() {
    var introVideo = document.getElementById('introVideo');
    introVideo.pause();
    introVideo.currentTime = 0;
    document.getElementById('videoPopup').style.display = 'none';
}