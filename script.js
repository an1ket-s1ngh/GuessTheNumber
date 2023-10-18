'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('secretNumber', secretNumber);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) document.querySelector(`.message`).textContent = '⛔ No Number!';
  else if (guess < 0 || guess > 20) {
    document.querySelector(`.message`).textContent = '😒 The Top Right Corner!';
    document.querySelector('.score').textContent--;
  } else {
    if (guess === secretNumber) {
      document.querySelector(`.message`).textContent =
        '🎉 Correct Number! Press `Again!` to Reset!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '35rem';
      if (
        document.querySelector('.highscore').textContent <
        document.querySelector('.score').textContent
      )
        document.querySelector('.highscore').textContent =
          document.querySelector('.score').textContent;
    } else {
      if (document.querySelector('.score').textContent < 2) {
        document.querySelector(`.message`).textContent =
          '☠️ Game Over! ☠️ Press `Again!` to Reset!';
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = '#8B0000';
      } else {
        document.querySelector(`.message`).textContent =
          guess > secretNumber
            ? '⬆️Too High! Try Lower!'
            : '⬇️Too Low! Try Higher!';
      }
      document.querySelector('.score').textContent--;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector(`.message`).textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log('secretNumber', secretNumber);
});
