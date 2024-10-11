import React, { useState } from "react";
import { academicCertificates, courseCertificates } from "../../docs/CertificateData"; // Mengimpor data dari file certificates
import "./Certificate.css"; // Pastikan untuk mengimpor CSS

const Certificate = () => {
  const [selectedType, setSelectedType] = useState("academic");
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [currentImage, setCurrentImage] = useState(""); 
  const [currentIndex, setCurrentIndex] = useState(0); 

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
        | SERTIFIKAT |
      </h2>

      {/* Pilihan Tipe Sertifikat */}
      <div className="category-selector">
        <button
          onClick={() => setSelectedType("academic")}
          className={selectedType === "academic" ? "active" : ""}
        >
          Sertifikat Akademik
        </button>
        <button
          onClick={() => setSelectedType("course")}
          className={selectedType === "course" ? "active" : ""}
        >
          Sertifikat Kursus
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
              {cert.title}
            </div>
          ))}
        </div>
        <div className="certificate-display" onClick={() => openModal(certificates[currentIndex].img)}>
          <img src={certificates[currentIndex].img} alt="Certificate" />
        </div>
      </div>

      {/* Modal untuk Menampilkan Gambar Penuh Layar */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>&times;</span>
          <img className="modal-content" src={currentImage} alt="Certificate" />
        </div>
      )}
    </section>
  );
};

export default Certificate;
