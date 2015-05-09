var songs = [
    new Audio('http://songily.com/sc/file/191643996.mp3'),
];

var speeds = [
    1000,
];

var tick = 0; 

var tickInterval;

function startTimer(speed) {
    tickInterval = setInterval(function(){
        tick++;
        $("#One").text(tick);
    }, speed);
}

function pauseTimer() {
    clearInterval(tickInterval);
}
function restartTimer(){
    tick= 0; 
}
$(function(){
    $('#start').click(function(){
        songs[0].play();
        startTimer(speeds[0]);
    });
    $('#pause').click(function(){
        songs[0].pause();
        pauseTimer();
    });
    $('#restart').click(function(){
        songs[0].currentTime = 0; 
        restartTimer();
    });
    
});


var currentSong = songs[0];

function advanceClock() {
    setTimeout(advanceClock(), getNextSpeed());
}

function getNextSpeed() {
    if (currentSong.currentTime < 20)  {
        return 1000;
    }
    if (currentSong.currentTime < 20)  {
        
    }
}