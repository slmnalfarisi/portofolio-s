import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer_bg">
        <div class="footer_container container grid">
          <div>
            <h1 class="footer_title">Reynaldo</h1>
            <span class="footer_subtitle">Progammer</span>
          </div>

          <ul class="footer_links">
            <li>
              <a href="#skills" class="footer_link">Keahlian</a>
            </li>
            <li>
              <a href="#experience" class="footer_link">Pengalaman</a>
            </li>
            <li>
              <a href="#portofolio" class="footer_link">Project</a>
            </li>
          </ul>

          <div
            class="footer_socials"
          >
            <a
              href="https://www.instagram.com/rynldysllino"
              target="_blank"
              class="footer_social"
            >
              <i class="uil uil-instagram"></i>
            </a>

            <a
              href="https://github.com/reynaldo0"
              target="_blank"
              class="footer_social"
            >
              <i class="uil uil-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/reynaldo-yusellino-564724270"
              target="_blank"
              class="footer_social"
            >
              <i class="uil uil-linkedin-alt"></i>
            </a>
          </div>
        </div>

        <p class="footer_copy">
          &#169; <span class="footname">Reynaldo</span>. All Right Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer