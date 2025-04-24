// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-stats">
        <span>PERSONAJES: 58</span>
     
      </div>
      <hr className="footer-divider" />
      <div className="server-status">
        <span>ESTADO DEL SERVIDOR:</span>
        <span className="status-indicator">●</span>
      </div>
      <div className="footer-logos">

      </div>
      <div className="footer-icons">
        <a href="https://github.com/Alv3an/" target="_blank" rel="GitHub">⚙</a>
        <a href="https://web.dragonball-api.com/" target="_blank" rel="API Dragon Ball">🔗</a>
        <a href="https://web.facebook.com/Alv3an3" target="_blank" rel="red social">🔗</a>
      </div>
      <div className="footer-credits">
        <span>&lt;/&gt; Hecha por <strong>Andres Stiven Alvarez Vera</strong> 2025</span>
      </div>
    </footer>
  );
};

export default Footer;
