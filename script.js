(function () {
  const chips = document.querySelectorAll(".chip");

  function closeAllDetails() {
    document.querySelectorAll(".detail.open").forEach((d) => {
      d.classList.remove("open");
      const card = d.previousElementSibling;
      if (card && card.classList.contains("card")) card.setAttribute("aria-expanded", "false");
    });
  }

  function toggleCard(cardEl) {
    const detail = cardEl.nextElementSibling;
    if (!detail || !detail.classList.contains("detail")) return;
    const wasOpen = detail.classList.contains("open");
    closeAllDetails();
    if (wasOpen) return;
    detail.classList.add("open");
    cardEl.setAttribute("aria-expanded", "true");
  }

  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => toggleCard(card));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleCard(card);
      }
    });
  });

  document.querySelectorAll("[data-close]").forEach((closeBtn) => {
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeAllDetails();
    });
  });

  function applyFilter(filter) {
    document.querySelectorAll(".company-group").forEach((group) => {
      const match = filter === "all" || group.getAttribute("data-company") === filter;
      group.style.display = match ? "" : "none";
    });
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      applyFilter(chip.getAttribute("data-filter"));
    });
  });
})();
