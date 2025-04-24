import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <p>
        &copy; Jim Kennedy 2025 -{" "}
        <a
          href="https://jimkennedy.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#4d9bdf" }}
        >
          My Portfolio
        </a>
      </p>
    </footer>
  );
}

export default Footer;
