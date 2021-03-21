function menuFond() {
    ctx.beginPath();
    ctx.fillStyle = "rgba(0, 0, 0, 0.12)";
    ctx.rect(0, 0, innerWidth, innerHeight);
    ctx.fill();
};

//var textMenu = [];
//textMenu.push(new menuText("Reprendre", 25, innerHeight / 3));
//textMenu.push(new menuText("Statistiques", 25, innerHeight / 3 + 0.1 * innerHeight));
//textMenu.push(new menuText("Customiser", 25, innerHeight / 3 + 0.2 * innerHeight));
//textMenu.push(new menuText("Parametres", 25, innerHeight / 3 + 0.3 * innerHeight));

function affichageMenu() {
    menuFond();
    //for (i = 0; i < bouttons.length; i++) {
    //    bouttons[i].h = parseInt(textMenu[0].largeur) * 1.55;
    //    bouttons[i].l = parseInt(textMenu[0].largeur) * 7;
    //    bouttons[i].y = textMenu[i].y - bouttons[i].h + 17;
    //    bouttons[i].affichage();
    //    textMenu[i].y = innerHeight / 3.2 + 2 * i * textMenu[i].largeur;
    //    textMenu[i].affichage();
    //}
};

function menuText(text, x, y, largeur = 0.040 * innerWidth, r, g, b, t) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.largeur = largeur;
    this.r = r;
    this.g = g;
    this.b = b;
    this.t = t;

    this.couleur = function () {
        this.r += 1;
        this.g += 1;
        this.b += 1;
    }

    this.affichage = function () {
        largeur = largeur.toString();
        ctx.fillStyle = "rgba(" + this.r + ", " + this.g + ", " +
            this.b + ", " + this.t + ")";;
        ctx.font = "bold " + largeur + "px " + "DotGothic16";
        ctx.fillText(this.text, this.x, this.y);
    }
};

function boutton(x, y, l, h, r, g, b, t, l2 = 0, timer = 1020) {
    this.x = x;
    this.y = y;
    this.l = l;
    this.h = h;
    this.r = r;
    this.g = g;
    this.b = b;
    this.t = t;
    this.l2 = l2;
    this.timer = timer;
    //gradient = ctx.createLinearGradient(0, 0, 0, innerHeight);

    this.affichage = function () {
        ctx.beginPath();
        ctx.fillStyle = "rgba(" + this.r + ", " + this.g + ", " +
            this.b + ", " + this.t + ")";
        ctx.rect(this.x, this.y, this.l, this.h);
        ctx.fill();
    }
};

//bouttons.push(new boutton(0, 100, 320, 95, 0, 0, 10, 0.2));
//bouttons.push(new boutton(0, 200, 320, 95, 0, 0, 10, 0.2));
//bouttons.push(new boutton(0, 300, 320, 95, 0, 0, 10, 0.2));
//bouttons.push(new boutton(0, 400, 320, 95, 0, 0, 10, 0.2));

function collisionBoutton() {
//    if (mouse.x <= bouttons[0].x + bouttons[0].l
//        && mouse.x >= bouttons[0].x
//        && mouse.y <= bouttons[0].y + bouttons[0].h
//        && mouse.y >= bouttons[0].y) {
//        return 1
//    }
    //} else if (mouse.x <= bouttons[1].x + bouttons[1].l
    //    && mouse.x >= bouttons[1].x
    //    && mouse.y <= bouttons[1].y + bouttons[0].h
    //    && mouse.y >= bouttons[1].y) {
    //    return 2
    //} else if (mouse.x <= bouttons[2].x + bouttons[2].l
    //    && mouse.x >= bouttons[2].x
    //    && mouse.y <= bouttons[2].y + bouttons[2].h
    //    && mouse.y >= bouttons[2].y) {
    //    return 3
    //} else if (mouse.x <= bouttons[3].x + bouttons[3].l
    //    && mouse.x >= bouttons[3].x
    //    && mouse.y <= bouttons[3].y + bouttons[3].h
    //    && mouse.y >= bouttons[3].y) {
    //    return 4
    //} else {
    //    return 0
    //}
}