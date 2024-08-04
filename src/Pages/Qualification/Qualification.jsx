import React from 'react';
import "./Qualification.css"

const Qualification = () => {
  return (
    <section className="qualification section" id="experience">
      <h2 className="section_title" data-aos="zoom-in" data-aos-duration="3000">
        | PENGALAMAN |
      </h2>
      <span className="section_subtitle"></span>

      <div
        className="qualification_container container"
        data-aos="zoom-in"
        data-aos-duration="3000"
      >
        <div className="qualification_tabs">
          <div
            className="qualification_button button--flex qualification_active"
            data-target="#education"
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Pendidikan
          </div>
          <div className="qualification_button button--flex" data-target="#work">
            <i className="uil uil-trophy qualification_icon"></i>
            Kompetisi
          </div>
        </div>

        <div className="qualification_sections">
          {/* QUALIFICATION CONTENT 1 STARTS */}
          <div
            className="qualification_content qualification_active"
            data-content
            id="education"
          >
            {/* QUALIFICATION 1 */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Sekolah Dasar</h3>
                <span className="qualification_subtitle">SDN 02 SUMBERJAYA</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2013-2019
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            {/* QUALIFICATION 2 */}
            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Sekolah Menengah Pertama</h3>
                <span className="qualification_subtitle">SMPN 11 TAMBUN SELATAN</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2019-2022
                </div>
              </div>
            </div>
            {/* QUALIFICATION 3 */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Sekolah Menengah Kejuruan</h3>
                <span className="qualification_subtitle">SMKN 46 JAKARTA</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2022-2025
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
              </div>
            </div>
          </div>

          {/* QUALIFICATION CONTENT 2 STARTS */}
          <div className="qualification_content" data-content id="work">
            {/* QUALIFICATION 1 */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Cloud Computing Club Competition ~ Website Statis
                </h3>
                <span className="qualification_subtitle">Peserta</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2022
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            {/* QUALIFICATION 2 */}
            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">
                  JakBee Competition ~ Short Movie
                </h3>
                <span className="qualification_subtitle">Grand Finalis</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2023
                </div>
              </div>
            </div>
            {/* QUALIFICATION 3 */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Cloud Computing Club Competition ~ Website Statis
                </h3>
                <span className="qualification_subtitle">Juara 2 & Best Desain</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2024
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            {/* QUALIFICATION 4 */}
            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                {/* <span className="qualification_line"></span> */}
              </div>

              <div>
                <h3 className="qualification_title">
                  Lomba Kompetensi Siswa (LKS) ~ Cyber Security
                </h3>
                <span className="qualification_subtitle">Juara Harapan III</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
