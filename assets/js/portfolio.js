document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     NAV ACTIVE FIX
  ========================= */

  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".primary ul li a");

  navLinks.forEach(link => {
    const href = link.getAttribute("href").split("/").pop();

    link.classList.remove("active");

    if (href === currentPage && link.href === window.location.href) {
      link.classList.add("active");
    }
  });


  /* =========================
     LIGHTBOX (SIMPLE VERSION)
  ========================= */

  const images = document.querySelectorAll("#gallery img, .resume-photo");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("close");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const caption = document.getElementById("lightbox-caption");
  const counter = document.getElementById("lightbox-counter");

  let currentIndex = 0;
  let scale = 1;


  function openLightbox(index) {
    currentIndex = index;
    lightbox.style.display = "flex";
    document.body.style.overflow = "hidden";
    updateImage();
  }

  function closeLightbox() {
    lightbox.style.display = "none";
    document.body.style.overflow = "";
  }

  function updateImage() {
    scale = 1;
    lightboxImg.style.transform = `scale(1)`;

    lightboxImg.src = images[currentIndex].src;
    lightboxImg.alt = images[currentIndex].alt;

    const fig = images[currentIndex].closest("figure");
    const text = fig?.querySelector("figcaption")?.innerText || "";

    caption.textContent = text;
    counter.textContent = `${currentIndex + 1} / ${images.length}`;
  }


  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  }


  /* =========================
     CLICK IMAGES
  ========================= */

  images.forEach((img, index) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => openLightbox(index));
  });


  /* =========================
     BUTTONS
  ========================= */

  closeBtn.addEventListener("click", closeLightbox);
  nextBtn.addEventListener("click", nextImage);
  prevBtn.addEventListener("click", prevImage);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });


  /* =========================
     KEYBOARD
  ========================= */

  document.addEventListener("keydown", (e) => {
    if (lightbox.style.display !== "flex") return;

    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  });


  /* =========================
     SIMPLE ZOOM (WHEEL ONLY)
  ========================= */

  lightboxImg.addEventListener("wheel", (e) => {
    e.preventDefault();

    if (e.deltaY < 0) {
      scale += 0.2;
    } else {
      scale -= 0.2;
    }

    scale = Math.max(1, Math.min(scale, 4));

    lightboxImg.style.transform = `scale(${scale})`;
  }, { passive: false });


  /* =========================
     CLICK TO TOGGLE ZOOM
  ========================= */

  lightboxImg.addEventListener("click", () => {
    scale = (scale === 1) ? 2 : 1;
    lightboxImg.style.transform = `scale(${scale})`;
  });

});