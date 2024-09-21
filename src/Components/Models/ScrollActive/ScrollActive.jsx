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
        const navLink = document.querySelector(`.nav_menu a[href*="${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          if (navLink) {
            navLink.classList.add("active-link");
          }
        } else {
          if (navLink) {
            navLink.classList.remove("active-link");
          }
        }
      });
    };

    window.addEventListener("scroll", scrollActive);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", scrollActive);
    };
  }, []);

  return null; // Since this component doesn't render anything
};

export default ScrollActive;
