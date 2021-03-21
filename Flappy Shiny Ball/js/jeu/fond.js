function fond() {
    tempsBas += 4;
    cycleBas = tempsBas % 24000;
    cycleHaut = (tempsHaut + tempsBas) % 24000;
    gradient = ctx.createLinearGradient(0, 0, 0, innerHeight);
    cycleAffichage();
};

function cycleAffichage() {
    cycle(cycleBas);
    gradient.addColorStop(0, "rgba(" + r + ", " + g + ", " + b + ", 0.90)");
    cycle(cycleHaut);
    gradient.addColorStop(1, "rgba(" + r + ", " + g + ", " + b + ", 0.90)");
    ctx.fillStyle = gradient;
    ctx.fillRect(-1, -1, innerWidth + 2, innerHeight + 2);
}

function cycle(cyc) {
    this.cyc = cyc;
    if (cyc < 12000 || cyc >= 21500) {
        if (cyc < 4000 || cyc >= 21500) {
            r = 3;
            g = 6;
            b = 33;
            return
        }
        if (4000 <= cyc && cyc < 5000) {
            r = 0.027 * cyc - 105;
            g = 0.019 * cyc - 70;
            b = 0.027 * cyc - 75;
            return
        }
        if (5000 <= cyc && cyc < 5850) {
            r = 30;
            g = 25;
            b = 60;
            return
        }
        if (5850 <= cyc && cyc < 6500) {
            r = 0.092307 * cyc - 509.995;
            g = -0.010769 * cyc + 88;
            b = 0.007692 * cyc + 15.002;
            return
        }
        if (6500 <= cyc && cyc < 9500) {
            r = 0.003333 * cyc + 68.336;
            g = 0.049 * cyc - 300.5;
            b = 0.050333 * cyc - 262.163;
            return
        }
        if (9500 <= cyc && cyc < 12000) {
            r = 0.0012 * cyc + 88.6;
            g = 0.03 * cyc - 120;
            b = 0.0156 * cyc + 67.8;
            return
        }
    } else {
        if (12000 <= cyc && cyc < 16000) {
            r = 103;
            g = 240;
            b = 255;
            return
        }
        if (16000 <= cyc && cyc < 17500) {
            r = -0.002 * cyc + 135;
            g = -0.05 * cyc + 1040;
            b = -0.026 * cyc + 671;
            return
        }
        if (17500 <= cyc && cyc < 18500) {
            r = -0.01 * cyc + 275;
            g = -0.147 * cyc + 2737.5;
            b = -0.151 * cyc + 2858.5;
            return
        }
        if (18500 <= cyc && cyc < 19000) {
            r = -0.12 * cyc + 2310;
            g = 0.014 * cyc - 241;
            b = -0.01 * cyc + 250;
            return
        }
        if (19000 <= cyc && cyc < 20500) {
            r = 30;
            g = 25;
            b = 60;
            return
        }
        if (20500 <= cyc && cyc < 21500) {
            r = -0.027 * cyc + 583.5;
            g = -0.019 * cyc + 414.5;
            b = -0.027 * cyc + 613.5;
            return
        }
    }
};