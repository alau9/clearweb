import React from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import { useNavigate } from "react-router-dom";
import {ReactComponent as DevelopementImage} from '../../assets/clear-web-development.svg'
import {ReactComponent as DesignImage} from '../../assets/clear-web-design.svg'
import {ReactComponent as SeoImage} from '../../assets/clear-web-seo.svg'
import {ReactComponent as SiteImage} from '../../assets/clear-web-site-manager.svg'

import "./homepage.styles.scss";

const Homepage = () => {
  const navigate = useNavigate();
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="homepage">
      <div
        className="background-img"
        style={{
          backgroundImage: `url("https://i.ibb.co/pj3zK41/Clear-Web-Homepage-Top-Banner.png")`,
        }}
      ></div>
      <div className="icon-container">
        <div className="icon-section">
          <DevelopementImage
            onClick={() => navigate("/pricing")}
            className="medium"
            alt="Development-Clear-Web"
          />

          <DesignImage
            onClick={() => navigate("/pricing")}
            className="medium"
            alt="Design-Clear-Web"
            border="0"
          />

          <SeoImage
            onClick={() => navigate("/seo")}
            className="medium"
            alt="SEO-Clear-Web"
            border="0"
          />
          <SiteImage
            onClick={() => navigate("/site-manager")}
            className="medium"
            alt="Site-Manager-Clear-Web-1"
            border="0"
          />
          <img
            onClick={() => navigate("/social")}
            className="medium"
            src="https://i.ibb.co/n7FKJcr/Social-Media-Clear-Web.png"
            alt="Social-Media-Clear-Web"
            border="0"
          />
          <img
            onClick={() => navigate("/custom")}
            className="medium"
            src="https://i.ibb.co/RYcfR5T/Custom-Code-Clear-Web.png"
            alt="Custom-Code-Clear-Web"
            border="0"
          />
        </div>
      </div>
      <div className="content-container">
        <div className="content-section">
          <h3 className="content-title">
            4 things that make the Clear Web team special
          </h3>
          <h4 className="content">1. Diversified team of proven experts</h4>
          <div className="content">
            Whether you run a small, corporate, or ecommerce business, our team
            at Clear Web has you covered.{" "}
          </div>
          <h4 className="content">2. Commitment to meeting your deadlines</h4>
          <div className="content">
            Our team will work 7 days per week (excluding major holidays) to
            make sure your needs are met within a reasonable timeline.
          </div>
          <h4 className="content">3. Flexible development protocol</h4>
          <div className="content">
            No one business is the same. Our team will choose an effective
            development strategy to match your specific business needs.
          </div>
          <h4 className="content">4. Results driven</h4>
          <div className="content">
            Our team is focused on developing a website that drives new
            customers. leads, and sales.
          </div>
        </div>
      </div>
      <div className="portfolio-section">
        <h1 className="content">See Our Recent Work!</h1>
      </div>
      <div className="content">
        <div>
          <CustomButton onClick={() => navigate("/portfolio")}>
            Portfolio
          </CustomButton>
        </div>
      </div>
      <div className="brand-container">
        <div className="brand-section">
          <img
            onClick={() => openInNewTab("https://hoochybooch.com/")}
            className="medium"
            src="https://i.ibb.co/ZKCW0jP/Hoochy-Booch-Kombucha-Logo.png"
            alt="Hoochy-Booch-Kombucha-Logo"
            border="0"
          />

          <img
            onClick={() => openInNewTab("https://festivalshred.com/")}
            className="medium"
            src="https://i.ibb.co/x1Szz8p/Festival-Shred-Logo.png"
            alt="Festival-Shred-Logo"
            border="0"
          />

          <img
            onClick={() =>
              openInNewTab("https://floathouse.ca/locations/vancouver")
            }
            className="medium"
            src="https://i.ibb.co/X5GjVCC/Float-House-Logo.png"
            alt="Float-House-Logo"
            border="0"
          />

          <img
            onClick={() => openInNewTab("https://utterlycrypto.com/")}
            className="medium"
            src="https://i.ibb.co/S6rHhD8/Utterly-Crypto-Logo.png"
            alt="Utterly-Crypto-Logo"
            border="0"
          />

          <img
            onClick={() => openInNewTab("https://plentyhardkombucha.com/")}
            className="medium"
            src="https://i.ibb.co/JnzznN5/Plenty-Hard-Kombucha-Logo.png"
            alt="Plenty-Hard-Kombucha-Logo"
            border="0"
          />

          <img
            onClick={() => openInNewTab("https://justgosmoothie.com/")}
            className="medium"
            src="https://i.ibb.co/vxh2yHy/Just-Go-Smoothie-logo-CW-sized.png"
            alt="Just-Go-Smoothie-logo-CW-sized"
            border="0"
          />
        </div>
      </div>

    </div>
  );
};

export default Homepage;
