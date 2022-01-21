import React from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import { useNavigate } from "react-router-dom";

import "./portfolio.styles.scss";
import ContactUs from "../../components/contact-us/contact-us.component";

const PortfolioPage = () => {
  const navigate = useNavigate();
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="portfolio-page">
      <h3 className="title">Featured Client List</h3>
      <div className="content-row">
        <div
          className="background-image"
          style={{
            backgroundImage: `url("https://i.ibb.co/SKJKh1F/Clear-Web-Client-Hoochy-Booch-Kombucha.png")`,
          }}
        ></div>
        <div className="content-list">
          <h3 className="content-title">Hoochy 'Booch Kombucha</h3>
          <div className="list-title">Deliverables:</div>
          <ul>
            <li>Web Developement</li>
            <li>Graphic Design</li>
            <li>Advanced SEO</li>
            <li>Website Management</li>
            <li>Business Developement and Strategy</li>
          </ul>
          <CustomButton
            onClick={() => openInNewTab("https://hoochybooch.com/")}
          >
            Website
          </CustomButton>
        </div>
      </div>
      <div className="content-row">
        <div
          className="background-image"
          style={{
            backgroundImage: `url("https://i.ibb.co/SKJKh1F/Clear-Web-Client-Hoochy-Booch-Kombucha.png")`,
          }}
        ></div>
        <div className="content-list">
          <h3 className="content-title">Float House Gastown</h3>
          <div className="list-title">Deliverables:</div>
          <ul>
            <li>Web Developement</li>
            <li>Graphic Design</li>
            <li>Advanced SEO</li>
            <li>Website Management</li>
            <li>Business Developement and Strategy</li>
          </ul>
          <CustomButton
            onClick={() =>
              openInNewTab("https://floathouse.ca/locations/vancouver")
            }
          >
            Website
          </CustomButton>
        </div>
      </div>
      <ContactUs />
      <div className="content-row">
        <div
          className="background-image"
          style={{
            backgroundImage: `url("https://i.ibb.co/SKJKh1F/Clear-Web-Client-Hoochy-Booch-Kombucha.png")`,
          }}
        ></div>
        <div className="content-list">
          <h3 className="content-title">Festival Shred</h3>
          <div className="list-title">Deliverables:</div>
          <ul>
            <li>Web Developement</li>
            <li>Graphic Design</li>
            <li>Advanced SEO</li>
            <li>Social Media Management</li>
            <li>Website Management</li>
            <li>Business Developement and Strategy</li>
          </ul>
          <CustomButton
            onClick={() => openInNewTab("https://festivalshred.com/")}
          >
            Website
          </CustomButton>
        </div>
      </div>
      <div className="content-row">
        <div
          className="background-image"
          style={{
            backgroundImage: `url("https://i.ibb.co/SKJKh1F/Clear-Web-Client-Hoochy-Booch-Kombucha.png")`,
          }}
        ></div>
        <div className="content-list">
          <h3 className="content-title">Plenty Hard Kombucha</h3>
          <div className="list-title">Deliverables:</div>
          <ul>
            <li>Web Developement</li>
            <li>Advanced SEO</li>
            <li>Website Management</li>
          </ul>
          <CustomButton
            onClick={() => openInNewTab("https://plentyhardkombucha.com/")}
          >
            Website
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
