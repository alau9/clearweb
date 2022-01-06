import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./footer.styles.scss";
import { useNavigate } from "react-router-dom";

const Footer = () => { 

  const navigate = useNavigate();
  const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

return (
  <div className="footer">
    <div className="left-side">
      <div className="footnote">Clear Web Ltd.</div>
      <h1>Where functionality meets the aesthetic</h1>
    </div>
    <div className="right-side">
      <span className="footer-links" onClick={() => navigate('/services')}>Services</span>
      <span className="footer-links" onClick={() => navigate('/pricing')}>Pricing</span>
      <span className="footer-links" onClick={() => navigate('/portfolio')}>Portfolio</span>
      <div className="socials">
        <div className="social-logos" onClick={() => openInNewTab('https://www.facebook.com/clearweb.cloud')}><FontAwesomeIcon icon={['fab', 'facebook']} /></div>
        <div className="social-logos" onClick={() => openInNewTab('https://twitter.com/ClearwebCloud')}><FontAwesomeIcon icon={['fab', 'twitter']} /></div>
        <div className="social-logos" onClick={() => openInNewTab('https://www.instagram.com/clearweb.cloud/')}><FontAwesomeIcon icon={['fab', 'instagram']} /></div>
        <div className="social-logos" onClick={() => openInNewTab('https://www.youtube.com/channel/UCydv7oPwYWUDjQy7AXcMF8A')}><FontAwesomeIcon icon={['fab', 'youtube']} /></div>
      </div>
    </div>
  </div>
);}

export default Footer;
