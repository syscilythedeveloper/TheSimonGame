var buttonColors = ["red", "green", "blue", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

//start Game

$(document).keypress(function () {
  if (!started) {
    nextSequence(buttonColors);
    $("h1").text("Level " + level);
    started = true;
  }
});

function nextSequence(arr) {
  var randomChosenColor = arr[Math.floor(Math.random() * arr.length)];
  gamePattern.push(randomChosenColor);
  var colorID = $("#" + randomChosenColor);
  colorID.fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColor);
  level++;
  $("h1").text("Level " + level);

  return randomChosenColor;
}

$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
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
}
