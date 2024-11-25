import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // NAVBAR
      Beranda: "Home",
      Tentang: "About",
      Keahlian: "Skills",
      Pengalaman: "Experience",
      Project: "Portfolio",
      ID: "ID",
      ENG: "ENG",

      // HOME
      "Hallo, Nama saya": "Hello, My Name",
      "Muhammad Salman Al Farisi": "Muhammad Salman Al Farisi",
      Programmer: "Programmer",
      "Web Developer": "Web Developer",
      "Cyber Security Enthusiast": "Front End Developer",
      "Game Developer": "Wordpress Developer",
      "Fullstack Developer": "Student",
      "Saya antusias mempelajari bahasa pemrograman, khususnya pengembangan website dan game, serta memiliki minat mendalam pada keamanan siber untuk aplikasi web.":
        "I am passionate about learning programming languages, particularly in website and game development, and deeply interested in cybersecurity for web applications.",
      "Hubungi Saya": "Contact Me",

      // ABOUT
      "Tentang Saya": "About Me",
      "Saya adalah siswa SMKN 46 Jakarta yang dikenal memiliki semangat belajar tinggi dan rasa ingin tahu yang mendalam terhadap dunia teknologi. Saya sangat antusias dalam mengeksplorasi berbagai aspek pemrograman, mulai dari pengembangan website, aplikasi, hingga game. Dengan tekad untuk terus berkembang, saya berkomitmen untuk selalu mengikuti tren dan inovasi terbaru di bidang teknologi, sehingga dapat berkontribusi secara maksimal di masa depan.":
        "I am a student at SMKN 46 Jakarta, known for my strong passion for learning and deep curiosity about the world of technology. I am highly enthusiastic about exploring various aspects of programming, including website development, applications, and games. With a determination to grow, I am committed to staying updated on the latest trends and innovations in technology, aiming to contribute meaningfully in the future.",
      "Download CV": "Download CV",

      // QUALIFICATIONS
      Pendidikan: "Education",
      Kompetisi: "Competitions",
      "Sekolah Dasar": "Elementary School",
      "Sekolah Menengah Pertama": "Junior High School",
      "Sekolah Menengah Kejuruan": "Vocational High School",
      Peserta: "Participant",
      "Grand Finalis": "Grand Finalist",
      "Juara 2 & Best Desain": "2nd Place & Best Design",
      "Juara Harapan III": "3rd Place",
      "Juara 2": "2nd Place",
      "Juara Harapan I": "4th Place",

      // SERTIFIKAT
      SERTIFIKAT: "Certificate",
      "Sertifikat Prestasi": "Academic Certificates",
      "Sertifikat Keterampilan": "Course Certificates",
      ZoomedProject: "Zoomed Project",

      SERTIFIKAT: "Certificates",
      "Sertifikat Prestasi": "Academic Certificates",
      "Sertifikat Keterampilan": "Course Certificates",
      "Certificate Image": "Certificate Image",
      "Zoomed Project": "Zoomed Project",
      "Juara 1 - IITC Web Design 2024 (Nasional)":
        "1st Place - IITC Web Design 2024 (National)",
      "Juara 1 - Best Design C4 AWS 2024 (Provinsi DKI Jakarta)":
        "1st Place - Best Design C4 AWS 2024 (DKI Jakarta Province)",
      "Juara 2 - Cloud Computing Club Kompetisi C4 2024 (Provinsi DKI Jakarta)":
        "Siswa (LKS) SMK City Level JT1 (3rd Runner-up)",
      "Juara 1 - Desain Web GSS Micro Influencer AWS 2024 (Nasional)":
        "Micro Influencer Competition Gerakan Sekolah Sehat (1st Runner-up)",
      "Juara 2 - Cloud Computing Club Kompetisi C4 2024 (Provinsi DKI Jakarta)":
        "Web Design 8 Technology Festival 2024 (2nd Place)",
      "Juara 2 - Trelogy Web Design 2024 (Nasional)":
        "De Code Web Design Competition 2024 (Participant)",
      "Juara 4 - LKS Cloud Computing 2024 (Provinsi DKI Jakarta)":
        "Intermedia Information Technology (IITC) X Rumah Web (Nominee)",
      "Penerima Award Sharing The Dream SGC 2024":
        "Olimpiade Sains Pelajar Nasional Mathematics High School (Gold Medal)",
      "Web Design Fundamentals - Transforming Lines Of Code Intro Digital Excellence":
        "Web Design Fundamentals - Transforming Lines Of Code Intro Digital Excellence",
      "Kickstart Fullstack Web Development Journey":
        "Kickstart Fullstack Web Development Journey",
      "Basic And Benefits Of Penetration Testing":
        "Basic And Benefits Of Penetration Testing",
      "Vulnerability Assessment Lifecycle":
        "Vulnerability Assessment Lifecycle",

      // QUALIFICATION
      experience: "Experience",
      education: "Education",
      competition: "Competition",
      elementary_school: "Elementary School",
      elementary_school_subtitle: "SDN 01 CIPINANG CEMPEDAK",
      junior_high_school: "Junior High School",
      junior_high_school_subtitle: "SMPN 62 JAKARTA",
      vocational_high_school: "Vocational High School",
      vocational_high_school_subtitle: "SMKN 46 JAKARTA",
      cloud_competition: "Cloud Computing Club Competition ~ Website Design",
      participant: "Participant",
      jakbee_competition: "JakBee Competition ~ Short Movie",
      grand_finalist: "Grand Finalist",
      cloud_competition_2: "Cloud Computing Club Competition ~ Website Design",
      second_place_best_design: "2nd Place & Best Design",
      lks_cyber_security:
        "Student Competency Competition (LKS) ~ Cyber Security",
      third_place: "3rd Place",
      t8nofest_web_design: "T8NOFEST - Web Design",
      second_place: "2nd Place",
      gss_competition: "GSS Micro Influencer Competitions - Web Design",
      fourth_place: "4th Place & Best Design",
      
      // CONTACT
      "HUBUNGI SAYA": "CONTACT ME",
      "Saya sangat terbuka untuk berkolaborasi! Isi form di data ini untuk menghubungi saya melalui email!":
        "I am very open to collaborations! Fill out this form to contact me via email!",
      LinkedIn: "LinkedIn",
      Email: "Email",
      Lokasi: "Location",
      Nama: "Name",
      "Masukan Nama Anda...": "Enter Your Name...",
      Pesan: "Message",
      "Masukan Pesan...": "Enter Your Message...",
      "Kirim Pesan": "Send Message",
      "Pesan Terkirim!": "Message Sent!",
      "Pesan Anda berhasil dikirim.":
        "Your message has been sent successfully.",
      "Oops...": "Oops...",
      "Terjadi kesalahan, pesan gagal dikirim.":
        "An error occurred, the message failed to send.",
      "Coba Lagi": "Try Again",

      // FOOTER
      Salman: "Salman",
      "All Rights Reserved": "All Rights Reserved",
    },
  },

  id: {
    translation: {
      // NAVBAR
      Beranda: "Beranda",
      Tentang: "Tentang",
      Keahlian: "Keahlian",
      Project: "Project",
      ID: "ID",
      ENG: "ENG",

      // HOME
      "Hallo, Nama saya": "Hallo, Nama saya",
      "Muhammad Salman Al Farisi": "Muhammad Salman Al Farisi",
      Programmer: "Programmer",
      "Web Developer": "Web Developer",
      "Cyber Security Enthusiast": "Front End Developer",
      "Game Developer": "Wordpress Developer",
      "Fullstack Developer": "Siswa",
      "Saya antusias mempelajari bahasa pemrograman, khususnya pengembangan website dan game, serta memiliki minat mendalam pada keamanan siber untuk aplikasi web.":
        "Saya antusias mempelajari bahasa pemrograman, khususnya pengembangan website dan game, serta memiliki minat mendalam pada keamanan siber untuk aplikasi web.",
      "Hubungi Saya": "Hubungi Saya",

      // ABOUT
      "Tentang Saya": "Tentang Saya",
      "Saya adalah siswa SMKN 46 Jakarta yang dikenal memiliki semangat belajar tinggi dan rasa ingin tahu yang mendalam terhadap dunia teknologi. Saya sangat antusias dalam mengeksplorasi berbagai aspek pemrograman, mulai dari pengembangan website, aplikasi, hingga game. Dengan tekad untuk terus berkembang, saya berkomitmen untuk selalu mengikuti tren dan inovasi terbaru di bidang teknologi, sehingga dapat berkontribusi secara maksimal di masa depan.":
        "Saya adalah siswa SMKN 46 Jakarta yang dikenal memiliki semangat belajar tinggi dan rasa ingin tahu yang mendalam terhadap dunia teknologi. Saya sangat antusias dalam mengeksplorasi berbagai aspek pemrograman, mulai dari pengembangan website, aplikasi, hingga game. Dengan tekad untuk terus berkembang, saya berkomitmen untuk selalu mengikuti tren dan inovasi terbaru di bidang teknologi, sehingga dapat berkontribusi secara maksimal di masa depan.",
      "Download CV": "Download CV",

      // QUALIFICATIONS
      experience: "Pengalaman",
      education: "Pendidikan",
      competition: "Kompetisi",
      elementary_school: "Sekolah Dasar",
      elementary_school_subtitle: "SDN 01 CIPINANG CEMPEDAK",
      junior_high_school: "Sekolah Menengah Pertama",
      junior_high_school_subtitle: "SMPN 62 JAKARTA",
      vocational_high_school: "Sekolah Menengah Kejuruan",
      vocational_high_school_subtitle: "SMKN 46 JAKARTA",
      cloud_competition: "Cloud Computing Club Competition AWS  ~ Web Design",
      participant: "JUARA 1 - NASIONAL",
      jakbee_competition: " IITC ~ Web Design",
      grand_finalist: "Juara 1 ~ NASIONAL",
      cloud_competition_2: "GSS Micro Influencer AWS ~ Web Design",
      second_place_best_design: "Juara 1 ~ NASIONAL",
      lks_cyber_security: "Lomba Kompetensi Siswa (LKS) ~ Cloud Computing",
      third_place: "Juara Harapan I ~ Provinsi",
      t8nofest_web_design: "T8NOFEST ~ Web Design",
      second_place: "Juara 2 ~ Nasional",
      gss_competition: "Penerima Scholarship Sharing The Dream SCG",
      fourth_place: "Penerima ~ Nasional",

      // SERTIFIKAT
      SERTIFIKAT: "Sertifikat",
      "Sertifikat Prestasi": "Sertifikat Akademik",
      "Sertifikat Keterampilan": "Sertifikat Kursus",
      ZoomedProject: "Proyek Diperbesar",

      SERTIFIKAT: "Sertifikat",
      "Sertifikat Prestasi": "Sertifikat Prestasi",
      "Sertifikat Keterampilan": "Sertifikat Keterampilan",
      "Certificate Image": "Gambar Sertifikat",
      "Zoomed Project": "Proyek Diperbesar",
      "1st Place - IITC Web Design 2024 (National)":
        "Juara 1 - IITC Web Design 2024 (Nasional)",
      "1st Place - Best Design C4 AWS 2024 (DKI Jakarta Province)":
        "Juara 1 - Best Design C4 AWS 2024 (Provinsi DKI Jakarta)",
      "1st Place - GSS Micro Influencer Web Design AWS 2024 (National)":
        "Juara 1 - Desain Web GSS Micro Influencer AWS 2024 (Nasional)",
      "2nd Place - Technofest by SMAN 8 Jakarta (National)":
        "Juara 2 - Technofest oleh SMAN 8 Jakarta (Nasional)",
      "2nd Place - Cloud Computing Club Competition C4 2024 (DKI Jakarta Province)":
        "Juara 2 - Cloud Computing Club Kompetisi C4 2024 (Provinsi DKI Jakarta)",
      "2nd Place - Trelogy Web Design 2024 (National)":
        "Juara 2 - Trelogy Web Design 2024 (Nasional)",
      "4th Place - LKS Cloud Computing 2024 (National)":
        "Juara 4 - LKS Cloud Computing 2024 (Provinsi DKI Jakarta)",
      "Recipient of the Scholarship Sharing The Dream Award SGC 2024":
        "Penerima Beasiswa Sharing The Dream SCG 2024",
      "Web Design Fundamentals - Transforming Lines Of Code Intro Digital Excellence":
        "Dasar-dasar Desain Web - Transformasi Baris Kode Intro Digital Excellence",
      "Kickstart Fullstack Web Development Journey":
        "Memulai Perjalanan Fullstack Web Development",
      "Basic And Benefits Of Penetration Testing":
        "Dasar dan Manfaat Penetration Testing",
      "Vulnerability Assessment Lifecycle": "Siklus Penilaian Kerentanannya",

      // CONTACT
      "HUBUNGI SAYA": "HUBUNGI SAYA",
      "Saya sangat terbuka untuk berkolaborasi! Isi form di data ini untuk menghubungi saya melalui email!":
        "Saya sangat terbuka untuk berkolaborasi! Isi form di data ini untuk menghubungi saya melalui email!",
      LinkedIn: "LinkedIn",
      Email: "Email",
      Lokasi: "Lokasi",
      Nama: "Nama",
      "Masukan Nama Anda...": "Masukan Nama Anda...",
      Pesan: "Pesan",
      "Masukan Pesan...": "Masukan Pesan...",
      "Kirim Pesan": "Kirim Pesan",
      "Pesan Terkirim!": "Pesan Terkirim!",
      "Pesan Anda berhasil dikirim.": "Pesan Anda berhasil dikirim.",
      "Oops...": "Oops...",
      "Terjadi kesalahan, pesan gagal dikirim.":
        "Terjadi kesalahan, pesan gagal dikirim.",
      "Coba Lagi": "Coba Lagi",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "id",
  fallbackLng: "id",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
