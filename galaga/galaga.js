var gameStatus = 'stopped';
var canvas;
var shots = 0;
var bullets = {};
var shipvelocity = 0;
var enemies = {};
var numEnemies;
var enemyposition = [0, 0];
var enemyvelocity = [2, 0];
var firerate = .995;
var score = 0;
var map = {
    37: false,
    39: false,
    65: false,
    68: false,
    32: false
};
var cooldown = 0;

var images = {
    bg: null,
    ship: null,
    enemy: null
};

Bullet = function(type) {
    this.obj = type;
    if (type === images.ship) {
        this.type = "player";
    } else type = "enemy";

    this.shape = new Line([this.obj.x + 20, this.obj.y], [this.obj.x + 20, this.obj.y - 15]);

    this.shape.setBorderWeight(3);

    if (type === images.ship) {
        this.shape.setBorderColor("green");
    } else {
        this.shape.setBorderColor("red");
    }

    this.draw = function() {
        canvas.addShape(this.shape);
    }
}

function gameOver() {
    canvas.deleteAll();
    $('#gameover').css('opacity', 1);
    $('#start').css('opacity', 1);
}

function update() {
    if (gameStatus === 'ready') {

        if (map[37] || map[65]) {
            shipvelocity = -10;
        } else if (map[39] || map[68]) {
            shipvelocity = 10;
        }
        if (map[32] && cooldown <= 0) {
            bullets[shots] = new Bullet(images.ship);
            bullets[shots].draw();
            shots++;
            cooldown = 5;
        }

        for (var key in bullets) {
            if (bullets[key].type === 'player') {
                bullets[key].shape.move(0, -15);
                for (var n in enemies) {
                    if (bullets[key].shape.intersect(enemies[n])) {
                        canvas.deleteShape(enemies[n]);
                        delete enemies[n];
                        canvas.deleteShape(bullets[key].shape);
                        delete bullets[key];
                        numEnemies--;
                        score += 10;
                        $('#score').html("Score: " + score);
                    }
                }
            } else {
                bullets[key].shape.move(0, 10);
                if (bullets[key].shape.intersect(images.ship)) {
                    gameStatus = 'stopped';
                    gameOver();
                }
            }

            if (bullets[key].shape.y[0] < 0 || bullets[key].shape.y[1] > 1000) {
                canvas.deleteShape(bullets[key].shape);
                delete bullets[key];
            }
        }

        for (var n in enemies) {
            enemies[n].move(enemyvelocity[0], enemyvelocity[1]);
            if (Math.random() > firerate) {
                bullets[shots] = new Bullet(enemies[n]);
                bullets[shots].draw();
                shots++;
            }
        }

        enemyposition[0] += enemyvelocity[0];
        enemyposition[1] += enemyvelocity[1];
        if (enemyposition[0] === 240) {
            enemyvelocity[0] = -3;
        } else if (enemyposition[0] === -120) {
            enemyvelocity[0] = 3;
        }
        if (enemyposition[1] === 200) {
            enemyvelocity[1] = 0;
        }

        if (images.ship.x > 0 && (images.ship.x + images.ship.w) <= 1000) {
            images.ship.move(shipvelocity, 0);
        } else if (images.ship.x === 0 && shipvelocity > 0) {
            images.ship.move(shipvelocity, 0);
        } else if ((images.ship.x + images.ship.w) >= 1000 && shipvelocity < 0) {
            images.ship.move(shipvelocity, 0);
        }

        if (numEnemies === 0) {
            firerate -= .005;
            enemyposition = [0, 0];
            enemyvelocity = [2, 5];
            numEnemies = 18;
            for (i = 0; i < 18; i++) {
                enemies[i] = images.enemy.clone();
                enemies[i].move(200 + 100 * (i % 6), -150 + 50 * Math.floor(i / 6));
                canvas.addShape(enemies[i]);
            }
        }
        cooldown--;

        canvas.redraw();
    }
}


function init() {
    gameStatus = 'ready';
    shots = 0;
    bullets = {};
    numEnemies = 0;
    firerate = .995;
    score = 0;
    canvas.deleteAll();
    canvas.setBackgroundImage(images.bg);
    canvas.addShape(images.ship);
    canvas.redraw();
    $('#score').html("Score: " + score);
    $('#gameover').css('opacity', 0);
    $('#start').css('opacity', 0);
}

$(document).ready(function() {
    canvas = new LiteCanvas('c');
    images.bg = new Img('imgs/bg.png', [0, -400], 1200, 1411);
    images.ship = new Img('imgs/ship.png', [480, 950], 40, 26);
    images.enemy = new Img('imgs/enemy.png', [0, 0], 38, 28);

    canvas.setBackgroundImage(images.bg);
    canvas.redraw();

    $(document).keydown(function(e) {
        if (e.keyCode === 13 && gameStatus === 'stopped') {
            init();
        }
        if (e.keyCode in map) {
            map[e.keyCode] = true;
        }
    }).keyup(function(e) {
        if (e.keyCode in map) {
            map[e.keyCode] = false;
            if (e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 65 || e.keyCode === 68) {
                shipvelocity = 0;
            }
        }
    });

    var FPS = 30;
    setInterval(function() {
        update();
    }, 1000 / FPS);

});