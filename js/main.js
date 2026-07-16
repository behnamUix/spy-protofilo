// ============================================
// 1. Mouse Light Effect
// ============================================
const glow = document.querySelector(".mouse-light");

if (glow) {
  document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });
}

// ============================================
// 2. Header Effect
// ============================================
const header = document.querySelector("header");

if (header) {
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
}

// ============================================
// 3. Reveal Animation
// ============================================
const reveals = document.querySelectorAll(".reveal");

function reveal() {
  reveals.forEach((item) => {
    const top = item.getBoundingClientRect().top;
    if (top < window.innerHeight - 120) {
      item.classList.add("active");
    }
  });
}

if (reveals.length) {
  window.addEventListener("scroll", reveal);
  reveal();
}

// ============================================
// 4. Statistics Counter
// ============================================
const counters = document.querySelectorAll(".statistics h2");
const speed = 80;

counters.forEach((counter) => {
  const target = parseFloat(counter.getAttribute("data-target")) || 0;
  const isFloat = target % 1 !== 0;
  const isInfinite = target === 9999;

  const update = () => {
    let count = parseFloat(counter.getAttribute("data-count")) || 0;
    let inc = target / speed;

    if (count < target) {
      count += inc;
      if (count > target) count = target;
      counter.setAttribute("data-count", count);

      if (isFloat) {
        counter.innerText = count.toFixed(1);
      } else {
        counter.innerText = Math.floor(count);
      }

      requestAnimationFrame(update);
    } else {
      // نمایش نهایی
      if (isInfinite) {
        counter.innerText = "∞";
      } else if (isFloat) {
        counter.innerText = target.toFixed(1);
      } else {
        counter.innerText = target + "+";
      }
    }
  };
  update();
});
// ============================================
// 5. Phone Parallax Effect
// ============================================
const phone = document.querySelector(".phone");

if (phone) {
  window.addEventListener("mousemove", (e) => {
    let x = (window.innerWidth / 2 - e.pageX) / 40;
    let y = (window.innerHeight / 2 - e.pageY) / 40;
    phone.style.transform = `translate(${x}px,${y}px)`;
  });
}

// ============================================
// 6. Smooth Scroll for Anchor Links
// ============================================
document.querySelectorAll("a[href^='#']").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href");
    const target = document.querySelector(id);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// ============================================
// 7. Active Navigation Link
// ============================================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

if (sections.length && navLinks.length) {
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const top = section.offsetTop - 150;
      const height = section.clientHeight;

      if (pageYOffset >= top && pageYOffset < top + height) {
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
}

// ============================================
// 8. Top Button
// ============================================
const topBtn = document.querySelector(".topButton");

if (topBtn) {
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
}

// ============================================
// 9. 3D Card Effect
// ============================================
const cards = document.querySelectorAll(".feature");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = (x - rect.width / 2) / 18;
    const rotateX = (rect.height / 2 - y) / 18;

    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
  });
});

// ============================================
// 10. Hero Parallax
// ============================================
const hero = document.querySelector(".hero");

if (hero) {
  window.addEventListener("scroll", () => {
    let value = window.scrollY;
    hero.style.opacity = 1 - value / 700;
    hero.style.transform = `translateY(${value * 0.3}px)`;
  });
}

// ============================================
// 11. Card Mouse Position for Glow Effect
// ============================================
document.querySelectorAll(".feature").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--y", `${e.clientY - rect.top}px`);
  });
});

// ============================================
// 12. Loader
// ============================================
const loader = document.querySelector("#loader");

if (loader) {
  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";
    }, 1200);
  });
}
const hamburger = document.querySelector(".hamburger");

const menu = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");

  menu.classList.toggle("active");
});
