function bestScoreRegistered() {
    if (localStorage.getItem("bestScore") == null) {
        bestScoreRegistered = 0;
    } else if (localStorage.getItem("bestScore") != null) {
        bestScoreRegistered = parseFloat(localStorage.getItem("bestScore"))
    }
    return bestScoreRegistered
};

function bestScoreText() {
    scoreInt = Math.round(dist) / 10;
    if (bestScore == undefined || bestScoreInt < scoreInt) {
        bestScoreInt = scoreInt;
        if (bestScoreRegistered > bestScoreInt) {
            bestScoreInt = bestScoreRegistered;
        }
        if (bestScoreInt > bestScoreRegistered) {
            localStorage.setItem("bestScore", bestScoreInt.toString())
        }
        bestScore = "Meilleur score: " + bestScoreInt;
    }
    if (bestScore != undefined) {
        font = "DotGothic16"
        largeur = "32";
        ctx.fillStyle = "rgb(7, 7, 7)";
        ctx.font = largeur + "px " + font;
        ctx.fillText(bestScore, innerWidth - bestScore.length * largeur / 1.9, innerHeight - 20);
    }
};

function scoreActuelText() {
    font = "DotGothic16"
    scoreInt = Math.round(dist) / 10;
    largeur = "32";
    ctx.fillStyle = "rgb(7, 7, 7)";
    ctx.font = largeur + "px " + font;
    scoreActuel = Math.round(scoreInt).toString()
    ctx.fillText(scoreActuel, innerWidth - innerWidth / 2 - scoreActuel.length * largeur / 4, 35);
};