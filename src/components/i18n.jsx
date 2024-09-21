import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Beranda": "Home",
      "Tentang": "About",
      "Keahlian": "Skills",
      "Pengalaman": "Experience",
      "Project": "Portfolio",
      "ID": "ID",
      "ENG": "ENG",
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
      "TENTANG SAYA": "ABOUT ME",
      "Saya adalah seseorang pelajar dari SMKN 46 Jakarta yang awalnya masuk ke dalam dunia IT tidak memiliki basic Komputer, namun saya selalu berusaha untuk belajar sehingga dapat mengetahui bahkan memahami alur dari suatu pemrograman. Saat ini saya suka mempelajari bahasa pemrograman yang baru. Baik dalam pengembangan suatu website maupun suatu game 2D.": 
      "I am a student from SMKN 46 Jakarta who initially entered the IT world without a computer background, but I always strive to learn so that I can understand the flow of programming. Currently, I enjoy learning new programming languages, both in website development and 2D game development.",
      "Download CV": "Download CV"
    }
  },
  id: {
    translation: {
      "Beranda": "Beranda",
      "Tentang": "Tentang",
      "Keahlian": "Keahlian",
      "Pengalaman": "Pengalaman",
      "Project": "Project",
      "ID": "ID",
      "ENG": "ENG",
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
      "TENTANG SAYA": "TENTANG SAYA",
      "Saya adalah seseorang pelajar dari SMKN 46 Jakarta yang awalnya masuk ke dalam dunia IT tidak memiliki basic Komputer, namun saya selalu berusaha untuk belajar sehingga dapat mengetahui bahkan memahami alur dari suatu pemrograman. Saat ini saya suka mempelajari bahasa pemrograman yang baru. Baik dalam pengembangan suatu website maupun suatu game 2D.": 
      "Saya adalah seseorang pelajar dari SMKN 46 Jakarta yang awalnya masuk ke dalam dunia IT tidak memiliki basic Komputer, namun saya selalu berusaha untuk belajar sehingga dapat mengetahui bahkan memahami alur dari suatu pemrograman. Saat ini saya suka mempelajari bahasa pemrograman yang baru. Baik dalam pengembangan suatu website maupun suatu game 2D.",
      "Download CV": "Download CV"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'id', // default language
    fallbackLng: 'id',

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
