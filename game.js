document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit-guess');
    const guessInput = document.getElementById('guess');
    const result = document.getElementById('result');
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100

    submitButton.addEventListener('click', () => {
        const userGuess = parseInt(guessInput.value, 10);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            result.textContent = 'Please enter a number between 1 and 100.';
            return;
        }

        if (userGuess === randomNumber) {
            result.textContent = 'Congratulations! You guessed the right number!';
        } else if (userGuess < randomNumber) {
            result.textContent = 'Too low! Try again.';
        } else {
            result.textContent = 'Too high! Try again.';
        }
    });
});
