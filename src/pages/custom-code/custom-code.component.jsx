import React from "react";
import ContactUs from "../../components/contact-us/contact-us.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { NavLink as Link } from "react-router-dom";

import "./custom-code.styles.scss";

const CustomCodePage = () => (
  <div className="custom-code">
    <h1 className="title">Custom Code</h1>
    <h1 className="title">CLEAR WEB VALUE: UNIQUENESS</h1>
    <Link to="/pricing">
      <CustomButton>Pricing </CustomButton>
    </Link>
    <div className="content-row">
      <div className="content-list" id="blue-content">
        <h1>Custom Code Integrations</h1>
        <div className="para">
          Want to include a special feature on your website? Clear Web utilizes
          html, css, and javascript to implement unique customizations during
          the web development process.{" "}
        </div>{" "}
        <ul>
          <li>In-house code creation</li>
          <li>Custom code injections</li>
          <li>Custom Google Maps</li>
        </ul>
      </div>
      <div
        className="background-image"
        style={{
          backgroundImage: `url("https://i.ibb.co/8c2BB4d/Custome-Code-image-Clear-Web-1.png")`,
        }}
      ></div>
    </div>
    <div className="content-row">
      <div className="content-list">
        <h2 className="list-title">Custom Code</h2>
        <h2 className="list-title">$TBD</h2>
        <ul>
          <li>Price is built into your web developement quote</li>
          <li>Depends on the complexity of the code</li>
        </ul>
      </div>
      <div className="content-list">
        <h2 className="list-title">Custom Map</h2>
        <h2 className="list-title">$150+</h2>
        <ul>
          <li className="foot-note">Google Maps API setup</li>
          <li className="foot-note">Code creation</li>
          <li className="foot-note">
            Price depends on the number of locations required
          </li>
        </ul>
      </div>
    </div>
    <ContactUs />
  </div>
);

export default CustomCodePage;
