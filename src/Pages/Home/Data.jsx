import React from "react";

const Data = () => {
  return (
    <div className="home_data">
      <h3 className="home_about" data-aos="fade-right" data-aos-duration="2000">
        Hallo, Nama saya
      </h3>
      <h1 className="home_title" data-aos="fade-right" data-aos-duration="2300">
        Reynaldo Yusellino
      </h1>
      <h3
        className="home_subtitle animated-text"
        data-aos="fade-right"
        data-aos-duration="2500"
      >
        <span></span>
      </h3>
      <p
        className="home_description"
        data-aos="fade-right"
        data-aos-duration="2800"
      >
        Saya merupakan seseorang yang suka mempelajari bahasa Pemrograman
        khususnya untuk pengembangan website, dan game. Selain itu saya juga
        antusias terhadap keamanan siber terhadap website.
      </p>
      <a
        href="#contact"
        className="button button--flex"
        data-aos="zoom-in-right"
        data-aos-duration="3000"
      >
        Hubungi Saya<i className="uil uil-message button_icon"></i>
      </a>
    </div>
  );
};

export default Data