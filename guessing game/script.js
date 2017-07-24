let secretNumber = Math.floor(Math.random() * 10) + 1,
    hint = 'Guess the number from 1 to 10',
    counter = 0;
console.log(secretNumber);

function startGame() {
    while (guess !== secretNumber) {
        counter++;
        var guess = prompt(hint);
        if (!guess) break;
        guess = Number(guess);
        if (guess == secretNumber) {
            alert('You win!');
        } else if (guess < secretNumber) {
            hint = 'More';
        } else {
            hint = 'Less';
        };
    };
    alert('The number of attempts: ' + counter + '.');
};