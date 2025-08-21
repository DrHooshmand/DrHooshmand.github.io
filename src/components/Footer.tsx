import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://www.linkedin.com/in/shahriarhoushmand/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>© 2025 Shahriar Hooshmand.<br/>A portfolio designed & built by <a href="https://github.com/DrHooshmand" target="_blank" rel="noreferrer">Shahriar Hooshmand</a></p>
    </footer>
  );
}

export default Footer;