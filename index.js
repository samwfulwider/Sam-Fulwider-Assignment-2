const unitsElement = document.querySelector('.units');
const userInputElement = document.querySelector('.userInput');

/**
 * A function that handles a change in unitsElement.
 * @param event The event that gets passed but the event listener to the function.
 */
function unitChangeHandler(event) {
  const conversionUnit = document.querySelector('.conversionUnit');
  if (unitsElement.value === 'Centimeter') {
    conversionUnit.textContent = 'Inch';
  } else {
    conversionUnit.textContent = 'Centimeter';
  }

  userInputHandler();
}

/**
 * Show a message to the user.
 * @param message The message to show.
 */
function showMessage(message) {
  const messageElement = document.querySelector('.message');
  messageElement.textContent = message;
}


/**
 * Updates the value of the converter.
 * @param value The value to set.
 */
function updateValue(value) {
  if (isNaN(value)) {
    console.error('The value is not a number!');
    return;
  }
  const valueElement = document.querySelector('.value');
  valueElement.textContent = value;
}

// Add an event listener for unit change
unitsElement.addEventListener('change', unitChangeHandler);
// Add an event listener for user type
userInputElement.addEventListener('input', userInputHandler);

/**
 * A function that handles the user input.
 * Note: 1 inch = 2.54 Centimeters
 */
function userInputHandler() {
  let value = userInputElement.value;
  // TODO: THIS IS WHERE YOU PUT YOUR CODE, DO NOT TOUCH ANYTHING OUTSIDE THIS FUNCTION!
  console.log(value);
}




