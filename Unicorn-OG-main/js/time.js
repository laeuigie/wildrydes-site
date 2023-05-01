function timer(duration, show){
    var time = duration, seconds;
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
    var twentysecs = 60/3,
        display = document.querySelector('#time');
        startTimer(twentysecs, display);
};