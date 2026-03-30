// LOADER
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transition = "0.5s";
        setTimeout(() => loader.style.display = "none", 500);
    }, 1500);
});

// MENU
function toggleMenu() {
    document.getElementById("nav").classList.toggle("active");
}

// CURSOR GLOW
const glow = document.querySelector(".cursor-glow");
document.addEventListener("mousemove", e => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});

// SCROLL ANIMATION
const elements = document.querySelectorAll('.fade-up');

function reveal() {
    elements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', reveal);
reveal();

// PARTICLES
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speedX: Math.random() - 0.5,
        speedY: Math.random() - 0.5
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "#00d4ff";
        ctx.fill();

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
    });

    requestAnimationFrame(animate);
}

animate();

// SOUND
const sound = document.getElementById("clickSound");

document.querySelectorAll(".sound").forEach(el => {
    el.addEventListener("click", () => {
        if (sound) {
            sound.currentTime = 0;
            sound.play();
        }
    });
});
