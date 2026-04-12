document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     CURRENT PAGE (NAV ACTIVE FIX)
  ========================= */

  const currentPage = window.location.pathname.split("/").pop();

  const navLinks = document.querySelectorAll(".primary ul li a");

  navLinks.forEach(link => {
    const href = link.getAttribute("href").split("/").pop();

    if (href === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
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

  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    lightbox.style.display = "flex";
    updateImage();
  }

  function updateImage() {
    lightboxImg.src = images[currentIndex].src;
    lightboxImg.alt = images[currentIndex].alt;
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

  

});