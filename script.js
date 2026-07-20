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

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");

  function openLightbox(img) {
    lightboxImg.src = img.currentSrc || img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = img.alt;
    lightbox.classList.add("open");
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightboxImg.src = "";
  }

  document.querySelectorAll(".shot img").forEach((img) => {
    img.addEventListener("click", (e) => {
      e.stopPropagation();
      openLightbox(img);
    });
  });

  document.getElementById("lightbox-close").addEventListener("click", (e) => {
    e.stopPropagation();
    closeLightbox();
  });
  lightbox.addEventListener("click", closeLightbox);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
})();
