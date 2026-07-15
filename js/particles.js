const canvas = document.createElement("canvas");

canvas.id = "particleCanvas";

document.getElementById("particles").appendChild(canvas);

const ctx = canvas.getContext("2d");

let w, h;

function resize() {
  w = canvas.width = window.innerWidth;

  h = canvas.height = window.innerHeight;
}

resize();

window.addEventListener("resize", resize);
const mouse = {
  x: null,

  y: null,

  radius: 180,
};

window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;

  mouse.y = e.clientY;
});
class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * w;

    this.y = Math.random() * h;

    this.size = Math.random() * 3 + 1;

    this.speedX = (Math.random() - 0.5) * 0.7;

    this.speedY = (Math.random() - 0.5) * 0.7;

    this.color = Math.random() > 0.5 ? "#ff0055" : "#00d9ff";
  }

  update() {
    this.x += this.speedX;

    this.y += this.speedY;

    if (this.x < 0 || this.x > w) this.speedX *= -1;

    if (this.y < 0 || this.y > h) this.speedY *= -1;

    let dx = this.x - mouse.x;

    let dy = this.y - mouse.y;

    let dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < mouse.radius) {
      this.x += dx / 18;

      this.y += dy / 18;
    }
  }

  draw() {
    ctx.beginPath();

    ctx.fillStyle = this.color;

    ctx.shadowColor = this.color;

    ctx.shadowBlur = 15;

    ctx.arc(
      this.x,

      this.y,

      this.size,

      0,

      Math.PI * 2,
    );

    ctx.fill();
  }
}
const particles = [];

for (let i = 0; i < 120; i++) {
  particles.push(new Particle());
}
function connect() {
  for (let a = 0; a < particles.length; a++) {
    for (let b = a; b < particles.length; b++) {
      let dx = particles[a].x - particles[b].x;

      let dy = particles[a].y - particles[b].y;

      let dist = dx * dx + dy * dy;

      if (dist < 9000) {
        ctx.beginPath();

        ctx.strokeStyle = "rgba(255,255,255,.08)";

        ctx.lineWidth = 1;

        ctx.moveTo(
          particles[a].x,

          particles[a].y,
        );

        ctx.lineTo(
          particles[b].x,

          particles[b].y,
        );

        ctx.stroke();
      }
    }
  }
}
function animate() {
  ctx.clearRect(0, 0, w, h);

  particles.forEach((p) => {
    p.update();

    p.draw();
  });

  connect();

  requestAnimationFrame(animate);
}

animate();
for (let i = 0; i < 40; i++) {
  let star = document.createElement("span");

  star.className = "star";

  star.style.left = Math.random() * 100 + "%";

  star.style.top = Math.random() * 100 + "%";

  star.style.animationDelay = Math.random() * 6 + "s";

  document.body.appendChild(star);
}
