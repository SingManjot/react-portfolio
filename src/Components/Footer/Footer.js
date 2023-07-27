import React from "react";
import logo from "../../assets/logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      {/* copyright */}
      <div className="footer-cpyright">
        <p>© 2023 Manjot Singh Kandhari. All Right reserved</p>
      </div>
      {/* social */}
      <ul className="footer-social-media">
        <li>
          <a href="https://www.facebook.com/profile.php?id=100004447171340">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/manjott.___/">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/SingManjot">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/manjot-singh-216bbb1b5">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
