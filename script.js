(function () {
  const container = document.getElementById("case-container");
  const chips = document.querySelectorAll(".chip");
  const companyOrder = ["visotsky", "appcake", "heartcore", "rosneft"];

  function esc(str) {
    const d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
  }

  function cardHTML(c) {
    return `
      <div class="card" data-id="${c.id}" tabindex="0" role="button" aria-expanded="false">
        <div class="card-tag">${esc(c.tag)}</div>
        <div class="card-title">${esc(c.title)}</div>
        <div class="card-hook">${esc(c.hook)}</div>
        <div class="card-foot">
          <span class="card-scale">${esc(c.scale)}</span>
          <span class="card-expand">Read brief →</span>
        </div>
      </div>`;
  }

  function detailHTML(c) {
    return `
      <div class="detail" data-detail-for="${c.id}">
        <div class="detail-grid">
          <div class="detail-block"><h4>Context</h4><p>${esc(c.context)}</p></div>
          <div class="detail-block"><h4>Role</h4><p>${esc(c.role)}</p></div>
          <div class="detail-block"><h4>Impact</h4><p>${esc(c.impact)}</p></div>
        </div>
        <div class="detail-close" data-close="${c.id}">← Close</div>
      </div>`;
  }

  function render(filter) {
    container.innerHTML = "";
    companyOrder.forEach((key) => {
      const items = CASES.filter((c) => c.company === key);
      if (!items.length) return;
      if (filter !== "all" && filter !== key) return;

      const meta = COMPANIES[key];
      const group = document.createElement("div");
      group.className = "company-group";
      group.innerHTML = `
        <div class="company-head">
          <div class="company-name">${esc(meta.name)}</div>
          <div class="company-role">${esc(meta.role)}</div>
          <div class="company-dates">${esc(meta.dates)}</div>
        </div>
        <div class="grid" data-group="${key}"></div>
      `;
      container.appendChild(group);
      const grid = group.querySelector(".grid");
      items.forEach((c) => {
        grid.insertAdjacentHTML("beforeend", cardHTML(c));
      });
    });
    attachHandlers();
  }

  function closeAllDetails() {
    document.querySelectorAll(".detail").forEach((d) => d.remove());
    document.querySelectorAll(".card").forEach((c) => c.setAttribute("aria-expanded", "false"));
  }

  function toggleCard(cardEl) {
    const id = cardEl.getAttribute("data-id");
    const existing = document.querySelector(`.detail[data-detail-for="${id}"]`);
    const wasOpen = !!existing;
    closeAllDetails();
    if (wasOpen) return;

    const c = CASES.find((x) => x.id === id);
    cardEl.insertAdjacentHTML("afterend", detailHTML(c));
    cardEl.setAttribute("aria-expanded", "true");
    const panel = cardEl.parentElement.querySelector(`.detail[data-detail-for="${id}"]`);
    requestAnimationFrame(() => panel.classList.add("open"));
    panel.querySelector("[data-close]").addEventListener("click", (e) => {
      e.stopPropagation();
      closeAllDetails();
    });
  }

  function attachHandlers() {
    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", () => toggleCard(card));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleCard(card);
        }
      });
    });
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      render(chip.getAttribute("data-filter"));
    });
  });

  render("all");
})();
