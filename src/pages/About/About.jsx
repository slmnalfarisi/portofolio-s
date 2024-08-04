import React from "react";

const About = () => {
  return (
    <section class="about section" id="about">
      <h2 data-aos="zoom-in" data-aos-duration="3000" class="section_title">
        | TENTANG SAYA |
      </h2>
      <span class="section_subtitle"></span>

      <div class="about_container container grid">
        <img
          src="/me.png"
          alt=""
          class="about_img"
          data-aos="fade-right"
          data-aos-duration="3000"
        />
        <div class="about_data">
          <p
            class="about_description"
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

          <div class="about_buttons">
            <a
              download=""
              href="/pdf/CV.pdf"
              class="about_button button button--flex"
              data-aos="zoom-in"
              data-aos-duration="3000"
              id="down-cv"
            >
              Download CV<i class="uil uil-download-alt button_icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
