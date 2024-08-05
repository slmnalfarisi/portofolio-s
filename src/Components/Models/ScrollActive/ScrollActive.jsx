import { useEffect } from 'react';

const ScrollActive = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const scrollActive = () => {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(".nav_menu a[href*=" + sectionId + "]")
            .classList.add("active-link");
        } else {
          document
            .querySelector(".nav_menu a[href*=" + sectionId + "]")
            .classList.remove("active-link");
        }
      });
    };

    window.addEventListener("scroll", scrollActive);
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", scrollActive);
    };
  }, []);
};

export default ScrollActive;
