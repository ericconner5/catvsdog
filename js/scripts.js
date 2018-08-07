$(document).ready(function() {
  var meow = document.createElement("audio");
    meow.src = "sound/meow.wav";
    meow.volume = 1.0
    meow.autoplay = false;
    meow.preLoad = true;

    $(".btn-primary").click(function() {
      meow.play();
    });
});
