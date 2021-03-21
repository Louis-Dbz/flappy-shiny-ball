function cercle(x, y, ray, r, g, b, trs, n = 1) {
    this.x = x;
    this.y = y;
    this.ray = ray;
    this.r = r;
    this.g = g;
    this.b = b;
    this.trs = trs;
    this.n = n;
    this.affichage = function () {
        ctx.beginPath();
        ctx.fillStyle = "rgba(" + this.r + ", " + this.g + ", " +
            this.b + ", " + this.trs + ")";
        ctx.arc(this.x, this.y, this.ray, 0, 2 * Math.PI, false);
        ctx.fill();
    }
};

orbe.push(new cercle(700, innerHeight / 2, 24, 255, 255, 255, 0.95));

orbe[0].update = function () {
    if (inverse == true) {
        vOrbe = vOrbe + -acc;
    } else {
        vOrbe = vOrbe + acc;
    }
    if (mode == 1) {
        if (inverse == true) {
            if (orbe[0].y < 0 + orbe[0].ray * 2) {
                espace = 1;
            }
        } else {
            if (orbe[0].y > innerHeight - orbe[0].ray * 2) {
                espace = 1;
            }
        }
    }
    this.y += vOrbe;
    if (espace == 1) {
        if (inverse == true) {
            vOrbe = 15 + -acc
        } else {
            vOrbe = -15 + acc;
        }
        espace = 0;
    }
    this.r = 255;
    this.g = 255;
    this.b = 255;
    this.affichage();
};

function orbes() {
    orbe[0].update();
    for (i = 1; i < orbe.length; i++) {
        orbe[i].x = orbe[0].x;
        orbe[i].y = orbe[0].y;
        orbe[i].affichage();
    }
    orbe[0].affichage()
};

function particule() {
    if (temps <= 0) {
        temps = Math.random() * (4 - 2) + 2;
        10 * particules.push(new cercle(orbe[0].x, orbe[0].y + (Math.random() * 2 - 1)
            * orbe[0].ray, 1.4, 255, 255, 255, 1));
        particules.push(new cercle(orbe[0].x, orbe[0].y + (Math.random() * 2 - 1)
            * orbe[0].ray, Math.random() * 1.1, 255, 255, 255, 1.4));
        particules.push(new cercle(orbe[0].x, orbe[0].y + (Math.random() * 2 - 1)
            * orbe[0].ray, Math.random() * 1.1, 255, 255, 255, 0.8, 1));
        particules.push(new cercle(orbe[0].x + (Math.random() * 2 - 1) * orbe[0].ray,
            orbe[0].y + (Math.random() * 1.2 - 1) * orbe[0].ray / 2, Math.random()
        * 1.3, 255, 255, 255, 0.8));
        particules.push(new cercle(orbe[0].x + (Math.random() * 2 - 1) * orbe[0].ray,
            orbe[0].y + (Math.random() * 1.2 - 1) * orbe[0].ray / 2, Math.random()
        * 3.2, 255, 255, 255, 0.8));
    }
    temps -= 1;
    particules.push(new cercle(orbe[0].x + (Math.random() * 2 - 1) * orbe[0].ray, orbe[0].y +
        (Math.random() * 2 - 1) * orbe[0].ray / 2, Math.random() * 2, 255, 255, 255, 1));
    for (var i = 0; i < particules.length; i++) {
        particules[i].n = particules[i].n + accP;
        particules[i].x -= v;
        particules[i].affichage();
        particules[i].trs -= 0.025;
        particules[i].y += - Math.sqrt(particules[i].n) + 1.35;
        if (particules[i].trs <= 0.01) {
            particules.splice(i, 1);
        }
    }
};

function collision() {
    if (mode == 1) {
        return
    }
    for (var i = 0; i < bas.length; i++) {
        if (orbe[0].x - orbe[0].ray < haut[i].x1 + haut[i].x2) {
            if (orbe[0].x + orbe[0].ray > haut[i].x1 && orbe[0].y -
                orbe[0].ray < haut[i].y1 + haut[i].y2) {
                pause = 2;
            }
            if (orbe[0].x + orbe[0].ray > bas[i].x1 && orbe[0].y +
                orbe[0].ray > bas[i].y1 + bas[i].y2) {
                pause = 2;
            }
        }
    }
};