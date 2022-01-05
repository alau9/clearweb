import React from "react";

import "./footer.styles.scss";

const Footer = () => (
  <div className="footer">
    <div className="left-side">
      <div className="footnote">Clear Web Ltd.</div>
      <h1>Where functionality meets the aesthetic</h1>
    </div>
    <div className="right-side">
      <span className="footer-links">Services</span>
      <span className="footer-links">Pricing</span>
      <span className="footer-links">Portfolio</span>
      <div className="socials">
        <span className="social-logos">FB</span>
        <span className="social-logos">IG</span>
        <span className="social-logos">Twitter</span>
        <span className="social-logos">YT</span>
      </div>
    </div>
  </div>
);

export default Footer;
