import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // NAVBAR
      "Beranda": "Home",
      "Tentang": "About",
      "Keahlian": "Skills",
      "Pengalaman": "Experience",
      "Project": "Portfolio",
      "ID": "ID",
      "ENG": "ENG",

      // HOME
      "Hallo, Nama saya": "Hello, My Name",
      "Reynaldo Yusellino": "Reynaldo Yusellino",
      "Programmer": "Programmer",
      "Web Developer": "Web Developer",
      "Cyber Security Enthusiast": "Cyber Security Enthusiast",
      "Game Developer": "Game Developer",
      "Fullstack Developer": "Fullstack Developer",
      "Saya merupakan seseorang yang suka mempelajari bahasa Pemrograman khususnya untuk pengembangan website, dan game. Selain itu saya juga antusias terhadap keamanan siber terhadap website.": 
      "I am someone who enjoys learning programming languages, especially for web and game development. I am also passionate about cybersecurity for websites.",
      "Hubungi Saya": "Contact Me",

      // ABOUT 
      "Tentang Saya": "About Me",
      "Saya adalah seseorang pelajar dari SMKN 46 Jakarta yang awalnya masuk ke dalam dunia IT tidak memiliki basic Komputer, namun saya selalu berusaha untuk belajar sehingga dapat mengetahui bahkan memahami alur dari suatu pemrograman. Saat ini saya suka mempelajari bahasa pemrograman yang baru. Baik dalam pengembangan suatu website maupun suatu game 2D.": 
      "I am a student from SMKN 46 Jakarta who initially entered the IT world without a computer background, but I always strive to learn so that I can understand the flow of programming. Currently, I enjoy learning new programming languages, both in website development and 2D game development.",
      "Download CV": "Download CV",

      // QUALIFICATIONS
      "Pendidikan": "Education",
      "Kompetisi": "Competitions",
      "Sekolah Dasar": "Elementary School",
      "Sekolah Menengah Pertama": "Junior High School",
      "Sekolah Menengah Kejuruan": "Vocational High School",
      "Peserta": "Participant",
      "Grand Finalis": "Grand Finalist",
      "Juara 2 & Best Desain": "2nd Place & Best Design",
      "Juara Harapan III": "3rd Place",
      "Juara 2": "2nd Place",
      "Juara Harapan I": "4th Place",
      
      // PROJECT
      "Rebellum": "Rebellum",
      "RebellumDescription": "Rebellum is a website that provides information and solutions related to juvenile delinquency in Indonesia.",
      "HealThyself": "HealThyself",
      "HealthyselfDescription": "Healthyself is a website that provides information about human health from infancy to old age.",
      "Artem": "Artem",
      "ArtemDescription": "Artem is a website that provides information about the works of renowned artists.",
      "VEREV Shops": "VEREV Shops",
      "VEREVShopsDescription": "VEREV Shops is a cashier website that can interact directly with users.",
      "Enheal Sycology": "Enheal Sycology",
      "EnhealSycologyDescription": "Enheal Sycology is a website that provides education about mental health.",
      "Gothel": "Gothel",
      "GothelDescription": "Gothel is a website that provides information about hotel accommodations in Jakarta, Bandung, and Yogyakarta.",
      "Wafari": "Wafari",
      "WafariDescription": "Wafari is a website that provides information about tourist attractions in DKI Jakarta.",
      "Fotix Cinema": "Fotix Cinema",
      "FotixCinemaDescription": "Fotix Cinema is a website that displays a list of interesting movies for teenagers.",
      "PROJECT": "Project",
      "Demo": "Demo",
      "Source Code": "Source Code",
      "Load More": "Load More",
      "Zoomed Project": "Zoomed Project",

      // CONTACT
      "HUBUNGI SAYA": "CONTACT ME",
      "Saya sangat terbuka untuk berkolaborasi! Isi form di data ini untuk menghubungi saya melalui email!": 
      "I am very open to collaborations! Fill out this form to contact me via email!",
      "LinkedIn": "LinkedIn",
      "Email": "Email",
      "Lokasi": "Location",
      "Nama": "Name",
      "Masukan Nama Anda...": "Enter Your Name...",
      "Pesan": "Message",
      "Masukan Pesan...": "Enter Your Message...",
      "Kirim Pesan": "Send Message",
      "Pesan Terkirim!": "Message Sent!",
      "Pesan Anda berhasil dikirim.": "Your message has been sent successfully.",
      "Oops...": "Oops...",
      "Terjadi kesalahan, pesan gagal dikirim.": "An error occurred, the message failed to send.",
      "Coba Lagi": "Try Again",

      // FOOTER 
      "Reynaldo": "Reynaldo",
      "All Rights Reserved": "All Rights Reserved",
    }
  },


  id: {
    translation: {
      // NAVBAR
      "Beranda": "Beranda",
      "Tentang": "Tentang",
      "Keahlian": "Keahlian",
      "Project": "Project",
      "ID": "ID",
      "ENG": "ENG",

      // HOME 
      "Hallo, Nama saya": "Hallo, Nama saya",
      "Reynaldo Yusellino": "Reynaldo Yusellino",
      "Programmer": "Programmer",
      "Web Developer": "Web Developer",
      "Cyber Security Enthusiast": "Cyber Security Enthusiast",
      "Game Developer": "Game Developer",
      "Fullstack Developer": "Fullstack Developer",
      "Saya merupakan seseorang yang suka mempelajari bahasa Pemrograman khususnya untuk pengembangan website, dan game. Selain itu saya juga antusias terhadap keamanan siber terhadap website.": 
      "Saya merupakan seseorang yang suka mempelajari bahasa Pemrograman khususnya untuk pengembangan website, dan game. Selain itu saya juga antusias terhadap keamanan siber terhadap website.",
      "Hubungi Saya": "Hubungi Saya",

      // ABOUT 
      "Tentang Saya": "Tentang Saya",
      "Saya adalah seseorang pelajar dari SMKN 46 Jakarta yang awalnya masuk ke dalam dunia IT tidak memiliki basic Komputer, namun saya selalu berusaha untuk belajar sehingga dapat mengetahui bahkan memahami alur dari suatu pemrograman. Saat ini saya suka mempelajari bahasa pemrograman yang baru. Baik dalam pengembangan suatu website maupun suatu game 2D.": 
      "Saya adalah seseorang pelajar dari SMKN 46 Jakarta yang awalnya masuk ke dalam dunia IT tidak memiliki basic Komputer, namun saya selalu berusaha untuk belajar sehingga dapat mengetahui bahkan memahami alur dari suatu pemrograman. Saat ini saya suka mempelajari bahasa pemrograman yang baru. Baik dalam pengembangan suatu website maupun suatu game 2D.",
      "Download CV": "Download CV",

      // QUALIFICATIONS
      "Pengalaman": "Pengalaman",
      "Pendidikan": "Pendidikan",
      "Kompetisi": "Kompetisi",
      "Sekolah Dasar": "Sekolah Dasar",
      "Sekolah Menengah Pertama": "Sekolah Menengah Pertama",
      "Sekolah Menengah Kejuruan": "Sekolah Menengah Kejuruan",
      "Peserta": "Peserta",
      "Grand Finalis": "Grand Finalis",
      "Juara 2 & Best Desain": "Juara 2 & Best Desain",
      "Juara Harapan III": "Juara Harapan III",
      "Juara 2": "Juara 2",
      "Juara Harapan I": "Juara Harapan I",

      // PROJECT 
      "Rebellum": "Rebellum",
      "RebellumDescription": "Rebellum adalah sebuah website yang memberikan informasi serta solusi terkait kenakalan remaja di Indonesia.",
      "HealThyself": "HealThyself",
      "HealthyselfDescription": "Healthyself adalah sebuah website yang memberikan informasi terkait kesehatan manusia dari Bayi hingga Lansia.",
      "Artem": "Artem",
      "ArtemDescription": "Artem adalah sebuah website yang memberikan informasi terkait karya seniman ternama.",
      "VEREV Shops": "VEREV Shops",
      "VEREVShopsDescription": "VEREV Shops adalah sebuah website Kasir yang dapat berintraksi langsung dengan pengguna.",
      "Enheal Sycology": "Enheal Sycology",
      "EnhealSycologyDescription": "Enheal Sycology adalah sebuah website yang memberikan edukasi terkait kesehatan mental.",
      "Gothel": "Gothel",
      "GothelDescription": "Gothel adalah sebuah website yang memberikan informasi penginapan hotel di Jakarta, Bandung dan Yogyakarta.",
      "Wafari": "Wafari",
      "WafariDescription": "Wafari adalah sebuah website yang memberikan informasi terkait wisata yang ada di DKI Jakarta.",
      "Fotix Cinema": "Fotix Cinema",
      "FotixCinemaDescription": "Fotix Cinema adalah website yang menampilkan daftar film menarik untuk para remaja.",
      "PROJECT": "Project",
      "Demo": "Demo",
      "Source Code": "Source Code",
      "Load More": "Muat Lebih Banyak",
      "Zoomed Project": "Proyek Zoomed",

      // CONTACT
      "HUBUNGI SAYA": "HUBUNGI SAYA",
      "Saya sangat terbuka untuk berkolaborasi! Isi form di data ini untuk menghubungi saya melalui email!": 
      "Saya sangat terbuka untuk berkolaborasi! Isi form di data ini untuk menghubungi saya melalui email!",
      "LinkedIn": "LinkedIn",
      "Email": "Email",
      "Lokasi": "Lokasi",
      "Nama": "Nama",
      "Masukan Nama Anda...": "Masukan Nama Anda...",
      "Pesan": "Pesan",
      "Masukan Pesan...": "Masukan Pesan...",
      "Kirim Pesan": "Kirim Pesan",
      "Pesan Terkirim!": "Pesan Terkirim!",
      "Pesan Anda berhasil dikirim.": "Pesan Anda berhasil dikirim.",
      "Oops...": "Oops...",
      "Terjadi kesalahan, pesan gagal dikirim.": "Terjadi kesalahan, pesan gagal dikirim.",
      "Coba Lagi": "Coba Lagi",
    }
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: 'id',
    fallbackLng: 'id',

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
