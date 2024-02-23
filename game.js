var buttonColors = ["red", "green", "blue", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

function nextSequence(arr) {
  var randomChosenColor = arr[Math.floor(Math.random() * arr.length)];
  gamePattern.push(randomChosenColor);
  var colorID = $("#" + randomChosenColor);
  console.log("The id is", colorID);
  colorID.fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColor);

  return randomChosenColor;
}

$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
  console.log(userChosenColor);
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
  animatePress(userChosenColor);
});

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);

  console.log("Current color is :", currentColor);
}
