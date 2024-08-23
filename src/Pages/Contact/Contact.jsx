import React from "react";
import "./Contact.css"

const Contact = () => {
  return (
    <section class="contact section" id="contact">
      <h2 class="section_title" data-aos="zoom-in" data-aos-duration="1300">
        | HUBUNGI SAYA |
      </h2>
      <span
        class="section_subtitle"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        Saya sangat terbuka untuk berkolaborasi! Isi form di data ini untuk
        menghubungi saya melalui email!
      </span>

      <div class="contact_container container grid">
        <div>
          <div
            class="contact_information"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <i class="uil uil-linkedin-alt contact_icon"></i>

            <div>
              <h3 class="contact_title">LinkedIn</h3>
              <span class="contact_subtitle">Reynaldo Yusellino</span>
            </div>
          </div>
          <div
            class="contact_information"
            data-aos="fade-right"
            data-aos-duration="1600"
          >
            <i class="uil uil-envelope contact_icon"></i>

            <div>
              <h3 class="contact_title">Email</h3>
              <span class="contact_subtitle">reynaldooyusellino@gmail.com</span>
            </div>
          </div>
          <div
            class="contact_information"
            data-aos="fade-right"
            data-aos-duration="1700"
          >
            <i class="uil uil-map-marker contact_icon"></i>

            <div>
              <h3 class="contact_title">Lokasi</h3>
              <span class="contact_subtitle">Indonesia, Bekasi</span>
            </div>
          </div>
        </div>

        <form
          onsubmit="emailSend(); reset(); return false;"
          class="contact_form grid"
        >
          <div class="contact_inputs grid">
            <div
              class="contact_content"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <label for="" class="contact_label">
                Nama :
              </label>
              <input
                type="text"
                id="nama"
                class="contact_input"
                placeholder="Masukan Nama Anda..."
                required
              />
            </div>
            <div
              class="contact_content"
              data-aos="zoom-in"
              data-aos-duration="1600"
            >
              <label for="" class="contact_label">
                Email :
              </label>
              <input
                type="email"
                id="email"
                class="contact_input"
                placeholder="Masukan Email / Nomor Telepon..."
                required
              />
            </div>
          </div>
          <div
            class="contact_content"
            data-aos="zoom-in"
            data-aos-duration="1700"
          >
            <label for="" class="contact_label">
              Pesan :
            </label>
            <textarea
              name=""
              id="pesan"
              cols="0"
              rows="7"
              class="contact_input"
              placeholder="Masukan Pesan..."
              required
            ></textarea>
          </div>

          <div data-aos="zoom-in" data-aos-duration="1500">
            <button class="button button--flex button_input">
              Kirim Pesan
              <i class="uil uil-message button_icon"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
