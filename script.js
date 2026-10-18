document.getElementById("year").textContent = new Date().getFullYear();
// Optional enhancement: refresh the featured repo descriptions from GitHub's public API.
// Static cards remain available if the API is unavailable or rate-limited.
fetch("https://api.github.com/users/art70x/repos?sort=updated&per_page=30")
  .then(r => { if (!r.ok) throw new Error("GitHub API unavailable"); return r
      .json(); })
  .then(repos => {
    const featured = ["Plain2TeX", "json-builder", "Vuetrix", "JSONotations"];
    const cards = [...document.querySelectorAll("#projects .project")];
    featured.forEach((name, i) => {
      const repo = repos.find(item => item.name.toLowerCase() === name
        .toLowerCase());
      if (!repo || !cards[i]) return;
      cards[i].href = repo.html_url;
      const p = cards[i].querySelector("p");
      if (repo.description) p.textContent = repo.description;
      const tags = cards[i].querySelector(".tags");
      const language = repo.language;
      if (language && ![...tags.children].some(t => t.textContent ===
          language)) {
        const tag = document.createElement("span");
        tag.className = "tag";
        tag.textContent = language;
        tags.prepend(tag);
      }
    });
  }).catch(() => {});