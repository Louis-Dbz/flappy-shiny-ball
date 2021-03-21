function rectangle(type, r, g, b, trs, x1 = 0, y1 = 100, x2 = 200, y2 = 0,
    timer = null, alea = null, timer2 = (innerWidth / 2 - 390) / 4) {
    this.type = type;
    this.timer = timer;
    this.alea = alea;
    this.r = r;
    this.g = g;
    this.b = b;
    this.trs = trs;
    this.timer2 = timer2;
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.affichage = function () {
        ctx.beginPath();
        ctx.fillStyle = "rgba(" + this.r + ", " + this.g + ", " +
            this.b + ", " + this.trs + ")";
        ctx.rect(this.x1, this.y1, this.x2, this.y2);
        ctx.fill();
    };
};

function pylone() {
    v = Math.pow(dist, 0.15) + 4;
    dist += v;
    delaiPylone -= 1;
    if (delaiPylone <= 0 && haut.length < 20) {
        if (lvlIndice < 10) {
            delaiPylone = Math.random() * (165 - 100) + 100;
        } else {
            delaiPylone = 20;
        }
        if (lvlIndice < 10) {
            if (lvlIndice == 0) {
                diff = 300 / 2;
                hauteur = (Math.random() * 2 - 1) * (innerHeight / 2 - diff);
                haut.push(new rectangle(0, 0, 0, 0, 0.4, innerWidth, -1,
                    100, innerHeight / 2 - diff + hauteur, undefined, undefined));
                bas.push(new rectangle(0, 0, 0, 0, 0.4, innerWidth, innerHeight,
                    100, -innerHeight / 2 + diff + hauteur,
                    (innerWidth / 2 - 480) / 4, Math.random() * 10));
            }
            if (lvlIndice == 1) {
                diff = 260 / 2;
                hauteur = (Math.random() * 2 - 1) * (innerHeight / 2 - diff);
                haut.push(new rectangle(0, 0, 0, 0, 0.4, innerWidth, -1,
                    100, innerHeight / 2 - diff + hauteur, undefined, undefined));
                bas.push(new rectangle(0, 0, 0, 0, 0.4, innerWidth, innerHeight,
                    100, -innerHeight / 2 + diff + hauteur,
                    (innerWidth / 2 - 480) / 4, Math.random() * 10));
            }
            if (lvlIndice >= 2) {
                diff = 250 / 2;
                hauteur = (Math.random() * 2 - 1) * (innerHeight / 2 - diff);
                haut.push(new rectangle(0, 0, 0, 0, 0.4, innerWidth, -1,
                    100, innerHeight / 2 - diff + hauteur, undefined, undefined));
                bas.push(new rectangle(0, 0, 0, 0, 0.4, innerWidth, innerHeight,
                    100, -innerHeight / 2 + diff + hauteur,
                    (innerWidth / 2 - 480) / 4, Math.random() * 10));
            }
        } else {
            if (lvlIndice == 10) {
                diff = 300 / 2;
                if (hauteurSave == 0) {
                    hauteur = (Math.random() * 2 - 1) * (innerHeight / 2 - diff);
                    hauteurSave = hauteur;
                    haut.push(new rectangle(10, 0, 0, 0, 0.4, innerWidth, -1,
                        100, innerHeight / 2 - diff + hauteur, undefined, undefined));
                    bas.push(new rectangle(10, 0, 0, 0, 0.4, innerWidth, innerHeight,
                        100, -innerHeight / 2 + diff + hauteur,
                        (innerWidth / 2 - 480) / 4, Math.random() * 10));
                } else {
                    diff = 300 / 2;
                    haut.push(new rectangle(10, 0, 0, 0, 0.4, innerWidth, -1,
                        100, innerHeight / 2 - diff + hauteur, undefined, undefined));
                    bas.push(new rectangle(10, 0, 0, 0, 0.4, innerWidth, innerHeight,
                        100, -innerHeight / 2 + diff + hauteur,
                        (innerWidth / 2 - 480) / 4, Math.random() * 10));
                }
            }
        }
    }

    for (var i = 0; i < bas.length; i++) {
        bas[i].x1 -= v;
        haut[i].x1 -= v;
        bas[i].affichage();
        haut[i].affichage();
        if (lvlIndice >= 1 && lvlIndice < 10) {
            bas[i].timer -= 1;
            bas[i].timer2 -= 1;
            if (bas[i].timer <= 0) {
                if (Math.round(bas[i].alea) > 5) {
                    bas[i].y2 += 1;
                    haut[i].y2 += 1;
                }
                if (Math.round(bas[i].alea) <= 5) {
                    bas[i].y2 -= 1;
                    haut[i].y2 -= 1;
                }
            }
            if (lvlIndice >= 2) {
                if (bas[i].timer2 <= 0 && bas[i].type == 0) {
                    bas[i].type = 1;
                    bas[i].alea = Math.random();
                    vPillier = Math.random() * (3.5 - 2) + 2;
                    bas[i].timer2 = 20;
                }
                if (bas[i].type == 1) {
                    if (Math.round(bas[i].alea) % 0.1 * 100 < 2) {
                        bas[i].y2 += vPillier;
                        haut[i].y2 += vPillier;
                    }
                    if (Math.round(bas[i].alea) % 0.1 * 100 < 4 &&
                        Math.round(bas[i].alea) % 0.1 >= 2) {
                        bas[i].y2 -= vPillier;
                        haut[i].y2 -= vPillier;
                    }
                    if (Math.round(bas[i].alea) % 0.1 * 100 < 8
                        && Math.round(bas[i].alea) % 0.1 >= 6) {
                        bas[i].y2 -= Math.random() * 0.4;
                        haut[i].y2 += Math.random() * 0.4;
                    }
                    if (Math.round(bas[i].alea) % 0.1 * 100 >= 8) {
                        bas[i].y2 -= Math.random() * 0.4;
                        haut[i].y2 += Math.random() * 0.4;
                    }
                    if (lvlIndice >= 3) {
                        if (bas[i].alea % 0.01 * 1000 < 5) {
                            bas[i].x1 += vPillier * 1.1;
                            haut[i].x1 += vPillier * 1.1;
                        }
                        if (bas[i].alea % 0.01 * 1000 >= 5) {
                            bas[i].x1 -= vPillier;
                            haut[i].x1 -= vPillier;
                        }
                        if (lvlIndice == 3) {
                            if (bas[i].alea < 0.5) {
                                bas[i].y2 += 0.5;
                                haut[i].y2 -= 0.5;
                            }
                            if (bas[i].alea >= 0.5) {
                                bas[i].y2 += 0.8;
                                haut[i].y2 -= 0.8;
                            }
                        }
                        if (lvlIndice == 5) {
                            if (bas[i].alea < 0.5) {
                                bas[i].y2 -= 0.2;
                                haut[i].y2 += 0.2;
                            }
                            if (bas[i].alea >= 0.5) {
                                bas[i].y2 -= 0.3;
                                haut[i].y2 += 0.3;
                            }
                        }
                    }
                    if (bas[i].timer2 <= 0) {
                        bas[i].type = -1;
                    }
                }
            }
        }
    }
    for (var i = 0; i < bas.length; i++) {
        if (bas[i].x1 <= -100) {
            bas.splice(i, 1);
            haut.splice(i, 1);
        }
    }
};