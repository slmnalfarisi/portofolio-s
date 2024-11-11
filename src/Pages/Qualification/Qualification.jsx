import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Qualification.css";
import { qualificationData } from "../../docs/QualificationData";

const Qualification = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("#education");
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    const contents = document.querySelectorAll(".qualification_content");

    contents.forEach((content) => {
      if (content.id === activeTab.slice(1)) {
        if (isFirstRender) {
          content.style.display = "block";
          content.classList.add("qualification_active");
        } else {
          content.classList.remove("qualification_zoom-out");
          setTimeout(() => {
            content.style.display = "block";
            setTimeout(() => {
              content.classList.add("qualification_active");
            }, 50);
          }, 400);
        }
      } else {
        content.classList.remove("qualification_active");
        if (!isFirstRender) {
          content.classList.add("qualification_zoom-out");
          setTimeout(() => {
            content.style.display = "none";
          }, 400);
        } else {
          content.style.display = "none";
        }
      }
    });

    setIsFirstRender(false);
  }, [activeTab, isFirstRender]);

  const handleTabClick = (target) => {
    setActiveTab(target);
  };

  const renderQualificationData = (data) => {
    return data.map((item, index) => (
      <div className="qualification_data" key={index}>
        {index % 2 === 0 ? (
          <>
            <div>
              <h3 className="qualification_title">{t(item.title)}</h3>
              <span className="qualification_subtitle">{t(item.subtitle)}</span>
              <div className="qualification_calendar">
                <i className="uil uil-calendar-alt"></i>
                {item.calendar}
              </div>
            </div>
            <div>
              <span className="qualification_rounder"></span>
              {index !== data.length - 1 && <span className="qualification_line"></span>}
            </div>
            <div></div>
          </>
        ) : (
          <>
            <div></div>
            <div>
              <span className="qualification_rounder"></span>
              {index !== data.length - 1 && <span className="qualification_line"></span>}
            </div>
            <div>
              <h3 className="qualification_title">{t(item.title)}</h3>
              <span className="qualification_subtitle">{t(item.subtitle)}</span>
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
        | {t("experience")} |
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
            {t("education")}
          </div>
          <div
            className={`qualification_button button--flex ${
              activeTab === "#competition" ? "qualification_active" : ""
            }`}
            onClick={() => handleTabClick("#competition")}
          >
            <i className="uil uil-trophy qualification_icon"></i>
            {t("competition")}
          </div>
        </div>

        <div className="qualification_sections">
          <div className="qualification_content" id="education">
            {renderQualificationData(qualificationData.education)}
          </div>

          <div className="qualification_content" id="competition">
            {renderQualificationData(qualificationData.competition)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
