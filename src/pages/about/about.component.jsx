import React from "react";

import "./about.styles.scss";

const AboutPage = () => (
  <div className="about-page">
    <h1 className="title">About Us</h1>
    <div className="content-row">
      <div className="content-col">
        <h1 className="content-title">Clear Web Team</h1>
        <br />
        <br />
        <div className="content">
          We have years of experience building and optimizing the online
          presence of various businesses, whether they are Small, Corporate, or
          eCommerce.
        <br />
        <br />
          Clear Web offers fully customizable web development aimed at providing
          your business with the functionality and aesthetic design it needs to
          compete in your specific industry.{" "}
        <br />
        <br />
          We have a diverse team of experts ready to help with any additional
          business needs, whether that is website management, social media, or
          custom code integrations.
        <br />
        <br />
        We look forward to optimizing your business!
        <br />
        <br />
            Sincerely,
            <br />
            <br />
            Clear Web Team
            <br />
            Clear Web Ltd.
        </div>
      </div>
      <div className="content-col">
        <h2>Email</h2>
        <div>info@clearweb.cloud</div>
        <br />
        <h2>Phone</h2>
        <div>+1 (604) 356-8021</div>
      </div>
    </div>
  </div>
);

export default AboutPage