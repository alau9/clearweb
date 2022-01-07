import React from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import { useNavigate } from "react-router-dom";

import "./homepage.styles.scss";

const Homepage = () => {
const navigate = useNavigate()
const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
   
 return(
  <div className="homepage">
    <div
      className="background-img"
      style={{
        backgroundImage: `url("https://i.ibb.co/pj3zK41/Clear-Web-Homepage-Top-Banner.png")`,
      }}
    ></div>
    <div className="icon-container">
      <div className="icon-section">
        <div className="icon-item" onClick={() => navigate('/developement')}>
          <img
            className="medium"
            src="https://i.ibb.co/GCWX24s/Development-Clear-Web.png"
            alt="Development-Clear-Web"
            border="0"
          />
        </div>
        <div className="icon-item" onClick={() => navigate('/design')}>
          <img
            className="medium"
            src="https://i.ibb.co/6tgtZnf/Design-Clear-Web.png"
            alt="Design-Clear-Web"
            border="0"
          />
        </div>
        <div className="icon-item" onClick={() => navigate('/seo')}>
          <img
            className="medium"
            src="https://i.ibb.co/G3Jmrsq/SEO-Clear-Web.png"
            alt="SEO-Clear-Web"
            border="0"
          />
        </div>
        <div className="icon-item" onClick={() => navigate('/sitemanager')}>
          <img
            className="medium"
            src="https://i.ibb.co/Qf06mmF/Site-Manager-Clear-Web-1.png"
            alt="Site-Manager-Clear-Web-1"
            border="0"
          />
        </div>
        <div className="icon-item" onClick={() => navigate('/social')}>
          <img
            className="medium"
            src="https://i.ibb.co/n7FKJcr/Social-Media-Clear-Web.png"
            alt="Social-Media-Clear-Web"
            border="0"
          />
        </div>
        <div className="icon-item" onClick={() => navigate('/custom')}>
          <img
            className="medium"
            src="https://i.ibb.co/RYcfR5T/Custom-Code-Clear-Web.png"
            alt="Custom-Code-Clear-Web"
            border="0"
          />
        </div>
      </div>
    </div>
    <div className="content-container">
      <div className="content-section">
        <h3 className="content-title">
          4 things that make the Clear Web team special
        </h3>
        <h4 className="content">1. Diversified team of proven experts</h4>
        <div className="content">
          Whether you run a small, corporate, or ecommerce business, our team at
          Clear Web has you covered.{" "}
        </div>
        <h4 className="content">2. Commitment to meeting your deadlines</h4>
        <div className="content">
          Our team will work 7 days per week (excluding major holidays) to make
          sure your needs are met within a reasonable timeline.
        </div>
        <h4 className="content">3. Flexible development protocol</h4>
        <div className="content">
          No one business is the same. Our team will choose an effective
          development strategy to match your specific business needs.
        </div>
        <h4 className="content">4. Results driven</h4>
        <div className="content">
          Our team is focused on developing a website that drives new customers.
          leads, and sales.
        </div>
      </div>
    </div>
    <div className="portfolio-section">
      <h1 className="content">See Our Recent Work!</h1>
      <div className="icon-section">
        <div className="icon-item" onClick={() => openInNewTab('https://hoochybooch.com/')}>
          <img
            className="medium"
            src="https://i.ibb.co/ZKCW0jP/Hoochy-Booch-Kombucha-Logo.png"
            alt="Hoochy-Booch-Kombucha-Logo"
            border="0"
          />
        </div>
        <div className="icon-item" onClick={() => openInNewTab('https://festivalshred.com/')}>
          <img
            className="medium"
            src="https://i.ibb.co/x1Szz8p/Festival-Shred-Logo.png"
            alt="Festival-Shred-Logo"
            border="0"
          />
        </div>
        <div className="icon-item" onClick={() => openInNewTab('https://floathouse.ca/locations/vancouver')}>
          <img
            className="medium"
            src="https://i.ibb.co/X5GjVCC/Float-House-Logo.png"
            alt="Float-House-Logo"
            border="0"
          />
        </div>
        <div className="icon-item" onClick={() => openInNewTab('https://utterlycrypto.com/')}>
          <img
            className="medium"
            src="https://i.ibb.co/S6rHhD8/Utterly-Crypto-Logo.png"
            alt="Utterly-Crypto-Logo"
            border="0"
          />
        </div>
        <div className="icon-item" onClick={() => openInNewTab('https://plentyhardkombucha.com/')}>
          <img
            className="medium"
            src="https://i.ibb.co/JnzznN5/Plenty-Hard-Kombucha-Logo.png"
            alt="Plenty-Hard-Kombucha-Logo"
            border="0"
          />
        </div>
        <div className="icon-item" onClick={() => openInNewTab('https://justgosmoothie.com/')}>
          <img
            className="medium"
            src="https://i.ibb.co/vxh2yHy/Just-Go-Smoothie-logo-CW-sized.png"
            alt="Just-Go-Smoothie-logo-CW-sized"
            border="0"
          />
        </div>
      </div>
      <div className="content" >
        <div ><CustomButton onClick={() => navigate('/portfolio')}>Portfolio</CustomButton></div>
      </div>
    </div>
  </div>
);}

export default Homepage;
