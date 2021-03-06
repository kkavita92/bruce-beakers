$(document).ready(function() {

  var puzzle = new Puzzle();
  var fiveLitreBeaker = puzzle.fiveLitreBeaker;
  var threeLitreBeaker = puzzle.threeLitreBeaker;
  updateThreeLitreBeakerCapacity();
  updateFiveLitreBeakerCapacity();
  startTimer(300);

  $('#more-info').on('click', function() {
    createOverlay();
    $('#infopopup').toggle();
    $(this).addClass('open');
  });

  $('#close').on('click', function() {
    removeOverlay();
    $('#infopopup').toggle();
    $(this).removeClass('open');
  });

  $('.restart').on('click', function() {
    location.reload(true);
  });

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

  function createOverlay() {
    $(".overlay").css("width", "100%");
  }

  function removeOverlay() {
    $(".overlay").css("width", "0%");
  }

  function updateFiveLitreBeaker() {
    var percentageFilled = fiveLitreBeaker.currentCapacity * 20;
    $('.fivelitrewater').animate({height: percentageFilled + '%'}, 1000)
  }

  function updateThreeLitreBeaker() {
    var percentageFilled = threeLitreBeaker.currentCapacity * 33.33;
    $('.threelitrewater').animate({height: percentageFilled + '%'}, 1000)
  }

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
    createOverlay();
    $("#timer").empty();
    $('#winpopup').toggle();
    $(this).addClass('open');
  }

});
