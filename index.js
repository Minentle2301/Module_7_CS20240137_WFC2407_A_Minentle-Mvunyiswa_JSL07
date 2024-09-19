// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', function () { 

  // Get references to the form, modal, certificate content, and close button elements
  const cardForm = document.getElementById('cardForm');
  const modal = document.getElementById('modal');
  const certificateContent = document.getElementById('certificateContent');
  const closeModal = document.querySelector('.close');

  // Hide the modal initially by setting its display style to 'none'
  modal.style.display = 'none';

  // Add an event listener to the form's submit event
  cardForm.addEventListener('submit', function (e) {

      // Prevent the default form submission behavior
      e.preventDefault();

      // Get input elements for student name, personal message, and course name
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById('personalMessage');
      const courseNameInput = document.getElementById('courseName');

      // Retrieve values from the input elements
      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no course input

      // Check if the required fields (student name and personal message) are filled
      if (studentName.trim() === '' || personalMessage.trim() === '') {
          // Show an alert if fields are empty and stop the function execution
          alert('Please fill in all fields');
          return;
      }

      // Dynamically generate the HTML content for the certificate
      const certificateHTML = `
      <h1>Certificate of Completion</h1>
      <p>This is to certify that</p>
      <h3>${studentName}</h3>
      <p>has almost completed the</p>
      <h3>${courseName}!</3>
      <p>with legendary perseverance and cat-like curiosity for never giving up🏆</p>
      <img src="logo.png" alt="Logo" class="logo">
      <p>${personalMessage}</p>
      `;

      // Set the certificate content inside the modal
      certificateContent.innerHTML = certificateHTML;

      // Display the modal by changing its display style to 'block'
      modal.style.display = 'block';

      // Clear the input fields after submission
      studentNameInput.value = '';
      personalMessageInput.value = '';
      if (courseNameInput) courseNameInput.value = '';
  });

  // Add an event listener to the close button to hide the modal when clicked
  closeModal.addEventListener('click', function () {
      modal.style.display = 'none';
  });

});

   
