$(document).ready(function() {

function updateFiveLitreBeaker() {
  var percentageFilled = fiveLitreBeaker.currentCapacity * 20;
  $('.fivelitrewater').animate({height: percentageFilled + '%'}, 1000)
}

function updateThreeLitreBeaker() {
  var percentageFilled = threeLitreBeaker.currentCapacity * 33.33;
  $('.threelitrewater').animate({height: percentageFilled + '%'}, 1000)
}

  var puzzle = new Puzzle();
  var fiveLitreBeaker = puzzle.fiveLitreBeaker;
  var threeLitreBeaker = puzzle.threeLitreBeaker;
  updateThreeLitreBeakerCapacity();
  updateFiveLitreBeakerCapacity();

  function updateThreeLitreBeakerCapacity() {
    $('#threelitrebeaker').text(`${threeLitreBeaker.currentCapacity}/3`);
  }

  function updateFiveLitreBeakerCapacity() {
    $('#fivelitrebeaker').text(`${fiveLitreBeaker.currentCapacity}/5`);
  }

  function checkGame() {
    if(puzzle.gameOver()) {
      endgame();
    }
  }

  function endgame() {
    $('#game').text("GAME OVER LOSER");
  }

  $('#fillfive').click(function() {
    puzzle.fillup(fiveLitreBeaker);
    updateFiveLitreBeakerCapacity();
    updateFiveLitreBeaker();
    checkGame();
    return false;
  });

  $('#fillthree').click(function() {
    puzzle.fillup(threeLitreBeaker);
    updateThreeLitreBeakerCapacity();
    updateThreeLitreBeaker();
    checkGame();
    return false;
  });

  $('#emptyfive').click(function() {
    puzzle.empty(fiveLitreBeaker);
    updateFiveLitreBeaker();
    updateFiveLitreBeakerCapacity();
    checkGame();
    return false;
  });

  $('#emptythree').click(function() {
    puzzle.empty(threeLitreBeaker);
    updateThreeLitreBeakerCapacity();
    updateThreeLitreBeaker();
    checkGame();
    return false;
  });

  $('#pourfromfive').click(function() {
    puzzle.pour(fiveLitreBeaker, threeLitreBeaker);
    updateThreeLitreBeakerCapacity();
    updateFiveLitreBeakerCapacity();
    updateFiveLitreBeaker();
    updateThreeLitreBeaker();
    checkGame();
    return false;
  });

  $('#pourfromthree').click(function() {
    puzzle.pour(threeLitreBeaker, fiveLitreBeaker);
    updateThreeLitreBeakerCapacity();
    updateFiveLitreBeakerCapacity();
    updateFiveLitreBeaker();
    updateThreeLitreBeaker();
    checkGame();
    return false;
  });

  function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

jQuery(function ($) {
    var fiveMinutes = 60 * 5,
        display = $('#time');
    startTimer(fiveMinutes, display);
});


});
