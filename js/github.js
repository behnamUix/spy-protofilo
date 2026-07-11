const githubUser = "behnamUix";
const featuredProjects = [
  "SpyGame",
  "ComaGame",
  "Popcorn",
  "Mazejoo",
  "DownloaderCompose",
  "PersianM3Calendar",
];

const container = document.querySelector("#projects-container");

const template = document.querySelector("#project-template");

console.log("github.js loaded");

console.log(container);

async function loadProjects() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${githubUser}/repos?per_page=100`,
    );

    const repos = await response.json();

    console.log("Repositories:", repos);

    repos

      .filter((repo) => featuredProjects.includes(repo.name))

      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))

      .forEach((repo) => {
        const card = template.content.cloneNode(true);

        card.querySelector(".project-name").textContent = repo.name;

        card.querySelector(".project-desc").textContent =
          repo.description ?? "Android Project";

        card.querySelector(".project-lang").textContent =
          repo.language ?? "Kotlin";

        card.querySelector(".stars").textContent =
          `⭐ ${repo.stargazers_count}`;

        card.querySelector(".fork").textContent = `🍴 ${repo.forks_count}`;

        card.querySelector(".github-link").href = repo.html_url;
        const projectCard = card.querySelector(".project-card");

        projectCard.addEventListener("click", () => {
          window.location.href = `project.html?id=${repo.name}`;
        });
        container.appendChild(card);
      });
    card.querySelector(".github-link").addEventListener("click", (e) => {
      e.stopPropagation();
    });
  } catch (error) {
    console.log("Github Error:", error);
  }
}

loadProjects();
