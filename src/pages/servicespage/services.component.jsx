import React from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import {default as developement} from '../../assets/clear-web-development.svg'
import {default as design} from '../../assets/clear-web-design.svg'
import {default as seo} from '../../assets/clear-web-seo.svg'
import {default as site} from '../../assets/clear-web-site-manager.svg'
import {default as social} from '../../assets/clear-web-social-media.svg'
import {default as custom} from '../../assets/clear-web-custom-code.svg'

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
            src={developement}
            alt="Development-Clear-Web"
            border="0"
          />
          <img
           onClick={() => navigate("/pricing")}
            className="image"
            src={design}
            alt="Design-Clear-Web"
            border="0"
          />
          <img
           onClick={() => navigate("/seo")}
            className="image"
            src={seo}
            alt="SEO-Clear-Web"
            border="0"
          />
        </div>
        <div className="banner">Add-Ons</div>
        <div className="icon-container">
          <img
           onClick={() => navigate("/site-manager")}
            className="image"
            src={site}
            alt="Site-Manager-Clear-Web-1"
            border="0"
          />
          <img
            onClick={() => navigate("/social")}
            className="image"
            src={social}
            alt="Social-Media-Clear-Web"
            border="0"
          />
          <img
            onClick={() => navigate("/custom")}
            className="image"
            src={custom}
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
