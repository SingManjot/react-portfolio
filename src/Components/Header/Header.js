import React from "react";
import Typical from "react-typical";
import profileImg from "../../assets/me_updated.jpg";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-container" id="head">
      {/* header content */}
      <div className="header-content">
        <h1>Hey! I Am</h1>
        <h2 className="fullname">Manjot Singh Kandhari</h2>
        <h2>
          I'm a {""}
          <Typical
            steps={[
              "Full Stack Developer 🚀",
              1000,
              "Frontend Developer ✅",
              1000,
              "Backend Developer 🗄️",
              1000,
              "React Developer ⚛️",
              1000,
              "ML Model Developer 💻",
              1000,
              "Cloud Engineer ☁️",
              1000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>
        <p>
          I'm delighted to introduce myself as an optimistic, out-of-the-box
          thinking, and highly motivated fourth-year student at TIET. With a
          passion for innovation and a drive to make a positive impact, I
          eagerly embrace every opportunity to learn and grow both personally
          and professionally.
        </p>
        {/* payment links */}
        <div className="header-payment-container">
          <button>Hire Me</button>
          <i className="fa-brands fa-paypal"></i>
          <i class="fa-brands fa-cc-visa"></i>
          <i class="fa-brands fa-cc-mastercard"></i>
          <i class="fa-brands fa-cc-amex"></i>
        </div>
      </div>
      {/* Image container */}
      <div className="profile-img-container">
        <img src={profileImg} alt="" />
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
    </div>
  );
};

export default Header;
