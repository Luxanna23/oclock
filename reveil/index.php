<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="https://kit.fontawesome.com/e1a1b68f9b.js" crossorigin="anonymous"></script>
</head>

<body>
    <main>
        

        <div class="container">
        <h1>Réveil</h1> 
            <div class="clock">
                <ul id="alarmList"></ul>

                <label for="alarmMessage">Nom :</label>
                <input type="text" id="alarmMessage">

                <label for="alarmTime">Alarme :</label>
                <input type="time" id="alarmTime">

                <button class="button" onclick="setAlarm()">Ajouter une alarme</button>
            </div>

            <div class="link">
                <a href="http://localhost/oclock/index.php"><i class="fa-solid fa-house fa-beat" style="color: #ffffff;"></i></a>
            </div>
        </div>
    </main>
</body>
<script src="script.js"></script>

</html>