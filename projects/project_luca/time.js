let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeElapsed;
let time = null;

function startTimer() {
    if (time !== null) {
        clearInterval(time);
    }
    time = setInterval(updateTimer, 10);
}

function stopTimer() {
    clearInterval(time);
}

function resetTimer() {
    clearInterval(time);
    /* also stops the timer */
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
}

function updateTimer() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = (milliseconds < 10) ? "00" + milliseconds : (milliseconds < 100) ? "0" + milliseconds : milliseconds;

    timeElapsed = ` ${h} : ${m} : ${s} : ${ms}`;
}