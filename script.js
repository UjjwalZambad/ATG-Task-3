function submitForm() {
    var inputField = document.querySelector('.input-field');
    console.log(inputField.value);

    // Change input state to loading
    inputField.disabled = true;
    inputField.placeholder = 'Loading...';
    inputField.value = '';

    // Simulate a delay of 2 seconds
    setTimeout(function() {
      // Restore input state after 2 seconds
      inputField.disabled = false;
      inputField.placeholder = 'Type here...';

    }, 2000);
  }
