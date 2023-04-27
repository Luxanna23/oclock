let time = document.getElementById("time");

function startTime() {
  let currentTime = new Date();
  let hours = checkTime(currentTime.getHours());
  let minutes = checkTime(currentTime.getMinutes());
  let seconds = checkTime(currentTime.getSeconds());

  time.innerHTML = hours + ":" + minutes + ":" + seconds;
  let refresh = setTimeout(startTime, 1000);
}

function checkTime(i) {
  // ajouter un zéro si le nombre est < 10
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

startTime();
 
start.addEventListener("click", function () {
  if (selectTimer.value != "") {
    temps = selectTimer.value * 60 - 1;
  }
  clearInterval(interval);
  interval = setInterval(minuteur, 1000);
});

pause.addEventListener("click", function () {
  clearInterval(interval);
});

reset.addEventListener("click", function () {
  clearInterval(interval);
  temps = 0;
  departMinutes = 0;
  timerElement.innerText = "0" + departMinutes + ":00";
});