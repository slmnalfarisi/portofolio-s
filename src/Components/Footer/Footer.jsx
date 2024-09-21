import React from 'react';
import { useTranslation } from 'react-i18next';
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer_bg">
        <div className="footer_container container grid">
          <div>
            <h1 className="footer_title">{t('Reynaldo')}</h1>
            <span className="footer_subtitle">{t('Programmer')}</span>
          </div>

          <ul className="footer_links">
            <li>
              <a href="#skills" className="footer_link">{t('Keahlian')}</a>
            </li>
            <li>
              <a href="#experience" className="footer_link">{t('Pengalaman')}</a>
            </li>
            <li>
              <a href="#portofolio" className="footer_link">{t('Project')}</a>
            </li>
          </ul>

          <div className="footer_socials">
            <a
              href="https://www.instagram.com/rynldysllino"
              target="_blank"
              rel="noopener noreferrer"
              className="footer_social"
            >
              <i className="uil uil-instagram"></i>
            </a>

            <a
              href="https://github.com/reynaldo0"
              target="_blank"
              rel="noopener noreferrer"
              className="footer_social"
            >
              <i className="uil uil-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/reynaldo-yusellino-564724270"
              target="_blank"
              rel="noopener noreferrer"
              className="footer_social"
            >
              <i className="uil uil-linkedin-alt"></i>
            </a>
          </div>
        </div>

        <p className="footer_copy">
          &#169; <span className="footname">{t('Reynaldo')}</span>. {t('All Rights Reserved')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
