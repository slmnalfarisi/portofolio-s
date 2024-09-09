import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Home.css";
import { homeData } from "../../docs/HomeData";

const Home = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: homeData.profileData.subtitle,
      typeSpeed: 70,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
          {/* Social Media Links */}
          <div className="home_social">
            {homeData.socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                className="home_social-icon"
                data-aos="zoom-in"
                data-aos-duration={link.duration}
                rel="noreferrer"
              >
                <i className={link.iconClass}></i>
              </a>
            ))}
          </div>

          {/* Profile Image */}
          <div className="home_img" data-aos="zoom-in" data-aos-duration="1200">
            <svg
              className="home_blob"
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />

                <image className="home_blob-img" xlinkHref="/me.png" />
              </g>
            </svg>
          </div>

          {/* Profile Data */}
          <div className="home_data">
            <h3
              className="home_about"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              {homeData.profileData.about}
            </h3>
            <h1
              className="home_title"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              {homeData.profileData.title}
            </h1>
            <h3
              className="home_subtitle"
              data-aos="fade-right"
              data-aos-duration="1300"
            >
              <span ref={typedElement}></span>
            </h3>
            <p
              className="home_description"
              data-aos="fade-right"
              data-aos-duration="1400"
            >
              {homeData.profileData.description}
            </p>
            <a
              href={homeData.profileData.contactLink}
              className="button button--flex"
              data-aos="zoom-in-right"
              data-aos-duration="1450"
            >
              Hubungi Saya<i className="uil uil-message button_icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
