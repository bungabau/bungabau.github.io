AOS.init();

// Variabel untuk file audio
var musik = "";

var audio = document.querySelector(".audio");
if (musik) {
    audio.src = musik;
}

// Confetti Effect
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 2,
            d: Math.random() * 100 + 10,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            tilt: Math.random() * 10 - 10,
            tiltAngleIncremental: Math.random() * 0.07 + 0.05,
            tiltAngle: 0
        });
    }
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach((c, i) => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fillStyle = c.color;
        ctx.fill();
        c.y += Math.cos(c.d) + 1 + c.r / 2;
        c.tiltAngle += c.tiltAngleIncremental;
        c.x += Math.sin(c.tiltAngle) * 2;
        if (c.y > canvas.height) {
            c.y = -10;
            c.x = Math.random() * canvas.width;
        }
    });
    requestAnimationFrame(drawConfetti);
}

// Fungsi untuk memulai tampilan
function mulai() {
    audio.play();
    window.scrollTo(0, 0); // Scroll ke atas
    document.querySelector(".open").style.opacity = "0"; // Hilangkan layar pembuka
    document.body.style.overflowY = "scroll"; // Aktifkan scroll
    createConfetti(); // Start confetti
    drawConfetti();
    setTimeout(function () {
        document.querySelector(".open").style.display = "none";
    }, 1200); // Sembunyikan layar pembuka setelah 1,2 detik
}

// Surprise Function
function showSurprise() {
    const surprise = document.getElementById('surprise');
    surprise.style.display = 'block';
    surprise.scrollIntoView({ behavior: 'smooth' });
    // Add more confetti or effects here if desired
}