const githubOwner = "behnamUix";

const params = new URLSearchParams(window.location.search);
const repoName = params.get("id");

async function loadProject() {
  if (!repoName) return;

  try {
    const response = await fetch(
      `https://api.github.com/repos/${githubOwner}/${repoName}`,
      {
        headers: {
          Accept: "application/vnd.github.mercy-preview+json",
        },
      },
    );

    if (!response.ok) {
      throw new Error("Project not found");
    }

    const project = await response.json();

    console.log(project);

    document.querySelector("#project-title").textContent = project.name;

    document.querySelector("#project-description").textContent =
      project.description ?? "Android Project";

    document.querySelector("#project-language").textContent =
      project.language ?? "Code";

    document.querySelector("#project-link").href = project.html_url;

    document.querySelector("#stars").textContent =
      `⭐ ${project.stargazers_count}`;

    document.querySelector("#forks").textContent = `🍴 ${project.forks_count}`;

    document.querySelector("#updated").textContent =
      `📅 ${new Date(project.updated_at).toLocaleDateString("fa-IR")}`;

    /* ==========================
       Topics
    ========================== */

    const techContainer = document.querySelector("#project-tech");

    techContainer.innerHTML = "";

    if (project.topics && project.topics.length > 0) {
      project.topics.forEach((topic) => {
        const span = document.createElement("span");

        span.textContent = topic;

        techContainer.appendChild(span);
      });
    } else {
      techContainer.innerHTML = "<span>Topic ثبت نشده است</span>";
    }

    await loadReadme(repoName);
  } catch (error) {
    console.log("Project Error:", error);
  }
}

async function loadReadme(repo) {
  const container = document.querySelector("#readme-content");

  try {
    const response = await fetch(
      `https://api.github.com/repos/${githubOwner}/${repo}/readme`,
    );

    if (!response.ok) {
      throw new Error("README not found");
    }

    const data = await response.json();

    const binary = atob(data.content);

    const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));

    const markdown = new TextDecoder("utf-8").decode(bytes);

    container.innerHTML = marked.parse(markdown);
  } catch (error) {
    container.innerHTML = "README موجود نیست";

    console.log(error);
  }
}

loadProject();
