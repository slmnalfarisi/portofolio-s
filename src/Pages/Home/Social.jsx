import React from "react";

const Social = () => {
  return (
    <div className="home_social">
      <a
        href="https://www.linkedin.com/in/reynaldo-yusellino-564724270"
        target="_blank"
        className="home_social-icon"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>
      <a
        href="https://www.instagram.com/rynldysllino"
        target="_blank"
        className="home_social-icon"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a
        href="https://github.com/reynaldo0"
        target="_blank"
        className="home_social-icon"
        data-aos="zoom-in"
        data-aos-duration="3000"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social