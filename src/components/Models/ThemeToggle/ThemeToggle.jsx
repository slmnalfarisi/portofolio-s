import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const darkTheme = "dark-theme";
  const iconTheme = "uil-moon";

  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem("selected-theme");
    return savedTheme === "dark";
  });

  const [icon, setIcon] = useState(() => {
    const savedIcon = localStorage.getItem("selected-icon");
    return savedIcon || "uil-sun";
  });

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add(darkTheme);
      setIcon("uil-sun");
    } else {
      document.body.classList.remove(darkTheme);
      setIcon("uil-moon");
    }
    localStorage.setItem("selected-theme", isDarkTheme ? "dark" : "light");
    localStorage.setItem("selected-icon", icon);
  }, [isDarkTheme, icon]);

  const handleThemeToggle = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
    setIcon(prevIcon => prevIcon === "uil-moon" ? "uil-sun" : "uil-moon");
  };

  return (
    <i
      className={`uil ${icon} change-theme`}
      id="theme-button"
      onClick={handleThemeToggle}
      style={{ cursor: 'pointer' }} 
    ></i>
  );
};

export default ThemeToggle;
