import React from "react";
import { useTranslation } from "react-i18next";
import "./About.css";

const About = () => {
  const { t } = useTranslation(); // Menggunakan hook useTranslation

  return (
    <section className="about section" id="about">
      <h2 data-aos="fade-up" data-aos-duration="600" className="section_title">
        | {t('Tentang Saya')} |
      </h2>
      <span className="section_subtitle"></span>

      <div className="about_container container grid">
        <img
          src="/me.png"
          alt=""
          className="about_img"
          data-aos="fade-up"
          data-aos-duration="700"
        />
        <div className="about_data">
          <p
            className="about_description"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            {t("Saya adalah siswa SMKN 46 Jakarta yang dikenal memiliki semangat belajar tinggi dan rasa ingin tahu yang mendalam terhadap dunia teknologi. Saya sangat antusias dalam mengeksplorasi berbagai aspek pemrograman, mulai dari pengembangan website, aplikasi, hingga game. Dengan tekad untuk terus berkembang, saya berkomitmen untuk selalu mengikuti tren dan inovasi terbaru di bidang teknologi, sehingga dapat berkontribusi secara maksimal di masa depan.")}
          </p>

          <div className="about_buttons">
            <a
              download=""
              href="/pdf/CV_Muhammad Salman AL Farisi.pdf"
              className="about_button button button--flex"
              data-aos="fade-up"
              data-aos-duration="900"
              id="down-cv"
            >
              {t("Download CV")}<i className="uil uil-download-alt button_icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
