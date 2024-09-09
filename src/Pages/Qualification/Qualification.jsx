import React, { useState, useEffect } from "react";
import "./Qualification.css";
import { qualificationData } from "../../docs/QualificationData";

const Qualification = () => {
  const [activeTab, setActiveTab] = useState("#education");

  useEffect(() => {
    const contents = document.querySelectorAll(".qualification_content");
    contents.forEach((content) => {
      if (content.id === activeTab.slice(1)) {
        content.style.display = "block";
        setTimeout(() => {
          content.classList.add("qualification_active");
        }, 50);
      } else {
        content.style.display = "none";
        content.classList.remove("qualification_active");
      }
    });
  }, [activeTab]);

  const handleTabClick = (target) => {
    setActiveTab(target);
  };

  const renderQualificationData = (data) => {
    return data.map((item, index) => (
      <div className="qualification_data" key={index}>
        {/* Jika index ganjil, tampilkan data di kiri */}
        {index % 2 === 0 ? (
          <>
            <div>
              <h3 className="qualification_title">{item.title}</h3>
              <span className="qualification_subtitle">{item.subtitle}</span>
              <div className="qualification_calendar">
                <i className="uil uil-calendar-alt"></i>
                {item.calendar}
              </div>
            </div>
            <div>
              <span className="qualification_rounder"></span>
              {index !== data.length - 1 && <span className="qualification_line"></span>}
            </div>
            <div></div> {/* Kosongkan kolom kanan */}
          </>
        ) : (
          <>
            <div></div> {/* Kosongkan kolom kiri */}
            <div>
              <span className="qualification_rounder"></span>
              {index !== data.length - 1 && <span className="qualification_line"></span>}
            </div>
            <div>
              <h3 className="qualification_title">{item.title}</h3>
              <span className="qualification_subtitle">{item.subtitle}</span>
              <div className="qualification_calendar">
                <i className="uil uil-calendar-alt"></i>
                {item.calendar}
              </div>
            </div>
          </>
        )}
      </div>
    ));
  };

  return (
    <section className="qualification section" id="experience">
      <h2 className="section_title" data-aos="zoom-in" data-aos-duration="1400">
        | PENGALAMAN |
      </h2>

      <div
        className="qualification_container container"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <div className="qualification_tabs">
          <div
            className={`qualification_button button--flex ${
              activeTab === "#education" ? "qualification_active" : ""
            }`}
            onClick={() => handleTabClick("#education")}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Pendidikan
          </div>
          <div
            className={`qualification_button button--flex ${
              activeTab === "#work" ? "qualification_active" : ""
            }`}
            onClick={() => handleTabClick("#work")}
          >
            <i className="uil uil-trophy qualification_icon"></i>
            Kompetisi
          </div>
        </div>

        <div className="qualification_sections">
          <div className="qualification_content" id="education">
            {renderQualificationData(qualificationData.education)}
          </div>

          <div className="qualification_content" id="work">
            {renderQualificationData(qualificationData.work)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
