import React, { useState } from "react";
import "./Project.css";
import projectData from "../../docs/ProjectData";
import { useTranslation } from "react-i18next";

const Project = () => {
  const { t, i18n } = useTranslation();
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomOut, setZoomOut] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadMoreProjects = () => {
    setVisibleProjects((prevVisible) => prevVisible + 2);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    setZoomOut(false);
  };

  const closeModal = () => {
    setZoomOut(true);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 500);
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains("modal")) {
      closeModal();
    }
  };

  return (
    <section className="portofolio section" id="portofolio">
      <h2 className="section_title" data-aos="zoom-in" data-aos-duration="1400">
        | {t("PROJECT")} |
      </h2>

      <div className="portofolio_container container">
        {projectData.slice(0, visibleProjects).map((project, index) => (
          <div
            key={index}
            className="portofolio_card"
            data-aos="zoom-in"
            data-aos-duration="1400"
            onClick={() => openModal(project.image)}
          >
            <img
              src={project.image}
              alt={t(project.title[i18n.language])}
              className="portofolio_image"
            />
            {/* Magnifying Glass Icon */}
            <i className="uil uil-search-plus magnifying_icon"></i>

            <div className="portofolio_tools">
              {project.tools.map((tool, i) => (
                <span key={i} className="tool">
                  {tool}
                </span>
              ))}
            </div>
            <h3 className="portofolio_title">
              {t(project.title[i18n.language])}
            </h3>
            <p className="portofolio_subtitle">
              {t(project.description[i18n.language])}
            </p>
            <div className="portofolio_buttons">
              {project.demoLink && (
                <a href={project.demoLink}>
                  <div className="portofolio_button button">
                    {t("Demo")}{" "}
                    <i className="uil uil-arrow-right portfolio_icon"></i>
                  </div>
                </a>
              )}
              {!project.tools.includes("WordPress") && (
                <a href={project.sourceLink}>
                  <div className="portofolio_button button">
                    {t("")}{" "}
                    <i className="uil uil-arrow-right portfolio_icon"></i>
                  </div>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {visibleProjects < projectData.length && (
        <div className="load_more_container">
          <button onClick={loadMoreProjects} className="load_more_button">
            {t("Load More")}
          </button>
        </div>
      )}

      {/* Modal Section */}
      {isModalOpen && (
        <div className="modal" onClick={handleModalClick}>
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <img
            src={selectedImage}
            alt={t("Zoomed Project")}
            className={`modal_content ${zoomOut ? "zoom-out" : "zoom-in"}`}
          />
        </div>
      )}
    </section>
  );
};

export default Project;
