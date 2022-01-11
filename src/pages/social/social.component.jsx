import React from "react";
import ContactUs from "../../components/contact-us/contact-us.component";

import "./social.styles.scss";

const SocialPage = () => (
  <div className="social-page">
    <h1 className="title">Social Media</h1>
    <h1 className="title">CLEAR WEB VALUE: CONSISTENCY</h1>
    <div>See Pricing Below</div>
    <div className="row">
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
