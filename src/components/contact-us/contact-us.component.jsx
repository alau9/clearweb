import React from "react";
import CustomButton from "../custom-button/custom-button.component";

import { useNavigate } from "react-router-dom";

import "./contact-us.styles.scss";

const ContactUs = () => {

    const navigate = useNavigate();
    
  return (
    <div className="contact">
      <h3 className="title">Schedule a free consultation!</h3>
      <CustomButton onClick={() => navigate("/contact")}>
        Contact Us
      </CustomButton>
    </div>
  );
};

export default ContactUs
