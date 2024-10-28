    // JavaScript code for form validation

	// Prevent form from submitting
  document.getElementById('myForm').addEventListener('submit', function(event) {

      // Retrieve the input field value
      const inputField = document.getElementById('inputField');
      const inputValue = inputField.value;

      // Regular expression pattern for alphanumeric input
      const alphanumericPattern = /^[a-zA-Z0-9]+$/; 

      // Check if the input value matches the pattern
      if (alphanumericPattern.test(inputValue)) {

        // Valid input: display confirmation and submit the form
        alert('Form submitted successfully!');
  } else {
        // Invalid input: display error message
        alert('Error: Input must be alphanumeric (letters and numbers only).');
    event.preventDefault(); // Prevent form from submitting
  }
});