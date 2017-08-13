function startTimer(duration) {
  var timer = duration, minutes, seconds;
  var time = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    $('#time').text(minutes + ":" + seconds);

    if (--timer < 0) {
      clearInterval(time);
      loseGame();
    }
  }, 1000);
}

function loseGame() {
  $(".overlay").css("width", "100%");
  $('#losepopup').toggle();
  $(this).addClass('open');
  $('#time').empty();
}
