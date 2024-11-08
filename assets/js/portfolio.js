// portfolio.js

// Header content
const headerContent = `
  <header class="header">
    <a href="../index.html">
      <img src="../images/IMG_1819-EDIT.jpg" alt="PFP of Auriel" class="Profile" />
    </a>
    <nav class="primary">
      <ul>
        <li><a href="../index.html#about">Profile</a></li>
        <li><a href="resume/index.html">Resume</a></li>
        <li><a href="../index.html#skills">Skills</a></li>
        <li><a href="../index.html#education">Education</a></li>
        <li><a href="../index.html#Accomplishments">Accomplishments</a></li>
        <li><a href="../index.html#cover-letter">Cover Letter</a></li>
        <li><a href="../index.html#contact">Contact</a></li>
        <li><a href="../index.html#work-examples">Work Examples</a></li>
      </ul>
    </nav>
  </header>
`;

// Footer content
const footerContent = `
  <footer id="colophon" role="contentinfo">
    <h6>&copy; 2024 Auriel Del Carmen</h6>
    <h6>Portfolio</h6>
  </footer>
`;

// Insert the header content into the placeholder with the id "header-container"
document.getElementById("header-container").innerHTML = headerContent;

// Insert the footer content into the placeholder with the id "footer-container"
document.getElementById("footer-container").innerHTML = footerContent;
