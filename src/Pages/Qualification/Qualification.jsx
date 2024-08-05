import React, { useState, useEffect } from 'react';
import "./Qualification.css"

const Qualification = () => {
  const [activeTab, setActiveTab] = useState('#education');

  useEffect(() => {
    const contents = document.querySelectorAll('.qualification_content');
    contents.forEach((content) => {
      if (content.id === activeTab.slice(1)) {
        content.style.display = 'block';
        setTimeout(() => {
          content.classList.add('qualification_active');
        }, 50);
      } else {
        content.style.display = 'none';
        content.classList.remove('qualification_active');
      }
    });
  }, [activeTab]);

  const handleTabClick = (target) => {
    setActiveTab(target);
  };

  return (
    <section className="qualification section" id="experience">
      <h2 className="section_title" data-aos="zoom-in" data-aos-duration="3000">
        | PENGALAMAN |
      </h2>
      <span className="section_subtitle"></span>

      <div className="qualification_container container" data-aos="zoom-in" data-aos-duration="3000">
        <div className="qualification_tabs">
          <div
            className={`qualification_button button--flex ${activeTab === '#education' ? 'qualification_active' : ''}`}
            data-target="#education"
            onClick={() => handleTabClick('#education')}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Pendidikan
          </div>
          <div
            className={`qualification_button button--flex ${activeTab === '#work' ? 'qualification_active' : ''}`}
            data-target="#work"
            onClick={() => handleTabClick('#work')}
          >
            <i className="uil uil-trophy qualification_icon"></i>
            Kompetisi
          </div>
        </div>

        <div className="qualification_sections">
          <div className="qualification_content" data-content id="education">
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

          <div className="qualification_content" data-content id="work">
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Cloud Computing Club Competition ~ Website Statis</h3>
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
            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">JakBee Competition ~ Short Movie</h3>
                <span className="qualification_subtitle">Grand Finalis</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2023
                </div>
              </div>
            </div>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Cloud Computing Club Competition ~ Website Statis</h3>
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
            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <h3 className="qualification_title">Lomba Kompetensi Siswa (LKS) ~ Cyber Security</h3>
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
