let mouse = {
    x: 0,
    y: 0
};

document.onkeydown = function (e) {
    if (e.key == " " || e.keyCode == 38) {
        if (pause == 0) {
            espace = 1;
        }
    } else if (e.keyCode == 13) {
        if (pause != 1) {
            pause = 2;
        } else {
            pause = 0;
            init();
        }
    } else if (e.key == "e" && pause == 1 || e.keyCode == 27 && pause == 1) {
        document.getElementById("canvas").className = "cursorNone";
        pause = 0;
        init();
    } else if (e.key == "e" && pause != 1 || e.keyCode == 27 && pause != 1) {
        document.getElementById("canvas").className = "cursorDefault";
        pause = 1;
        init();
    } else if (dev == "true") {
        if (e.key == "p" && mode == 1) {
            mode = 0;
        } else if (e.key == "p" && mode == 0) {
            mode = 1;
        }
    }
    if (e.key == "i" && inverse == true) {
        inverse = false;
    } else if (e.key == "i" && inverse == false) {
        inverse = true;
    }
};

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    affichageJeu();
    if (pause == 1) {
        document.getElementById("canvas").className = "cursorDefault"
        affichageMenu();
    }
});

document.addEventListener("mousemove", function (e) {
    if (pause != 1) {
        return
    } else {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        collisionB = collisionBoutton();
        if (collisionB != -1) {
            //if (collisionB == 1) {

            //} else if (collisionB == 2) {

            //} else if (collisionB == 3) {

            //} else if (collisionB == 4) {

            //}
        } else {
            collisionB = -1
        }
    }
});

document.addEventListener("click", function (e) {
    if (pause != 1) {
        return
    } else {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        collisionB = collisionBoutton();
        if (collisionB != -1) {
            if (collisionB == 1) {
                pause = 0;
            } else if (collisionB == 2) {

            } else if (collisionB == 3) {

            } else if (collisionB == 4) {

            }
            init();
        }
    }
});

function boucle(timestamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    update();
    if (pause === 0) {
        reqBoucle = requestAnimationFrame(boucle);
    } else if (pause == 1) {
        return
    } else if (pause == 2) {
        bestScoreText();
        espace = 0;
        pause = 0;
        haut = [];
        bas = [];
        v = 0;
        dist = 0;
        delaiPylone = 0;
        hauteur = 0;
        diff = 0;
        acc = 0.55;
        vOrbe = 0;
        orbe[0].y = innerHeight / 2;
        particules = [];
        lvlIndice = 0;
        reqBoucle = 0;
        return init();
    }
};

function boucleMenu(timestamp) {
    if (pause === 1) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        affichageJeu();
        if (etatMenu === 0) {
            affichageMenu();
        } else if (etatMenu === 1) {
            affichageCustoms();
        }
        reqBoucleMenu = requestAnimationFrame(boucleMenu);
    } else if (pause == 0) {
        return
    }
}

function init() {
    if (pause === 0) {
        boucle();
    } else if (pause === 1) {
        etatMenu = 0;
        boucleMenu();
    }
};

document.onload = init(), bestScoreRegistered();