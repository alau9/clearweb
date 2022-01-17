import React from "react";
import ContactUs from "../../components/contact-us/contact-us.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { NavLink as Link } from "react-router-dom";

import "./seo.styles.scss";

const SEOPage = () => {
  return (
    <div className="seo-page">
      <h1 className="title">SEO</h1>
      <h1 className="title">CLEAR WEB VALUE: COMPETITIVE ADVANTAGE</h1>
      <Link to="/pricing">
        <CustomButton>Pricing </CustomButton>
      </Link>
      <div className="content-row">
        <div className="content-list" id="blue-content">
          <h1>Search Engine Optimization</h1>
          <div className="para">
            SEO is critical for search engines like Google and Bing to
            accurately understand the content on your website. Proper SEO leads
            to stronger SERPs and higher rankings on these search engines.{" "}
          </div>{" "}
          <ul>
            <li>Keyword research</li>
            <li>On-page/off-page SEO</li>
            <li>Structured data</li>
          </ul>
        </div>
        <div
          className="background-image"
          style={{
            backgroundImage: `url("https://i.ibb.co/yyx6dYQ/SEO-image-Clear-Web.png")`,
          }}
        ></div>
      </div>
      <div className="content-row">
        <div className="content-list">
          <h2 className="list-title">On-page SEO</h2>
          <ul>
            <li>Keyword optimization</li>
            <li>Metadata</li>
            <li>Internal links</li>
            <li>Alt tags</li>
          </ul>
        </div>
        <div className="content-list">
          <h2 className="list-title">Off-page SEO</h2>
          <ul>
            <li>Backlinks</li>
            <li>Authority</li>
            <li>Social reputation</li>
          </ul>
        </div>
        <div className="content-list">
          <h2 className="list-title">Technical SEO</h2>
          <ul>
            <li>Structured data</li>
            <li>Indexing</li>
            <li>Site speed</li>
          </ul>
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default SEOPage;
