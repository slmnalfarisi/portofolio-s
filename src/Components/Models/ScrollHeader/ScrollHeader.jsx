import { useEffect } from 'react';

const ScrollHeader = () => {
  useEffect(() => {
    const scrollHeader = () => {
      const nav = document.getElementById('header');
      const isDesktop = window.matchMedia('(min-width: 768px)').matches;

      if (isDesktop) {
        // Desktop behavior
        if (window.scrollY <= 80) {
          nav.classList.add('scroll-header');
        } else {
          nav.classList.remove('scroll-header');
        }
      } else {
        // Mobile behavior
        if (window.scrollY < 80) {
          nav.classList.remove('scroll-header');
        } else {
          nav.classList.add('scroll-header');
        }
      }
    };

    window.addEventListener('scroll', scrollHeader);
    window.addEventListener('resize', scrollHeader);

    // Initial check
    scrollHeader();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', scrollHeader);
      window.removeEventListener('resize', scrollHeader);
    };
  }, []);
};

export default ScrollHeader;
