function update(timestamp) {
    ctx.rect(0, 0, screen.width, screen.height);
    fond();
    collision();
    pylone();
    particule();
    bestScoreText();
    scoreActuelText();
    orbe[0].update();
    if (reqBoucle % 20 < 1) {
        if ((lvlIndice + 1) * 2 <= lvl.length) {
            temp = undefined;
            temp = lvl.slice(0, (lvlIndice + 1) * 2)
            if (Math.max(...temp) < dist) {
                lvlIndice = lvl[temp.length - 1];
            }
        }
    }
};

function affichageJeu() {
    cycleAffichage();
    orbe[0].affichage();
    for (i = 0; i < bas.length; i++) {
        bas[i].affichage();
        haut[i].affichage();
    }
    for (i = 0; i < particules.length; i++) {
        particules[i].affichage();
    }
};