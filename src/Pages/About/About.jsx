import React from "react";
import "./About.css"

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 data-aos="zoom-in" data-aos-duration="3000" className="section_title">
        | TENTANG SAYA |
      </h2>
      <span className="section_subtitle"></span>

      <div className="about_container container grid">
        <img
          src="/me.png"
          alt=""
          className="about_img"
          data-aos="fade-right"
          data-aos-duration="3000"
        />
        <div className="about_data">
          <p
            className="about_description"
            data-aos="fade-right"
            data-aos-duration="2500"
          >
            Saya adalah seseorang pelajar dari SMKN 46 Jakarta yang awalnya
            masuk ke dalam dunia IT tidak memiliki basic Komputer, namun saya
            selalu berusaha untuk belajar sehingga dapat mengetahui bahkan
            memahami alur dari suatu pemrograman. Saat ini saya suka mempelajari
            bahasa pemrograman yang baru. Baik dalam pengembangan suatu website
            maupun suatu game 2D.
          </p>

          <div className="about_buttons">
            <a
              download=""
              href="/pdf/CV.pdf"
              className="about_button button button--flex"
              data-aos="zoom-in"
              data-aos-duration="3000"
              id="down-cv"
            >
              Download CV<i className="uil uil-download-alt button_icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
