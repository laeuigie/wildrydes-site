function timerStart(duration, display){
    var timer = duration, seconds;
    setInterval(function() {
        seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds;

        if(--timer < 0){
            timer = duration;
        }
    }, 1000);

}

window.onload = function() {
    var fivesecs = 60 / 12,
        display = document.querySelector('time');
        startTimer(fivesecs, display);
};