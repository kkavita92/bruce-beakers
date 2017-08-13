$(document).ready(function() {

  var puzzle = new Puzzle();
  var fiveLitreBeaker = puzzle.fiveLitreBeaker;
  var threeLitreBeaker = puzzle.threeLitreBeaker;
  updateThreeLitreBeakerCapacity();
  updateFiveLitreBeakerCapacity();

  function updateThreeLitreBeakerCapacity() {
    $('#threelitrebeaker').text(threeLitreBeaker.currentCapacity);
  }

  function updateFiveLitreBeakerCapacity() {
    $('#fivelitrebeaker').text(fiveLitreBeaker.currentCapacity);
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
    checkGame();
    return false;
  });

  $('#fillthree').click(function() {
    puzzle.fillup(threeLitreBeaker);
    updateThreeLitreBeakerCapacity();
    checkGame();
    return false;
  });

  $('#emptyfive').click(function() {
    puzzle.empty(fiveLitreBeaker);
    updateFiveLitreBeakerCapacity();
    checkGame();
    return false;
  });

  $('#emptythree').click(function() {
    puzzle.empty(threeLitreBeaker);
    updateThreeLitreBeakerCapacity();
    checkGame();
    return false;
  });

  $('#pourfromfive').click(function() {
    puzzle.pour(fiveLitreBeaker, threeLitreBeaker);
    updateThreeLitreBeakerCapacity();
    updateFiveLitreBeakerCapacity();
    checkGame();
    return false;
  });

  $('#pourfromthree').click(function() {
    puzzle.pour(threeLitreBeaker, fiveLitreBeaker);
    updateThreeLitreBeakerCapacity();
    updateFiveLitreBeakerCapacity();
    checkGame();
    return false;
  });

});
