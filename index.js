document.addEventListener('DOMContentLoaded', function () {
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const certificateContent = document.getElementById('certificateContent');
    const closeModal = document.querySelector('.close');
  
    // Hide the modal initially
    modal.style.display = 'none';
  
    cardForm.addEventListener('submit', function (e) {
      e.preventDefault();

  
      // 🚨 Get input values
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById('personalMessage') ;
      const courseNameInput = document.getElementById('courseName') ; 
  
      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input
  
      if (studentName.trim() === '' || personalMessage.trim() === '') {
        alert('Please fill in all fields');
        return;
      }
  
      // 🚨 Generate certificate content dynamically

      const certificateHTML = `
      <h1>Certificate of Completion</h1>
      <h3>${studentName}</h3>
      <p>Congratulations on completing ${courseName}!</p>
       <p> ${personalMessage}</p>
      <p> course: ${courseName}!</p>
      <img src="logo.png" alt="Logo" class="logo">
      `;

    // Set the certificate content in the modal
    certificateContent.innerHTML = certificateHTML;

    
      //  Display the modal
      modal.style.display = 'block';
  
      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      if(courseNameInput) courseNameInput.value = '';
    });
  
    //  🚨 Close the modal when the close button is clicked
    closeModal.addEventListener('click', function () {
      modal.style.display = 'none';
    });

  });
   
