import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <div className="services-container" id="services">
      <div className="services-list-container">
        {/* desc */}
        <div className="services-desc-container">
          <h1>
            My Awesome <span>Services</span>
          </h1>
          <p>
            As a versatile professional with expertise in web development, AI/ML
            model development, and Linux/Ubuntu administration, I offer a
            comprehensive range of services tailored to meet the unique needs of
            your projects and business objectives. Whether you require a
            captivating web application, intelligent machine learning models, or
            robust Linux server management, I am committed to providing
            efficient, scalable, and reliable services that drive success.
          </p>
          <button>Hire Me</button>
        </div>
        {/* item */}
        <div className="service-item-container">
          <div className="services-item">
            <i className="fa-solid fa-code"></i>
            <div className="item-desc">
              <h3>Web Development</h3>
              <p>
                I'm proficient in HTML, CSS, and JavaScript, and have hands-on
                experience with popular frameworks like React.js, allowing me to
                create dynamic and responsive user interfaces. Moreover, I'm
                well-versed in server-side development using Node.js and
                Express.js, and I can effectively integrate databases (e.g.,
                MongoDB, MySQL) to store and manage application data securely.
              </p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-desktop"></i>
            <div className="item-desc">
              <h3>AI/ML Model Development</h3>
              <p>
                As an accomplished AI/ML model developer, I have a solid
                background in machine learning algorithms and extensive
                experience with Python, which is my primary language for model
                development. I have successfully designed and trained various
                models using popular libraries like TensorFlow, PyTorch, and
                scikit-learn. My focus areas include computer vision, where I've
                built image recognition and object detection systems.
              </p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-brands fa-linux"></i>
            <div className="item-desc">
              <h3>Linux Administration</h3>
              <p>
                Having worked with Linux-based systems, particularly Ubuntu, I
                possess skills in Linux administration and command-line
                operations. I am adept at setting up and configuring servers,
                managing software packages using package managers like apt, and
                maintaining system security through user management and
                permissions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
