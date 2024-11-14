// Get the current page's filename
const currentPage = window.location.pathname.split("/").pop();

// Select all navigation links
const navLinks = document.querySelectorAll(".primary ul li a");

// Loop through each link
navLinks.forEach(link => {
  // Remove the active class from all links
  link.classList.remove("active");
  
  // Add the active class to the link that matches the current page
  if (link.getAttribute("href").includes(currentPage)) {
    link.classList.add("active");
  }
});


