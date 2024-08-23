import React from "react";
import "./Skills.css"

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title" data-aos="zoom-in" data-aos-duration="1200">
        | KEAHLIAN |
      </h2>
      <span className="section_subtitle"></span>

      <div
        className="skills_container container grid"
        data-aos="zoom-in"
        data-aos-duration="1200"
      >
        <div>
          <div className="skills_content">
            <div
              className="skills_list grid"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="skill_card">
                <div className="icon_skill_svg">
                  <img src="/skills/css-3-svgrepo-com.svg" alt="" />
                </div>
                <h3 className="skills_name">CSS</h3>
              </div>
              <div className="skill_card">
                <div className="icon_skill_svg">
                  <img src="/skills/css-3-svgrepo-com.svg" alt="" />
                </div>
                <h3 className="skills_name">CSS</h3>
              </div>
              <div className="skill_card">
                <div className="icon_skill_svg">
                  <img src="/skills/css-3-svgrepo-com.svg" alt="" />
                </div>
                <h3 className="skills_name">CSS</h3>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
