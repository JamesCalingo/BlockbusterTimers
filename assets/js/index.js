let ticking = new Audio("assets/audio/Clock-Ticking-C-www.fesliyanstudios.com.mp3");
let buzzer = new Audio("assets/audio/Alarm-Fast-High-Pitch-A1-www.fesliyanstudios.com.mp3")
let isTimerOn = false;
let intervalID

timeUp = () => {
  clearInterval(intervalID);
  ticking.pause();
  buzzer.play();
  if (buzzer.currentTime >= 1) {
    buzzer.pause()
  }
  isTimerOn = false;
}

$("#round1").on("click", function (e) {
  e.preventDefault();
  clearInterval(intervalID);
  ticking.currentTime = 0;
  ticking.play();
  ticking.playbackRate = 5
  ticking.loop = true
  isTimerOn = true;
  intervalID = setInterval(timeUp, 15000)
})

$("#round2").on("click", function (e) {
  e.preventDefault();
  clearInterval(intervalID);
  ticking.currentTime = 0;
  ticking.play();
  isTimerOn = true;
  intervalID = setInterval(timeUp, 30000)
})