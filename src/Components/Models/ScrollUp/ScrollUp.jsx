import { useEffect } from 'react';

const ScrollUp = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.getElementById("scroll-up");
      if (scrollUp) {
        if (window.scrollY >= 560) {
          scrollUp.classList.add("show-scroll");
        } else {
          scrollUp.classList.remove("show-scroll");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);
  return(
    <a href="#" class="scrollup" id="scroll-up">
      <i class="uil uil-arrow-up scrollup_icon"></i>
    </a>
  )
};

export default ScrollUp;
