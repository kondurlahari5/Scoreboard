let homeScore = 0;
let guestScore = 0;
const scoreSound = document.getElementById('score-sound');

function updateScore(team, points) {
    if (team === 'home') {
        homeScore += points;
        document.getElementById('home-score').innerText = homeScore;
    } else if (team === 'guest') {
        guestScore += points;
        document.getElementById('guest-score').innerText = guestScore;
    }
    playScoreSound();
}

function resetScores() {
    homeScore = 0;
    guestScore = 0;
    document.getElementById('home-score').innerText = homeScore;
    document.getElementById('guest-score').innerText = guestScore;
}

function playScoreSound() {
    scoreSound.currentTime = 0;
    scoreSound.play();
}
