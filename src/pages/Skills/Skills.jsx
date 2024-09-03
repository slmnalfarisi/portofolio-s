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
                  <img src="/skills/css.svg" alt="" />
                </div>
                <h3 className="skills_name">CSS</h3>
              </div>
              <div className="skill_card">
                <div className="icon_skill_svg">
                  <img src="/skills/javascript.svg" alt="" />
                </div>
                <h3 className="skills_name">JavaScript</h3>
              </div>
              <div className="skill_card">
                <div className="icon_skill_svg">
                  <img src="/skills/typscript.svg" alt="" />
                </div>
                <h3 className="skills_name">TypeScript</h3>
              </div>
              <div className="skill_card">
                <div className="icon_skill_svg">
                  <img src="/skills/threejs.svg" alt="" />
                </div>
                <h3 className="skills_name">Three JS</h3>
              </div>
              <div className="skill_card">
                <div className="icon_skill_svg">
                  <img src="/skills/react.svg" alt="" />
                </div>
                <h3 className="skills_name">React</h3>
              </div>
              <div className="skill_card">
                <div className="icon_skill_svg">
                  <img src="/skills/tailwind.svg" alt="" />
                </div>
                <h3 className="skills_name">Tailwind</h3>
              </div>
              <div className="skill_card">
                <div className="icon_skill_svg">
                  <img src="/skills/php.svg" alt="" />
                </div>
                <h3 className="skills_name">PHP</h3>
              </div>
              <div className="skill_card">
                <div className="icon_skill_svg">
                  <img src="/skills/python.svg" alt="" />
                </div>
                <h3 className="skills_name">Python</h3>
              </div>
              <div className="skill_card">
                <div className="icon_skill_svg">
                  <img src="/skills/django.svg" alt="" />
                </div>
                <h3 className="skills_name">Django</h3>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
