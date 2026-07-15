/*
=========================================
SpyGame Landing Animation
=========================================
*/

document.addEventListener("DOMContentLoaded", () => {
  /*-----------------------------
      Reveal Animation
    -----------------------------*/

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  document.querySelectorAll(".reveal").forEach((el) => {
    observer.observe(el);
  });

  /*-----------------------------
      Stagger Animation
    -----------------------------*/

  document.querySelectorAll(".featuresGrid .feature").forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.12}s`;
  });

  document.querySelectorAll(".gallery .shot").forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.08}s`;
  });

  /*-----------------------------
      Floating Cards
    -----------------------------*/

  document.querySelectorAll(".floating-card").forEach((card, index) => {
    card.style.animationDelay = `${index * 0.6}s`;
  });

  /*-----------------------------
      Fade Hero
    -----------------------------*/

  const hero = document.querySelector(".hero");

  window.addEventListener("scroll", () => {
    let value = window.scrollY;

    hero.style.opacity = 1 - value / 900;
  });

  /*-----------------------------
      Statistics Animation
    -----------------------------*/

  const numbers = document.querySelectorAll(".statistics h2");

  let animated = false;

  window.addEventListener("scroll", () => {
    const section = document.querySelector(".statistics");

    if (!section) return;

    if (animated) return;

    if (section.getBoundingClientRect().top < window.innerHeight - 120) {
      animated = true;

      numbers.forEach((item) => {
        const target = parseInt(item.innerText);

        let count = 0;

        const timer = setInterval(() => {
          count += Math.ceil(target / 40);

          if (count >= target) {
            count = target;

            clearInterval(timer);
          }

          item.innerText = count;
        }, 30);
      });
    }
  });

  /*-----------------------------
      Hover Glow
    -----------------------------*/

  document.querySelectorAll(".feature").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();

      card.style.setProperty("--x", `${e.clientX - rect.left}px`);

      card.style.setProperty("--y", `${e.clientY - rect.top}px`);
    });
  });
});
