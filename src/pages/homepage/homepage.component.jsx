import React from "react";
import Banner from "../../components/banner/banner.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import Footer from "../../components/footer/footer.component";

import "./homepage.styles.scss";

const Homepage = () => (
  <div>
    <div
      className="background-img"
      style={{
        backgroundImage: `url("https://i.ibb.co/pj3zK41/Clear-Web-Homepage-Top-Banner.png")`,
      }}
    ></div>
    <Banner />
    <div className="content-container">
      <div className="content-section">
        <h3 className="content-title">
          4 things that make the Clear Web team special
        </h3>
        <h4 className="content">1. Diversified team of proven experts</h4>
        <div className="content">
          Whether you run a small, corporate, or ecommerce business, our team at
          Clear Web has you covered.{" "}
        </div>
        <h4 className="content">2. Commitment to meeting your deadlines</h4>
        <div className="content">
          Our team will work 7 days per week (excluding major holidays) to make
          sure your needs are met within a reasonable timeline.
        </div>
        <h4 className="content">3. Flexible development protocol</h4>
        <div className="content">
          No one business is the same. Our team will choose an effective
          development strategy to match your specific business needs.
        </div>
        <h4 className="content">4. Results driven</h4>
        <div className="content">
          Our team is focused on developing a website that drives new customers.
          leads, and sales.
        </div>
      </div>
    </div>
    <div className="portfolio-section">
      <h1 className="content">See Our Recent Work</h1>
      <div className="content">
        <CustomButton>Portfolio</CustomButton>
      </div>
    </div>
    <Banner />
    <Footer />
  </div>
);

export default Homepage;
