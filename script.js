var seconds = document.querySelector("#seconds");
var minutes = document.querySelector("#minutes");
var hours = document.querySelector("#hours");
var i = 1;
var j = 1;
var k = 1;
var countSeconds;
function stopwatch() {
    clearInterval(countSeconds);
    countSeconds = setInterval(function () {
        seconds.innerHTML = i;
        i++;
        if (i === 61) {
            minutes.innerHTML = j++;
            i = 0;
            seconds.innerHTML = i;
            i++;
            if (j == 61) {
                j = 0;
                hours.innerHTML = k++;
                minutes.innerHTML = j;
                j++;
            }
        }
    }, 1000)
}
function reset() {
    i = 0;
    j = 0;
    k = 0;
    seconds.innerHTML = i ;
    hours.innerHTML = j ;
    minutes.innerHTML = k ;
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
