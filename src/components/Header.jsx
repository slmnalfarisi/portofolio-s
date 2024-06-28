export const Header = () => {
    // MENAMPILKAN MENU
    const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

    // JIKA DI KLIK AKAN MENAMPILKAN
    if(navToggle){
    navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
    })
    }

    // CLOSE
    if(navClose){
    navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
    })
    }

    // REMOVE MENU MOBILE 
    const navLink = document.querySelectorAll('.nav_link')

    function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))
  return (
    // <!-- HEADER START -->
    <header class="header" id="header">
      <nav class="nav container">
        <a href="#" class="nav_logo reyname">Reynaldo</a>

        <div class="nav_menu" id="nav-menu">
          <ul class="nav_list grid">
            <li class="nav_item">
              <a href="#home" class="nav_link active-link">
                <i class="uil uil-estate nav_icon"></i> Beranda
              </a>
            </li>
            <li class="nav_item">
              <a href="#about" class="nav_link">
                <i class="uil uil-user nav_icon"></i> Tentang
              </a>
            </li>
            <li class="nav_item">
              <a href="#skills" class="nav_link">
                <i class="uil uil-file-alt nav_icon"></i> Keahlian
              </a>
            </li>
            <li class="nav_item">
              <a href="#experience" class="nav_link">
                <i class="uil uil-envelope-edit nav_icon"></i> Pengalaman
              </a>
            </li>
            <li class="nav_item">
              <a href="#portofolio" class="nav_link">
                <i class="uil uil-scenery nav_icon"></i> Project
              </a>
            </li>
            <li class="nav_item">
              <a href="#contact" class="nav_link">
                <i class="uil uil-message nav_icon"></i> Kontak
              </a>
            </li>
          </ul>
          <i class="uil uil-times nav_close" id="nav-close"></i>
        </div>

        <div class="nav_btns">
          {/* GANTI TEMA BTN */}
          <i class="uil uil-moon change-theme" id="theme-button"></i>

          <div class="nav_toggle" id="nav-toggle">
            <i class="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header