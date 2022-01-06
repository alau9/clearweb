import React from "react";
import Banner from "../../components/banner/banner.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import "./services.styles.scss";

const ServicesPage = () => (
  <div className="services-page">
    <div className="content-container">
      <h3 className="title">Services</h3>
      <div className="icon-container">
        <div className="icon-item">
          <img
            src="https://i.ibb.co/GCWX24s/Development-Clear-Web.png"
            alt="Development-Clear-Web"
            border="0"
          />
        </div>
        <div className="icon-item">
          <img
            src="https://i.ibb.co/6tgtZnf/Design-Clear-Web.png"
            alt="Design-Clear-Web"
            border="0"
          />
        </div>
        <div className="icon-item">
          <img
            src="https://i.ibb.co/G3Jmrsq/SEO-Clear-Web.png"
            alt="SEO-Clear-Web"
            border="0"
          />
        </div>
      </div>
      <div className="banner">Add-Ons</div>
      <div className="icon-container">
        <div className="icon-item">
          <img
            src="https://i.ibb.co/Qf06mmF/Site-Manager-Clear-Web-1.png"
            alt="Site-Manager-Clear-Web-1"
            border="0"
          />
        </div>
        <div className="icon-item">
          <img
            src="https://i.ibb.co/n7FKJcr/Social-Media-Clear-Web.png"
            alt="Social-Media-Clear-Web"
            border="0"
          />
        </div>
        <div className="icon-item">
          <img
            src="https://i.ibb.co/RYcfR5T/Custom-Code-Clear-Web.png"
            alt="Custom-Code-Clear-Web"
            border="0"
          />
        </div>
      </div >
      <h3 className="title">Schedule a free consultation!</h3>
      <CustomButton>Contact Us</CustomButton>
    </div>
  </div>
);

export default ServicesPage;
