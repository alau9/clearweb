import React from "react";
import Banner from "../../components/banner/banner.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import "./services.styles.scss";

const ServicesPage = () => (
  <div className="services-page">
    <h1>Services</h1>
    <div className="icon-container">
      <div>Developement</div>
      <div>Design</div>
      <div>SEO</div>
    </div>
    <Banner />
    <div className="icon-container">
        <div>Site Manager</div>
        <div>Social Media</div>
        <div>Custom Code</div>
    </div>
    <h1>Schedule a free consultation!</h1>
    <CustomButton>Contact Us</CustomButton>
  </div>
);

export default ServicesPage