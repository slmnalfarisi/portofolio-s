import React from 'react'
import "./Project.css"

const Project = () => {
  return (
    <section className="portofolio section" id="portofolio">
        <h2 className="section_title" data-aos="zoom-in" data-aos-duration="1400">
          | PROJECT |
        </h2>

        <div className="portofolio_container container">
          <div
            className="portofolio_card"
            data-aos="zoom-in"
            data-aos-duration="1400"
          >
            <img
              src="/project/wafarii.webp"
              alt=""
              className="portofolio_image"
            />
            <div className="portofolio_tools">
              <span className="tool">HTML</span>
              <span className="tool">CSS</span>
              <span className="tool">JavaScript</span>
            </div>
            <h3 className="portofolio_title">Wafari</h3>
            <p className="portofolio_subtitle">
              Wafari adalah sebuah website yang memberikan informasi terkait
              wisata yang ada di DKI Jakarta
            </p>
            <div className="portofolio_buttons">
              <a href="https://wafariforensix.vercel.app/">
                <div className="portofolio_button button">
                  Demo <i className="uil uil-arrow-right portfolio_icon"></i>
                </div>
              </a>
              <a href="https://github.com/reynaldo0/wafariforensix">
                <div className="portofolio_button button">
                  Source Code <i className="uil uil-arrow-right portfolio_icon"></i>
                </div>
              </a>
            </div>
          </div>
          <div
            className="portofolio_card"
            data-aos="zoom-in"
            data-aos-duration="1400"
          >
            <img src="/project/fotix.webp" alt="" className="portofolio_image" />
            <div className="portofolio_tools">
              <span className="tool">HTML</span>
              <span className="tool">SCSS</span>
              <span className="tool">JavaScript</span>
            </div>
            <h3 className="portofolio_title">Fotix Cinema</h3>
            <p className="portofolio_subtitle">
              Fotix Cinema adalah website yang menampilkan daftar daftar film
              menarik untuk para remaja.
            </p>
            <div className="portofolio_buttons">
              <a href="https://fotixcinema.vercel.app/">
                <div className="portofolio_button button">
                  Demo <i className="uil uil-arrow-right portfolio_icon"></i>
                </div>
              </a>
              <a href="https://github.com/reynaldo0/fotixcinema">
                <div className="portofolio_button button">
                  Source Code <i className="uil uil-arrow-right portfolio_icon"></i>
                </div>
              </a>
            </div>
          </div>
          <div
            className="portofolio_card"
            data-aos="zoom-in"
            data-aos-duration="1400"
          >
            <img
              src="/project/rebellum.webp"
              alt=""
              className="portofolio_image"
            />
            <div className="portofolio_tools">
              <span className="tool">Tailwind</span>
              <span className="tool">Three JS</span>
              <span className="tool">JavaScript</span>
            </div>
            <h3 className="portofolio_title">Rebellum</h3>
            <p className="portofolio_subtitle">
              Rebellum adalah sebuah website yang memberikan informasi serta
              solusi terkait kenakalan remaja di Indonesia
            </p>
            <div className="portofolio_buttons">
              <a href="https://rebellum.vercel.app/">
                <div className="portofolio_button button">
                  Demo <i className="uil uil-arrow-right portfolio_icon"></i>
                </div>
              </a>
              <a href="https://github.com/reynaldo0/Rebellum">
                <div className="portofolio_button button">
                  Source Code <i className="uil uil-arrow-right portfolio_icon"></i>
                </div>
              </a>
            </div>
          </div>
          <div
            className="portofolio_card"
            data-aos="zoom-in"
            data-aos-duration="1400"
          >
            <img
              src="/project/verev.png"
              alt=""
              className="portofolio_image"
            />
            <div className="portofolio_tools">
              <span className="tool">Tailwind</span>
              <span className="tool">Django</span>
              <span className="tool">JavaScript</span>
            </div>
            <h3 className="portofolio_title">VEREV Shops</h3>
            <p className="portofolio_subtitle">
              VEREV Shops adalah sebuah website Kasir yang dapat berintraksi langsung dengan pengguna.
            </p>
            <div className="portofolio_buttons">
              <a href="" id="demo-deactive">
                <div className="portofolio_button button">
                  Demo <i className="uil uil-arrow-right portfolio_icon"></i>
                </div>
              </a>
              <a href="https://github.com/reynaldo0/verevshops">
                <div className="portofolio_button button">
                  Source Code <i className="uil uil-arrow-right portfolio_icon"></i>
                </div>
              </a>
            </div>
          </div>
          <div
            className="portofolio_card"
            data-aos="zoom-in"
            data-aos-duration="1400"
          >
            <img
              src="/project/enheal.png"
              alt=""
              className="portofolio_image"
            />
            <div className="portofolio_tools">
              <span className="tool">Tailwind</span>
              <span className="tool">JavaScript</span>
            </div>
            <h3 className="portofolio_title">Enheal Sycology</h3>
            <p className="portofolio_subtitle">
              Enheal Sycology adalah sebuah website yang memberikan edukasi terkait kesehatan mental.
            </p>
            <div className="portofolio_buttons">
              <a href="#" id="onProgressDemo">
                <div className="portofolio_button button">
                  Demo <i className="uil uil-arrow-right portfolio_icon"></i>
                </div>
              </a>
              <a href="https://github.com/reynaldo0/enheal-sycology">
                <div className="portofolio_button button">
                  Source Code <i className="uil uil-arrow-right portfolio_icon"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Project