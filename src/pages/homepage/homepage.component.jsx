import React from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import { useNavigate } from "react-router-dom";
import { default as developement } from "../../assets/clear-web-development.svg";
import { default as design } from "../../assets/clear-web-design.svg";
import { default as seo } from "../../assets/clear-web-seo.svg";
import { default as site } from "../../assets/clear-web-site-manager.svg";
import { default as social } from "../../assets/clear-web-social-media.svg";
import { default as custom } from "../../assets/clear-web-custom-code.svg";
import { default as hoochybooch } from "../../assets/hoochy-booch-kombucha-logo.svg";
import { default as festivalshred } from "../../assets/festival-shred-logo.svg";
import { default as floathouse } from "../../assets/float-house-logo.svg";
import { default as utterlycrypto } from "../../assets/utterly-crypto-logo.svg";
import { default as plentyhardkombucha } from "../../assets/plenty-hard-kombucha-logo.svg";
import { default as justgosmoothie } from "../../assets/just-go-logo.svg";
import { default as frame } from "../../assets/clear-web-frame.svg";

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
          <img
            onClick={() => navigate("/pricing")}
            src={developement}
            className="medium"
            alt="Development-Clear-Web"
          />

          <img
            onClick={() => navigate("/pricing")}
            src={design}
            className="medium"
            alt="Design-Clear-Web"
            border="0"
          />

          <img
            onClick={() => navigate("/seo")}
            src={seo}
            className="medium"
            alt="SEO-Clear-Web"
            border="0"
          />
          <img
            onClick={() => navigate("/site-manager")}
            src={site}
            className="medium"
            alt="Site-Manager-Clear-Web-1"
            border="0"
          />
          <img
            onClick={() => navigate("/social")}
            className="medium"
            src={social}
            alt="Social-Media-Clear-Web"
            border="0"
          />
          <img
            onClick={() => navigate("/custom")}
            className="medium"
            src={custom}
            alt="Custom-Code-Clear-Web"
            border="0"
          />
        </div>
      </div>
      <div className="content-container" style={{
            backgroundImage: `url("https://i.ibb.co/XjT3M1L/Clear-Web-Homepage-Banner-2.png")`,
          }}>
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
            src={hoochybooch}
            alt="Hoochy-Booch-Kombucha-Logo"
            border="0"
            id="Hoochy-Booch"
          />

          <img
            onClick={() => openInNewTab("https://festivalshred.com/")}
            className="medium"
            src={festivalshred}
            alt="Festival-Shred-Logo"
            border="0"
          />

          <img
            onClick={() =>
              openInNewTab("https://floathouse.ca/locations/vancouver")
            }
            className="medium"
            src={floathouse}
            alt="Float-House-Logo"
            border="0"
          />

          <img
            onClick={() => openInNewTab("https://utterlycrypto.com/")}
            className="medium"
            src={utterlycrypto}
            alt="Utterly-Crypto-Logo"
            id="Utterly-Crypto" 
            border="0"
          />

          <img
            onClick={() => openInNewTab("https://plentyhardkombucha.com/")}
            className="medium"
            id="Plenty-Hard"
            src={plentyhardkombucha}
            alt="Plenty-Hard-Kombucha-Logo"
            border="0"
          />

          <img
            onClick={() => openInNewTab("https://justgosmoothie.com/")}
            className="medium"
            id="Just-Go"
            src={justgosmoothie}
            alt="Just-Go-Smoothie-logo-CW-sized"
            border="0"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
