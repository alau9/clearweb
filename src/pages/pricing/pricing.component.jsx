import React from "react";
import CustomButton from "../../components/custom-button/custom-button.component";

import { useNavigate } from "react-router-dom";
import "./pricing.styles.scss";
import ContactUs from "../../components/contact-us/contact-us.component";

const PricingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="pricing-page">
      <h1 className="title">Pricing</h1>
      <h1 className="title">CLEAR WEB VALUE: TRANSPARENCY</h1>
      <div className="main-content">
        There are many variables that affect the price of your website. This
        includes but is not limited to the number of unique landing pages,
        content creation, custom code integrations, and more!
      </div>
      <div className="content-footnote">
        Below we have indicated our starting price.
      </div>
      <h2 className="title">All-Inclusive Website Package</h2>
      <h1 className="price">$2500+</h1>
      <h2 className="title">Whats Include?</h2>
      <div>
        <h4 className="content-title">Web Developement</h4>
        <div className="content">Custom web development</div>
        <div className="content">Unique landing pages</div>
        <div className="content">Mobile friendly integration</div>
      </div>
      <div>
        <h4 className="content-title">Web Design</h4>
        <div className="content">UX design</div>
        <div className="content">Custom graphic design</div>
        <div className="content">Brand aesthetic integration</div>
      </div>
      <div>
        <h4 className="content-title">SEO</h4>
        <div className="content">On-page SEO</div>
        <div className="content">Off-page SEO</div>
        <div className="content">Technical SEO</div>
      </div>
      <div>
        <ContactUs />
      </div>
      <div className="image-container">
        <img
          onClick={() => navigate("/site-manager")}
          className="image"
          src="https://i.ibb.co/vw9pqpn/Web-manager-add-on-Clear-Web.png"
          alt="Web-manager-add-on-Clear-Web"
          border="0"
        />
        <img
          onClick={() => navigate("/social")}
          className="image"
          src="https://i.ibb.co/2gjQvN9/Social-media-add-on-Clear-Web.png"
          alt="Social-media-add-on-Clear-Web"
          border="0"
        />
      </div>
    </div>
  );
};

export default PricingPage;
