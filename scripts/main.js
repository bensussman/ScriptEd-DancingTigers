
// Constants
var keyCodeA = 97;
var keyCodeS = 115;
var keyCodeD = 100;
var keyCodeF = 102;



/*tiger*/
var $tiger = $('.tiger');

function prowlLeft () {
    $tiger.addClass('prowl').css({marginLeft: '-=15px'});
}

function prowlRight () {
    $tiger.addClass('prowlRight').css({marginLeft: '+=15px'});
}

function hit () {
    $tiger.addClass('')
    
}

function miss () {
    $tiger.addClass('miss');
}


$(document).ready(function(){
    $(document).keypress(keyPressedHandler);
});


function keyPressedHandler(e) {
    if (e.keyCode === keyCodeA) {
        if (true) { //TODO:gamestate
            SuccessfulTap();
        } else {
            FailedTap();
        }
    }
    else if (e.keyCode === keyCodeS) {
        if (false) { //TODO:gamestate
            SuccessfulTap();
        } else {
            FailedTap();
        }
    }
    else if (e.keyCode === keyCodeD) {
         if (false) { //TODO:gamestate
            SuccessfulTap();
        } else {
            FailedTap();
        }
        
    }
    else if (e.keyCode === keyCodeF) {
        if (false) { //TODO:gamestate
            SuccessfulTap();
        } else {
            FailedTap();
        } 
    }
}


var successfulHits = 0;
function SuccessfulTap() {
    successfulHits+=1;
    $('.hits').text(successfulHits);
}


var failedHits = 0;
function FailedTap() {
    failedHits += 1;
    $('.misses').text(failedHits);
}

var intervalToken = null;
function startGame() {
    successfulHits = 0;
    failedHits = 0;
    var gameSpeed = 100;
    if (intervalToken) {
        clearInterval(intervalToken);
    }
    intervalToken = setInterval(move,gameSpeed);
}

function move(){
    
    // Shift all existing notes DOWN 1
    // Erase nodes that are now off the grid
    $('.ActivatedNote').each(function() {
        $(this).removeClass('ActivatedNote');
        var currentRow = $(this).attr("data-row");
        if(currentRow !== "6"){
            $(this).addClass()
        }
    });
    
    // Create a new note in a random place
    if (Math.floor(Math.random() * 10) < 3) {
        //this will happen 30% of the time
        var col = Math.floor(Math.random() * 4) + 1;
        $(".box.col" + col + "[data-row='1']").addClass("ActivatedNote");
        
    }
    
    
    
}
