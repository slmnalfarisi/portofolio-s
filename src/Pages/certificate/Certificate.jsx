import React, { useState } from "react";
import "./Certificate.css"; // Pastikan untuk mengimpor CSS

const Certificate = () => {
  const [selectedType, setSelectedType] = useState("academic"); // Tipe sertifikat yang dipilih

  const academicCertificates = [
    {
      title: "IT Software Solution for Business - LKS Tingkat Kota Jakarta Timur 2023",
      img: "/certificate/IITC.PNG",
    },
    {
      title: "Web Development Technifest",
      img: "https://via.placeholder.com/500x600?text=Certificate+3",
    },
  ];

  const courseCertificates = [
    {
      title: "Cloud Computing Club Competition - Regional DKI Jakarta",
      img: "/project/enheal.png",
    },
    {
      title: "IT Software Solution for Business - LKS Tingkat Wilayah 1 Jakarta Timur 2022",
      img: "https://via.placeholder.com/500x600?text=Certificate+4",
    },
  ];

  const certificates = selectedType === "academic" ? academicCertificates : courseCertificates;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
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
        <div className="certificate-display">
          <img src={certificates[currentIndex].img} alt="Certificate" />
        </div>
      </div>
    </section>
  );
};

export default Certificate;
