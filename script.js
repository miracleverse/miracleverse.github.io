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
  const lightboxCounter = document.getElementById("lightbox-counter");
  const lightboxPrev = document.getElementById("lightbox-prev");
  const lightboxNext = document.getElementById("lightbox-next");

  let galleryImages = [];
  let galleryIndex = 0;

  function showImage(index) {
    galleryIndex = (index + galleryImages.length) % galleryImages.length;
    const img = galleryImages[galleryIndex];
    lightboxImg.src = img.currentSrc || img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = img.alt;
    const multi = galleryImages.length > 1;
    lightboxPrev.style.display = multi ? "" : "none";
    lightboxNext.style.display = multi ? "" : "none";
    lightboxCounter.textContent = multi ? `${galleryIndex + 1} / ${galleryImages.length}` : "";
  }

  function openLightbox(images, index) {
    galleryImages = images;
    showImage(index);
    lightbox.classList.add("open");
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightboxImg.src = "";
  }

  document.querySelectorAll(".detail-gallery").forEach((gallery) => {
    const imgs = Array.from(gallery.querySelectorAll("img"));
    imgs.forEach((img, i) => {
      img.addEventListener("click", (e) => {
        e.stopPropagation();
        openLightbox(imgs, i);
      });
    });
  });

  document.getElementById("lightbox-close").addEventListener("click", (e) => {
    e.stopPropagation();
    closeLightbox();
  });
  lightboxPrev.addEventListener("click", (e) => {
    e.stopPropagation();
    showImage(galleryIndex - 1);
  });
  lightboxNext.addEventListener("click", (e) => {
    e.stopPropagation();
    showImage(galleryIndex + 1);
  });
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showImage(galleryIndex - 1);
    if (e.key === "ArrowRight") showImage(galleryIndex + 1);
  });
})();
