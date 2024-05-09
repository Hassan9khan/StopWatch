var seconds = document.querySelector("#seconds");
var minutes = document.querySelector("#minutes");
var hours = document.querySelector("#hours");
const sec = 1;
const min = 1;
const hour = 1;
var countSeconds;
function stopwatch() {
    clearInterval(countSeconds);
    countSeconds = setInterval(function () {
        seconds.innerHTML = sec;
        sec++;
        if (sec === 61) {
            minutes.innerHTML = min++;
            sec = 0;
            seconds.innerHTML = sec;
            sec++;
            if (min == 61) {
                min = 0;
                hours.innerHTML = hour++;
                minutes.innerHTML = min;
                min++;
            }
        }
    }, 1000)
}
function reset() {
    sec = 0;
    min = 0;
    hour = 0;
    seconds.innerHTML = sec ;
    hours.innerHTML = min ;
    minutes.innerHTML = hour ;
}
function stop(){
    clearInterval(countSeconds);
}
// let timer;
// let isRunning = false;
// let seconds = 0;

// const display = document.querySelector('.display');
// const startBtn = document.querySelector('.start');
// const stopBtn = document.querySelector('.stop');
// const resetBtn = document.querySelector('.reset');

// function displayTime() {
//   const hours = Math.floor(seconds / 3600);
//   const minutes = Math.floor((seconds % 3600) / 60);
//   const secs = seconds % 60;
//   const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//   display.textContent = formattedTime;
// }

// function startTimer() {
//   if (!isRunning) {
//     isRunning = true;
//     timer = setInterval(() => {
//       seconds++;
//       displayTime();
//     }, 1000);
//   }
// }

// function stopTimer() {
//   clearInterval(timer);
//   isRunning = false;
// }

// function resetTimer() {
//   clearInterval(timer);
//   isRunning = false;
//   seconds = 0;
//   displayTime();
// }

// startBtn.addEventListener('click', startTimer);
// stopBtn.addEventListener('click', stopTimer);
// resetBtn.addEventListener('click', resetTimer);
