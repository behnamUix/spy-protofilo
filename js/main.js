const glow = document.querySelector(".mouse-light");

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    header.style.padding = "12px 8%";

    header.style.background = "rgba(5,5,5,.45)";

    header.style.backdropFilter = "blur(25px)";
  } else {
    header.style.padding = "20px 8%";

    header.style.background = "transparent";
  }
});
const reveals = document.querySelectorAll(".reveal");

function reveal() {
  reveals.forEach((item) => {
    const top = item.getBoundingClientRect().top;

    if (top < window.innerHeight - 120) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);

reveal();

const counters = document.querySelectorAll(".statistics h2");

const speed = 80;

counters.forEach((counter) => {
  const update = () => {
    let target = parseInt(counter.innerText.replace(/\D/g, ""));

    let count = +counter.getAttribute("data-count") || 0;

    let inc = Math.ceil(target / speed);

    if (count < target) {
      count += inc;

      counter.setAttribute("data-count", count);

      counter.innerText = count;

      requestAnimationFrame(update);
    } else {
      counter.innerText = target + "+";
    }
  };

  update();
});
const phone = document.querySelector(".phone");

window.addEventListener("mousemove", (e) => {
  let x = (window.innerWidth / 2 - e.pageX) / 40;

  let y = (window.innerHeight / 2 - e.pageY) / 40;

  phone.style.transform = `translate(${x}px,${y}px)`;
});
document.querySelectorAll("a[href^='#']").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = link.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  });
});
const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const top = section.offsetTop - 150;

    const height = section.clientHeight;

    if (pageYOffset >= top) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") == "#" + current) {
      link.classList.add("active");
    }
  });
});
const topBtn = document.querySelector(".topButton");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

topBtn.onclick = () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
};
const cards = document.querySelectorAll(".feature");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const rotateY = (x - rect.width / 2) / 18;

    const rotateX = (rect.height / 2 - y) / 18;

    card.style.transform = `perspective(900px)

rotateX(${rotateX}deg)

rotateY(${rotateY}deg)

translateY(-8px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
  });
});
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  hero.style.opacity = 1 - value / 700;

  hero.style.transform = `translateY(${value * 0.3}px)`;
});
document.querySelectorAll(".feature").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    card.style.setProperty(
      "--x",

      `${e.clientX - rect.left}px`,
    );

    card.style.setProperty(
      "--y",

      `${e.clientY - rect.top}px`,
    );
  });
});
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.opacity = 0;

    loader.style.visibility = "hidden";
  }, 1200);
});
