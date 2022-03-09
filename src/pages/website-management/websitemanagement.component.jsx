import React from "react";
import ContactUs from "../../components/contact-us/contact-us.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { NavLink as Link } from "react-router-dom";
import "./websitemanagement.styles.scss";

const WebsiteManagementPage = () => {
  return (
    <div className="website-management">
      <h1 className="title">Site Management</h1>
      <h1 className="title"><b>CLEAR WEB VALUE:</b> DEDICATION</h1>
      <Link to="/pricing">
        <CustomButton>Pricing </CustomButton>
      </Link>
      <div className="content-row">
        <div className="content-list" id="blue-content">
          <h1>Website Management</h1>
          <div className="para">
            Don’t have time to run your website? Busy running your business? Not
            to worry, Clear Web can help! We offer active website management as
            an add-on to your foundations package.{" "}
          </div>{" "}
          <ul>
            <li>Content management</li>
            <li>Website updates</li>
            <li>Active customizations</li>
          </ul>
        </div>
        <div
          className="background-image"
          style={{
            backgroundImage: `url("https://i.ibb.co/8djqbHR/Website-Management-Image-Clear-Web.png")`,
          }}
        ></div>
      </div>
      <div className="content-row">
        <div className="content-list">
          <h2 className="list-title">Basic Web Management</h2>
          <h2 className="list-title-pricing">$250/mo</h2>
          <ul>
            <li>Up to 5 hours/month</li>
          </ul>
        </div>
        <div className="content-list">
          <h2 className="list-title">Unlimited Web Management</h2>
          <h2 className="list-title-pricing">$500+/mo</h2>
          <ul>
            <li className="foot-note">Unlimited means unlimited =)</li>
          </ul>
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default WebsiteManagementPage;
