document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     CURRENT PAGE (NAV ACTIVE FIX)
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
     LIGHTBOX FUNCTIONALITY
  ========================= */

  const images = document.querySelectorAll("#gallery img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("close");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const caption = document.getElementById("lightbox-caption");

  let currentIndex = 0;
  let zoomLevel = 1;

  function openLightbox(index) {
    currentIndex = index;
    lightbox.style.display = "flex";
    updateImage();
  }

 function updateImage() {
  zoomLevel = 1;
  lightboxImg.style.transform = "scale(1)";

  lightboxImg.src = images[currentIndex].src;
  lightboxImg.alt = images[currentIndex].alt;

  const fig = images[currentIndex].closest("figure");
  const text = fig.querySelector("figcaption").innerText;

  caption.textContent = text;
  }

  function closeLightbox() {
    lightbox.style.display = "none";
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  }

  // Open image on click
  images.forEach((img, index) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => openLightbox(index));
  });

  // Buttons
  closeBtn.addEventListener("click", closeLightbox);
  nextBtn.addEventListener("click", nextImage);
  prevBtn.addEventListener("click", prevImage);

  // Click outside image closes
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard controls
  document.addEventListener("keydown", (e) => {
    if (lightbox.style.display !== "flex") return;

    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  });

  lightboxImg.addEventListener("wheel", (e) => {
  e.preventDefault();

  if (e.deltaY < 0) {
    zoomLevel += 0.1; // zoom in
  } else {
    zoomLevel -= 0.1; // zoom out
  }

  zoomLevel = Math.max(1, Math.min(zoomLevel, 3)); // limit zoom (1x–3x)

  lightboxImg.style.transform = `scale(${zoomLevel})`;
});

lightboxImg.addEventListener("click", () => {
  zoomLevel = zoomLevel === 1 ? 2 : 1;
  lightboxImg.style.transform = `scale(${zoomLevel})`;
});

});