const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 400;

// Game variables
let x = canvas.width / 2;
let y = canvas.height / 2;
let speed = 2;
let dx = speed;
let dy = speed;
let score = 0;
let tipDisplayTime = 0; // Timer for displaying tips

// Cybersecurity tips
const tips = [
    "Tip: Use strong, unique passwords for each account.",
    "Tip: Avoid clicking on suspicious links or email attachments.",
    "Tip: Enable two-factor authentication (2FA) for extra security.",
    "Tip: Keep your software and apps updated.",
    "Tip: Be cautious when using public Wi-Fi; avoid logging into sensitive accounts.",
    "Tip: Regularly back up your data in case of cyberattacks.",
];

// Draw the ball
function drawBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

// Draw score and tip
function drawScoreAndTip() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#000";
    ctx.fillText("Score: " + score, 8, 20);
    
    // Display the tip if the timer is active
    if (tipDisplayTime > 0) {
        ctx.fillText(tips[Math.floor(Math.random() * tips.length)], 50, 50);
        tipDisplayTime--;
    }
}

// Update ball position and score
function update() {
    if (x + dx > canvas.width || x + dx < 0) dx = -dx;
    if (y + dy > canvas.height || y + dy < 0) dy = -dy;
    x += dx;
    y += dy;
    
    // Increase score
    score++;

    // Randomly trigger a cybersecurity tip every 200 points
    if (score % 200 === 0) {
        tipDisplayTime = 150; // Display for a set duration
    }
    
    drawBall();
    drawScoreAndTip();
}

// Game loop
function gameLoop() {
    update();
    requestAnimationFrame(gameLoop);
}

gameLoop();
