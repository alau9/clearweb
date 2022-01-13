import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { NavLink as Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import "./header.styles.scss";

const Header = () => {
  const navigate = useNavigate();
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Navbar className="header" expand="xl">
      <Navbar className="header-items left-side" onClick={() => navigate("/")}>
        <img
          className="logo"
          src="https://i.ibb.co/LdMFpcL/Clear-Web-Logo.png"
          alt="Clear-Web-Logo"
          border="0"
        />
      </Navbar>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="right-side" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end right-side">
          <Nav.Item
            className="header-items"
            onClick={() => navigate("/services")}
          >
            Services
          </Nav.Item>
          <Nav.Item className="header-items" onClick={() => navigate("/about")}>
            About
          </Nav.Item>
          <Nav.Item
            className="header-items"
            onClick={() =>
              openInNewTab("https://www.facebook.com/clearweb.cloud")
            }
          >
            <FontAwesomeIcon icon={["fab", "facebook"]} />
          </Nav.Item>
          <Nav.Item
            className="header-items"
            onClick={() => openInNewTab("https://twitter.com/ClearwebCloud")}
          >
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </Nav.Item>
          <Nav.Item
            className="header-items"
            onClick={() => navigate("/portfolio")}
          >
            Portfolio
          </Nav.Item>
          <Nav.Item
            className="header-items"
            onClick={() =>
              openInNewTab("https://www.instagram.com/clearweb.cloud/")
            }
          >
        <FontAwesomeIcon icon={["fab", "instagram"]} />
          </Nav.Item>
          <Nav.Item
            className="header-items"
            onClick={() =>
              openInNewTab(
                "https://www.youtube.com/channel/UCydv7oPwYWUDjQy7AXcMF8A"
              )
            }
          >
            <FontAwesomeIcon icon={["fab", "youtube"]} />
          </Nav.Item>
          <Nav.Item className="button-container">
            <CustomButton onClick={() => navigate("/pricing")}>
              Pricing
            </CustomButton>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

// {<div className="header">
// <div className="header-items left-side" onClick={() => navigate('/')}><img className="logo" src="https://i.ibb.co/LdMFpcL/Clear-Web-Logo.png" alt="Clear-Web-Logo" border="0" /></div>
// <div className="right-side">
//     <div className="header-items" onClick={() => navigate('/services')}>Services</div>
//     <div className="header-items" onClick={() => navigate('/portfolio')} >Portfolio</div>
//     <div className="header-items" onClick={() => navigate('/about')}>About</div>
//     <div className="header-items" onClick={() => openInNewTab('https://www.facebook.com/clearweb.cloud')}><FontAwesomeIcon icon={['fab', 'facebook']} /></div>
//     <div className="header-items" onClick={() => openInNewTab('https://twitter.com/ClearwebCloud')}><FontAwesomeIcon icon={['fab', 'twitter']} /></div>
//     <div className="header-items" onClick={() => openInNewTab('https://www.instagram.com/clearweb.cloud/')}><FontAwesomeIcon icon={['fab', 'instagram']} /></div>
//     <div className="header-items" onClick={() => openInNewTab('https://www.youtube.com/channel/UCydv7oPwYWUDjQy7AXcMF8A')}><FontAwesomeIcon icon={['fab', 'youtube']} /></div>
// </div>
// <div className="button-container"><CustomButton onClick={() => navigate('/pricing')}>Pricing</CustomButton></div>
// </div>
// )}
