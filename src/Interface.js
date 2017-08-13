$(document).ready(function() {

  var puzzle = new Puzzle();
  var fiveLitreBeaker = puzzle.fiveLitreBeaker;
  var threeLitreBeaker = puzzle.threeLitreBeaker;

  $('#fivelitrebeaker').text(fiveLitreBeaker.currentCapacity);
  $('#threelitrebeaker').text(threeLitreBeaker.currentCapacity);

  $('#fillfive').click(function() {
    puzzle.fillup(fiveLitreBeaker);
    $('#fivelitrebeaker').text(fiveLitreBeaker.currentCapacity);
    return false;
  });

  $('#fillthree').click(function() {
    puzzle.fillup(threeLitreBeaker);
    $('#threelitrebeaker').text(threeLitreBeaker.currentCapacity);
    return false;
  });

  $('#emptyfive').click(function() {
    puzzle.empty(fiveLitreBeaker);
    $('#fivelitrebeaker').text(fiveLitreBeaker.currentCapacity);
    return false;
  });

  $('#emptythree').click(function() {
    puzzle.empty(threeLitreBeaker);
    $('#threelitrebeaker').text(threeLitreBeaker.currentCapacity);
    return false;
  });


});
