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
        <h1>Minuteur</h1>
            <div id="timer"></div>
            <div id="divNumber">
                <input type="number" id="number" placeholder="Minutes">
            </div>
            <div>
                <button id="up" class="btn">+</button>
                <button id="down" class="btn">-</button>
                <button id="start" class="btn">Start</button>
                <button id="reset" class="btn">Reset</button>
                <button id="pause" class="btn">Pause</button>
            </div>

            <div class="link">
                <a href="http://localhost/oclock/index.php"><i class="fa-solid fa-house fa-beat" style="color: #ffffff;"></i></a>
            </div>
        </div>
    </main>
</body>
<script src="script.js"></script>

</html>