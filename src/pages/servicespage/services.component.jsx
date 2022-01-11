import React from "react";
import CustomButton from "../../components/custom-button/custom-button.component";

import { useNavigate } from "react-router-dom";

import "./services.styles.scss";
import ContactUs from "../../components/contact-us/contact-us.component";

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="services-page">
      <div className="content-container">
        <h3 className="title">Services</h3>
        <div className="icon-container">
          <img
          onClick={() => navigate("/pricing")}
            className="image"
            src="https://i.ibb.co/GCWX24s/Development-Clear-Web.png"
            alt="Development-Clear-Web"
            border="0"
          />
          <img
           onClick={() => navigate("/pricing")}
            className="image"
            src="https://i.ibb.co/6tgtZnf/Design-Clear-Web.png"
            alt="Design-Clear-Web"
            border="0"
          />
          <img
           onClick={() => navigate("/seo")}
            className="image"
            src="https://i.ibb.co/G3Jmrsq/SEO-Clear-Web.png"
            alt="SEO-Clear-Web"
            border="0"
          />
        </div>
        <div className="banner">Add-Ons</div>
        <div className="icon-container">
          <img
           onClick={() => navigate("/site-manager")}
            className="image"
            src="https://i.ibb.co/Qf06mmF/Site-Manager-Clear-Web-1.png"
            alt="Site-Manager-Clear-Web-1"
            border="0"
          />
          <img
            onClick={() => navigate("/social")}
            className="image"
            src="https://i.ibb.co/n7FKJcr/Social-Media-Clear-Web.png"
            alt="Social-Media-Clear-Web"
            border="0"
          />
          <img
            onClick={() => navigate("/custom")}
            className="image"
            src="https://i.ibb.co/RYcfR5T/Custom-Code-Clear-Web.png"
            alt="Custom-Code-Clear-Web"
            border="0"
          />
        </div>
        <ContactUs />
      </div>
    </div>
  );
};

export default ServicesPage;
