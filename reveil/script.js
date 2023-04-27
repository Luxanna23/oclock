// Fonction pour ajouter une alarme
function setAlarm() {
  var alarmTimeInput = document.getElementById("alarmTime");
  var alarmMessageInput = document.getElementById("alarmMessage");
  var alarmTime = alarmTimeInput.value;
  var alarmMessage = alarmMessageInput.value;
  var newAlarm = { time: alarmTime, message: alarmMessage };
  alarms.push(newAlarm);
  alarmTimeInput.value = "";
  alarmMessageInput.value = "";
  updateAlarmList();
}

// Fonction pour mettre à jour la liste d'alarmes
function updateAlarmList() {
  var alarmList = document.getElementById("alarmList");
  alarmList.innerHTML = "";
  for (var i = 0; i < alarms.length; i++) {

    var alarmTime = new Date();
    var alarmTimeString = alarms[i].time;
    var alarmHour = parseInt(alarmTimeString.slice(0, 2));
    var alarmMinute = parseInt(alarmTimeString.slice(3));
    alarmTime.setHours(alarmHour, alarmMinute, 0, 0);
    var timeDiff = alarmTime.getTime() - Date.now();
    var timeDiffSeconds = Math.floor(timeDiff / 1000);
    var timeDiffMinutes = Math.floor(timeDiffSeconds / 60);
    var timeDiffHours = Math.floor(timeDiffMinutes / 60);
    var timeDiffDays = Math.floor(timeDiffHours / 24);
    var timeDiffString = "";

    if (timeDiffDays > 0) {
      timeDiffString += timeDiffDays + " jour" + (timeDiffDays > 1 ? "s" : "") + " ";
    }
    if (timeDiffHours % 24 > 0) {
      timeDiffString += (timeDiffHours % 24) + " heure" + (timeDiffHours % 24 > 1 ? "s" : "") + " ";
    }
    if (timeDiffMinutes % 60 > 0) {
      timeDiffString += (timeDiffMinutes % 60) + " minute" + (timeDiffMinutes % 60 > 1 ? "s" : "") + " ";
    }
    if (timeDiffSeconds % 60 > 0) {
      timeDiffString += (timeDiffSeconds % 60) + " seconde" + (timeDiffSeconds % 60 > 1 ? "s" : "") + " ";
    }
    
    var alarmListItem = document.createElement("li");
    alarmListItem.textContent = alarms[i].message + " : " + (timeDiff < 0 ? "passée" : "dans " + timeDiffString);
    alarmList.appendChild(alarmListItem);
    if (timeDiff < 0) {
      alarms.splice(i, 1);
      alert("BIP,BIP,BIP,BIP.... !");
    }
  }
}
  // Fonction pour mettre à jour l'horloge
function updateClock() {
var date = new Date();
var hours = date.getUTCHours() + 1; // Ajouter 1 pour UTC+1
var minutes = date.getUTCMinutes();
var seconds = date.getUTCSeconds();
var timeString = ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
clock.innerHTML = timeString;
}

// Définir les variables globales
var clock = document.getElementById("clock");
var interval = setInterval(updateClock, 1000);



// Définir les variables globales
var alarms = [];
setInterval(updateAlarmList, 1000);
// Appeler la fonction une fois pour afficher l'heure actuelle
updateClock();