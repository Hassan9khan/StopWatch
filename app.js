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
}git status