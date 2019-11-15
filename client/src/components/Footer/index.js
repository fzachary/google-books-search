import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer bg-dark py-3 text-center">
        <div className="container">
            <a href="https://github.com/fzachary">
                <span className="fab fa-github" />
            </a>
            <span>
                Frank Zachary 2019
            </span>                
        </div>
    </footer>
  );
}

export default Footer;