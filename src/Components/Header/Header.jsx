import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";
import ScrollHeader from "../Models/ScrollHeader/ScrollHeader";
import ThemeToggle from "../Models/ThemeToggle/ThemeToggle";

export const Header = () => {
  ScrollHeader();
  const { t, i18n } = useTranslation();
  const [isLanguageOpen, setLanguageOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const changeLanguage = (lng, e) => {
    e.preventDefault(); // Prevent the page from scrolling to the top
    i18n.changeLanguage(lng);
    setLanguageOpen(false); // Close dropdown after selection
  };

  const currentLang = i18n.language === "id" ? "ID" : "EN";

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    if (isMenuOpen) setLanguageOpen(false); // Close language dropdown when menu is opened
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav_logo reyname">
          Reynaldo
        </a>

        <div className={`nav_menu ${isMenuOpen ? "show-menu" : ""}`} id="nav-menu">
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#home" className="nav_link active-link">
                <i className="uil uil-estate nav_icon"></i> {t('Beranda')}
              </a>
            </li>
            <li className="nav_item">
              <a href="#about" className="nav_link">
                <i className="uil uil-user nav_icon"></i> {t('Tentang')}
              </a>
            </li>
            <li className="nav_item">
              <a href="#skills" className="nav_link">
                <i className="uil uil-file-alt nav_icon"></i> {t('Keahlian')}
              </a>
            </li>
            <li className="nav_item">
              <a href="#experience" className="nav_link">
                <i className="uil uil-envelope-edit nav_icon"></i> {t('Pengalaman')}
              </a>
            </li>
            <li className="nav_item">
              <a href="#portofolio" className="nav_link">
                <i className="uil uil-scenery nav_icon"></i> {t('Project')}
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav_close" id="nav-close" onClick={toggleMenu}></i>
        </div>

        <div className="nav_btns">
          {/* Dropdown Language */}
          {!isMenuOpen && ( // Hide dropdown if menu is open
            <div className="dropdown">
              <button className="lang_btn" onClick={() => setLanguageOpen(!isLanguageOpen)}>
                {currentLang} <i className={`uil ${isMobile ? "uil-angle-up" : "uil-angle-down"}`}></i>
              </button>
              {isLanguageOpen && (
                <div className="dropdown-content">
                  <a href="#" onClick={(e) => changeLanguage('id', e)}>{t('ID')}</a>
                  <a href="#" onClick={(e) => changeLanguage('en', e)}>{t('EN')}</a>
                </div>
              )}
            </div>
          )}
          <ThemeToggle />

          <div className="nav_toggle" id="nav-toggle" onClick={toggleMenu}>
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
