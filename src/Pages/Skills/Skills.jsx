import React from "react";
import "./Skills.css";
import skillsData from "../../docs/SkillsData";

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
            <div className="skills_list grid"  data-aos="zoom-in" data-aos-duration="1200">
              {skillsData.map((skill, index) => (
                <div className="skill_card" key={index}>
                  <div className="icon_skill_svg">
                    <img src={skill.icon} alt={skill.name} />
                  </div>
                  <h3 className="skills_name">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
