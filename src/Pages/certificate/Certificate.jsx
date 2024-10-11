import React, { useState } from "react";
import "./Certificate.css"; // Pastikan untuk mengimpor CSS

const Certificate = () => {
  const certificates = {
    academic: [
      {
        title: "Sertifikat Akademik 1 - Nama Universitas",
        img: "/project/academic1.png",
      },
      {
        title: "Sertifikat Akademik 2 - Nama Universitas",
        img: "/project/academic2.png",
      },
    ],
    courses: [
      {
        title: "IT Software Solution for Business - LKS Tingkat Kota Jakarta Timur 2023",
        img: "/project/artem.png",
      },
      {
        title: "Cloud Computing Club Competition - Regional DKI Jakarta",
        img: "/project/enheal.png",
      },
      {
        title: "Web Development Technifest",
        img: "https://via.placeholder.com/500x600?text=Certificate+3",
      },
      {
        title: "IT Software Solution for Business - LKS Tingkat Wilayah 1 Jakarta Timur 2022",
        img: "https://via.placeholder.com/500x600?text=Certificate+4",
      },
    ],
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("courses");

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentIndex(0); // Reset index saat kategori berubah
  };

  return (
    <section>
      <h2 className="section_title" data-aos="zoom-in" data-aos-duration="1300">
        | SERTIFIKAT |
      </h2>

      {/* Kategori Selector */}
      <div className="category-selector">
        <button
          className={selectedCategory === "academic" ? "active" : ""}
          onClick={() => handleCategoryChange("academic")}
        >
          Sertifikat Akademik
        </button>
        <button
          className={selectedCategory === "courses" ? "active" : ""}
          onClick={() => handleCategoryChange("courses")}
        >
          Sertifikat Kursus
        </button>
      </div>

      <div className="certificate-section">
        <div className="certificate-list">
          {certificates[selectedCategory].map((cert, index) => (
            <div
              key={index}
              className={`certificate-item ${
                currentIndex === index ? "active" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              {cert.title}
            </div>
          ))}
        </div>
        <div className="certificate-display">
          <img src={certificates[selectedCategory][currentIndex].img} alt="Certificate" />
        </div>
      </div>
    </section>
  );
};

export default Certificate;
