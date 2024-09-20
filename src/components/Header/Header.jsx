import React, { useEffect, useState } from "react";
import "./Header.css";
import ScrollHeader from "../Models/ScrollHeader/ScrollHeader";
import ThemeToggle from "../Models/ThemeToggle/ThemeToggle";

export const Header = () => {
  ScrollHeader();
  const [isLanguageOpen, setLanguageOpen] = useState(false);

  useEffect(() => {
    const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close");

    // JIKA DI KLIK AKAN MENAMPILKAN
    if (navToggle) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
      });
    }

    // CLOSE
    if (navClose) {
      navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
      });
    }

    // REMOVE MENU MOBILE
    const navLink = document.querySelectorAll(".nav_link");

    function linkAction() {
      const navMenu = document.getElementById("nav-menu");
      navMenu.classList.remove("show-menu");
    }

    navLink.forEach((n) => n.addEventListener("click", linkAction));

    // Cleanup event listeners on component unmount
    return () => {
      if (navToggle) {
        navToggle.removeEventListener("click", () => {
          navMenu.classList.add("show-menu");
        });
      }
      if (navClose) {
        navClose.removeEventListener("click", () => {
          navMenu.classList.remove("show-menu");
        });
      }
      navLink.forEach((n) => n.removeEventListener("click", linkAction));
    };
  }, []);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav_logo reyname">
          Reynaldo
        </a>

        <div className="nav_menu" id="nav-menu">
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#home" className="nav_link active-link">
                <i className="uil uil-estate nav_icon"></i> Beranda
              </a>
            </li>
            <li className="nav_item">
              <a href="#about" className="nav_link">
                <i className="uil uil-user nav_icon"></i> Tentang
              </a>
            </li>
            <li className="nav_item">
              <a href="#skills" className="nav_link">
                <i className="uil uil-file-alt nav_icon"></i> Keahlian
              </a>
            </li>
            <li className="nav_item">
              <a href="#experience" className="nav_link">
                <i className="uil uil-envelope-edit nav_icon"></i> Pengalaman
              </a>
            </li>
            <li className="nav_item">
              <a href="#portofolio" className="nav_link">
                <i className="uil uil-scenery nav_icon"></i> Project
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav_close" id="nav-close"></i>
        </div>

        <div className="nav_btns">
          {/* Dropdown Language */}
          <div className="dropdown">
            <button className="lang_btn" onClick={() => setLanguageOpen(!isLanguageOpen)}>
              ID
            </button>
            {isLanguageOpen && (
              <div className="dropdown-content">
                <a href="#">ID</a>
                <a href="#">ENG</a>
              </div>
            )}
          </div>
          <ThemeToggle />

          {/* GANTI TEMA BTN */}

          <div className="nav_toggle" id="nav-toggle">
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
