import React from "react";
import ContactUs from "../../components/contact-us/contact-us.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { NavLink as Link } from "react-router-dom";

import "./social.styles.scss";

const SocialPage = () => (
  <div className="social-page">
    <h1 className="title">Social Media</h1>
    <h1 className="title">CLEAR WEB VALUE: CONSISTENCY</h1>
    <Link to="/pricing">
      <CustomButton>Pricing </CustomButton>
    </Link>
    <div className="content-row">
      <div className="content-list" id="blue-content">
        <h1>Social Media Management</h1>
        <div className="para">
          A social media specialist from Clear Web will manage & optimize your
          social media channels: Facebook & Instagram{" "}
        </div>{" "}
        <ul>
          <li>Social media audit & optimization</li>
          <li>Weekly posts & stories</li>
          <li>Engagement</li>
        </ul>
      </div>
      <div
        className="background-image"
        style={{
          backgroundImage: `url("https://i.ibb.co/BTryxJ6/Social-Media-Management-image-Clear-Web-1.png")`,
        }}
      ></div>
    </div>
    <div className="content-row">
      <div className="content-list">
        <h2 className="list-title">Social Lite</h2>
        <h2 className="list-title">$500/mo</h2>
        <ul>
          <li className="foot-note">Social media audit</li>
          <li className="foot-note">Management & engagement</li>
          <li className="foot-note">Custom graphic design</li>
          <li className="foot-note">8 post/mo</li>
        </ul>
      </div>
      <div className="content-list">
        <h2 className="list-title">Social Plus</h2>
        <h2 className="list-title">$850/mo</h2>
        <ul>
          <li className="foot-note">Everything from Social Lite</li>
          <li className="foot-note">16 posts / mo</li>
        </ul>
      </div>
      <div className="content-list">
        <h2 className="list-title">Social Elite</h2>
        <h2 className="list-title">$1200/mo</h2>
        <ul>
          <li className="foot-note">Everything from Social Plus</li>
          <li className="foot-note">Professional photography</li>
        </ul>
      </div>
    </div>
    <ContactUs />
  </div>
);

export default SocialPage;
