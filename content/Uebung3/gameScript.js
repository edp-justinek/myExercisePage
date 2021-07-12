document.addEventListener("DOMContentLoaded", function(event) {

        let Key_Space = false;//32
        let Key_UP = false;//38
        let Key_DOWN = false; //40
        let canvas;
        let ctx;
        let backgroundImage = new Image();

        let rocket = {
        x: 50,
        y: 200,
        width: 100,
        height: 50,
        src:'img/rocketSide.png'
    }
        let ufos = [];
        let shots = [];

        document.onkeydown = function(e){
        if(e.keyCode ==32){ //Leertaste gedrückt
        Key_Space = true;
    }
        if(e.keyCode ==38){//Taste nach unten drücken
        Key_UP = true;
    }
        if(e.keyCode ==40){//Taste nach unten drücken
        Key_DOWN = true;
    }
    }
        document.onkeyup = function(e){
        if(e.keyCode ==32){//Leertaste losgelassen
        Key_Space = false;
    }
        if(e.keyCode ==38){ //Taste nach unten loslassen
        Key_UP = false;
    }
        if(e.keyCode ==40){ //Taste nach unten loslassen
        Key_DOWN = false;
    }
    }
        function startGame(){
        canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');
        loadImages();
        setInterval(update, 1000 / 25);
        setInterval(creatUfo, 5000);
        setInterval(checkCollion, 1000 /25);
        setInterval(shot, 1000 /10);
        draw();
    }

        function checkCollion(){
        ufos.forEach(function(ufo) {

            // Kontrollieren, ob UFO mit Rakete kollidiert
            if (rocket.x + rocket.width > ufo.x &&
                rocket.y + rocket.height > ufo.y &&
                rocket.x < ufo.x &&
                rocket.y < ufo.y + ufo.height
            ) {
                rocket.img.src = 'img/boom.png';
                console.log('Collion!!!');
                ufos = ufos.filter(u => u != ufo);
            }

            shots.forEach(function(shot) {
                // Kontrollieren, ob Laser mit Rakete kollidiert
                if (shot.x + shot.width > ufo.x &&
                    shot.y + shot.height > ufo.y &&
                    shot.x < ufo.x &&
                    shot.y < ufo.y + ufo.height
                ) {
                    ufo.hit = true;
                    ufo.img.src = 'img/boom.png';
                    console.log('Collion!!!');

                    setTimeout(() => {
                        ufos = ufos.filter(u => u != ufo);
                    }, 2000);
                }
            });
        });
    }

        function creatUfo(){
        let ufo = {
        x: 800,
        y: Math.random() * 500,
        width: 100,
        height: 40,
        src:'img/ufo.png',
        img: new Image()
    };
        ufo.img.src = ufo.src; //Ufo-Bild wird geladen
        ufos.push(ufo);
    }

        function shot(){
        if(Key_Space){
        let shot = {
        x: rocket.x + 110,
        y: rocket.y + 22,
        width: 20,
        height: 4,
        src:'img/laser_beam.svg',
        img: new Image()
    }
        shot.img.src = shot.src; //Ufo-Bild wird geladen
        shots.push(shot);
    }
    }
        function update() {
        if (Key_UP) {
        rocket.y -= 5;
    }
        if (Key_DOWN) {
        rocket.y += 5;
    }
        ufos.forEach(function(ufo) {
        if (!ufo.hit) {
        ufo.x -= 5;
    }
    });
        shots.forEach(function(shot) {
        shot.x += 15;
    });
    }
        function loadImages() {
        backgroundImage.src='img/background.jpg'
        rocket.img = new Image();
        rocket.img.src = rocket.src;
    }

        function draw(){
        ctx.drawImage(backgroundImage, 0, 0);
        ctx.drawImage(rocket.img, rocket.x, rocket.y, rocket.width, rocket.height)

        ufos.forEach(function(ufo){
        ctx.drawImage(ufo.img,ufo.x,ufo.y,ufo.width,ufo.height)
    })
        shots.forEach(function(shot){
        ctx.drawImage(shot.img,shot.x,shot.y,shot.width,shot.height)
    })
        requestAnimationFrame(draw)
    }

});


