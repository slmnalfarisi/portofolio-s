import React, { useState } from "react";
import { academicCertificates, courseCertificates } from "../../docs/CertificateData"; // Import data from the certificates file
import "./Certificate.css"; // Make sure to import the CSS
import { useTranslation } from "react-i18next"; // Import useTranslation

const Certificate = () => {
  const { t } = useTranslation(); // Initialize the translation hook
  const [selectedType, setSelectedType] = useState("academic");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get the certificates based on selected type
  const certificates = selectedType === "academic" ? academicCertificates : courseCertificates;

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const openModal = (img) => {
    setCurrentImage(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section>
      <h2 className="section_title" data-aos="zoom-in" data-aos-duration="1300">
        | {t('SERTIFIKAT')} |
      </h2>

      {/* Pilihan Tipe Sertifikat */}
      <div className="category-selector">
        <button
          onClick={() => setSelectedType("academic")}
          className={selectedType === "academic" ? "active" : ""}
        >
          {t('Sertifikat Prestasi')}
        </button>
        <button
          onClick={() => setSelectedType("course")}
          className={selectedType === "course" ? "active" : ""}
        >
          {t('Sertifikat Keterampilan')}
        </button>
      </div>

      <div className="certificate-section">
        <div className="certificate-list">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`certificate-item ${currentIndex === index ? "active" : ""}`}
              onClick={() => handleClick(index)}
            >
              {t(cert.title)} {/* Translate the certificate title */}
            </div>
          ))}
        </div>
        <div
          className="certificate-display"
          onClick={() => openModal(certificates[currentIndex].img)}
        >
          <img src={certificates[currentIndex].img} alt={t('Certificate Image')} />
        </div>
      </div>

      {/* Modal to display the full-screen image */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <img className="modal-content" src={currentImage} alt={t('Certificate Image')} />
          <div className="zoom-icon">{t('Zoomed Project')}</div>
        </div>
      )}
    </section>
  );
};

export default Certificate;
