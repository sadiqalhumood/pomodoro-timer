let countdown;

const timerDisplay = document.getElementById('timer');

const startButton = document.getElementById('startButton');

const resetButton = document.getElementById('resetButton');

let timeLeft = 25 * 60;

function countdown() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

}
