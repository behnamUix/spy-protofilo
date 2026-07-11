/* ===========================
   Custom Cursor
=========================== */

const cursor = document.querySelector(".cursor");

if (cursor) {
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;

    cursor.style.top = `${e.clientY}px`;
  });
}

/* ===========================
   Mobile Menu
=========================== */

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuBtn.classList.toggle("open");
  });
}

/* ===========================
   Typing Role Animation
=========================== */

const roleElement = document.querySelector("#role");

const roles = [
  "Android Developer",

  "Kotlin Developer",

  "Jetpack Compose Developer",
];

let roleIndex = 0;

let charIndex = 0;

function typingRole() {
  if (!roleElement) return;

  if (charIndex < roles[roleIndex].length) {
    roleElement.textContent += roles[roleIndex][charIndex];

    charIndex++;

    setTimeout(typingRole, 100);
  } else {
    setTimeout(() => {
      roleElement.textContent = "";

      charIndex = 0;

      roleIndex++;

      if (roleIndex >= roles.length) {
        roleIndex = 0;
      }

      typingRole();
    }, 1500);
  }
}

typingRole();

/* ===========================
   Name Typing
=========================== */

const nameElement = document.querySelector("#typing");

const nameText = "علی محجوب";

let nameIndex = 0;

function typeWriter() {
  if (!nameElement) return;

  if (nameIndex < nameText.length) {
    nameElement.textContent += nameText[nameIndex];

    nameIndex++;

    setTimeout(typeWriter, 150);
  }
}

typeWriter();

/* ===========================
   Page Loader
=========================== */

const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  if (loader) {
    setTimeout(() => {
      loader.classList.add("hide");
    }, 1200);
  }
});

/* ===========================
   Reveal Animation
=========================== */

function revealElements() {
  const elements = document.querySelectorAll(".reveal");

  elements.forEach((item) => {
    const position = item.getBoundingClientRect().top;

    if (position < window.innerHeight - 120) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealElements);

window.addEventListener("load", revealElements);

/* ===========================
   3D Tilt Cards
=========================== */

const cards = document.querySelectorAll(".project-card,.skill-card,.info-box");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const rotateX = (y - rect.height / 2) / 15;

    const rotateY = (rect.width / 2 - x) / 15;

    card.style.transform = `

        perspective(800px)

        rotateX(${rotateX}deg)

        rotateY(${rotateY}deg)

        translateY(-10px)

        `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});
