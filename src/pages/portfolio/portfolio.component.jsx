import React from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import { useNavigate } from "react-router-dom";

import "./portfolio.styles.scss";

const PortfolioPage = () => {
  const navigate = useNavigate();
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="portfolio-page">
      <div className="content-container">
        <h3 className="title">Featured Client List</h3>
        <div className="content-section">
          <h4>Hoochy 'Booch Kombucha</h4>
          <div>Deliverables:</div>
          <ul>
            <li>Web Developement</li>
            <li>Graphic Design</li>
            <li>Advanced SEO</li>
            <li>Website Management</li>
            <li>Business Developement and Strategy</li>
          </ul>
          <CustomButton onClick={() => openInNewTab('https://hoochybooch.com/')}>
            Website
        </CustomButton>
          <h4>Float House Gastown</h4>
          <div>Deliverables:</div>
          <ul>
            <li>Web Developement</li>
            <li>Graphic Design</li>
            <li>Advanced SEO</li>
            <li>Website Management</li>
            <li>Business Developement and Strategy</li>
          </ul>
          <CustomButton onClick={() => openInNewTab('https://floathouse.ca/locations/vancouver')}>
            Website
        </CustomButton>
        </div>
        <h3 className="title">Schedule a free consultation!</h3>
        <CustomButton onClick={() => navigate("/contact")}>
          Contact Us
        </CustomButton>
        <div className="content-section">
          <h4>Festival Shred</h4>
          <div>Deliverables:</div>
          <ul>
            <li>Web Developement</li>
            <li>Graphic Design</li>
            <li>Advanced SEO</li>
            <li>Social Media Management</li>
            <li>Website Management</li>
            <li>Business Developement and Strategy</li>
          </ul>
          <CustomButton onClick={() => openInNewTab('https://festivalshred.com/')}>
            Website
        </CustomButton>
          <h4>Plenty Hard Kombucha</h4>
          <div>Deliverables:</div>
          <ul>
            <li>Web Developement</li>
            <li>Advanced SEO</li>
            <li>Website Management</li>
          </ul>
          <CustomButton onClick={() => openInNewTab('https://plentyhardkombucha.com/')}>
            Website
        </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
