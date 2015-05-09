
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
    buttonName = null;
    
    if (e.keyCode === keyCodeA) {
        buttonName = "#buttonA";
    }
    else if (e.keyCode === keyCodeS) {
        buttonName = "#buttonS";
    }
    else if (e.keyCode === keyCodeD) {
        buttonName = "#buttonD";
        
    }
    else if (e.keyCode === keyCodeF) {
        buttonName = "#buttonF";
    }
    
    if ($(buttonName).hasClass("ActivatedNote")) { //TODO:gamestate
        SuccessfulTap();
        $(buttonName).addClass("HitNote");
        $(buttonName).removeClass("ActivateNote");
    } else {
        FailedTap();
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



function performMove(){
    // Shift all existing notes DOWN 1
    // Erase nodes that are now off the grid
    $('.ActivatedNote').each(function() {
        $(this).removeClass('ActivatedNote');
        var currentRow = $(this).attr("data-row");
        if(currentRow !== "7"){
            $(this).next().addClass("ActivatedNote");
        }
    });
    
    $(".HitNote").removeClass("HitNote");
    
    // Create a new note in a random place
    if (Math.floor(Math.random() * 10) < 5) {
        //this will happen 30% of the time
        var col = Math.floor(Math.random() * 4) + 1;
        $("#col" + col + " .box[data-row='1']").addClass("ActivatedNote");
        
    }
}
