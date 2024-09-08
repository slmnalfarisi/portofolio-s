import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Pesan Terkirim!",
            text: "Pesan Anda berhasil dikirim.",
            confirmButtonText: "OK",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Terjadi kesalahan, pesan gagal dikirim.",
            confirmButtonText: "Coba Lagi",
          });
        }
      );
    e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section_title" data-aos="zoom-in" data-aos-duration="1300">
        | HUBUNGI SAYA |
      </h2>
      <span className="section_subtitle" data-aos="zoom-in" data-aos-duration="1500">
        Saya sangat terbuka untuk berkolaborasi! Isi form di data ini untuk menghubungi saya melalui email!
      </span>

      <div className="contact_container container grid">
        <div>
          <div className="contact_information" data-aos="fade-right" data-aos-duration="1500">
            <i className="uil uil-linkedin-alt contact_icon"></i>
            <div>
              <h3 className="contact_title">LinkedIn</h3>
              <span className="contact_subtitle">Reynaldo Yusellino</span>
            </div>
          </div>
          <div className="contact_information" data-aos="fade-right" data-aos-duration="1600">
            <i className="uil uil-envelope contact_icon"></i>
            <div>
              <h3 className="contact_title">Email</h3>
              <span className="contact_subtitle">reynaldooyusellino@gmail.com</span>
            </div>
          </div>
          <div className="contact_information" data-aos="fade-right" data-aos-duration="1700">
            <i className="uil uil-map-marker contact_icon"></i>
            <div>
              <h3 className="contact_title">Lokasi</h3>
              <span className="contact_subtitle">Indonesia, Bekasi</span>
            </div>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact_form grid">
          <div className="contact_inputs grid">
            <div className="contact_content" data-aos="zoom-in" data-aos-duration="1500">
              <label htmlFor="name" className="contact_label">
                Nama :
              </label>
              <input
                type="text"
                id="nama"
                name="name"
                className="contact_input"
                placeholder="Masukan Nama Anda..."
                required
              />
            </div>
            <div className="contact_content" data-aos="zoom-in" data-aos-duration="1600">
              <label htmlFor="email" className="contact_label">
                Email :
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="contact_input"
                placeholder="Masukan Email Anda..."
                required
              />
            </div>
          </div>
          <div className="contact_content" data-aos="zoom-in" data-aos-duration="1700">
            <label htmlFor="message" className="contact_label">
              Pesan :
            </label>
            <textarea
              name="message"
              id="pesan"
              cols="0"
              rows="7"
              className="contact_input"
              placeholder="Masukan Pesan..."
              required
            ></textarea>
          </div>

          <div data-aos="zoom-in" data-aos-duration="1500">
            <button type="submit" className="button button--flex button_input">
              Kirim Pesan
              <i className="uil uil-message button_icon"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
