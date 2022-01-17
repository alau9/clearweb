import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import { ReactComponent as Logo } from "../../assets/clear-web-logo.svg";
import { NavLink as Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Nav, Container } from "react-bootstrap";

import "./header.styles.scss";

const Header = () => {
  const navigate = useNavigate();
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const [expanded, setExpanded] = useState(false);


  return (
    <Navbar className="header"  expand="xl" expanded={expanded}>
      <Container fluid>
        <Navbar
          className="header-items left-side"
          onClick={() => navigate("/")}
        >
          <Logo className="logo" />
        </Navbar>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        >
          {expanded ? (
            <FontAwesomeIcon icon="times" />
          ) : (
            <FontAwesomeIcon icon="bars" />
          )}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="nav-container">
          <Nav className="justify-content-end right-side">
            <Nav.Item className="header-items">
              <Link to="/services" onClick={() => setExpanded(false)}>
                Services
              </Link>
            </Nav.Item>
            <Nav.Item className="header-items">
              <Link to="/about" onClick={() => setExpanded(false)}>
                About
              </Link>
            </Nav.Item>
            <Nav.Item
              className="header-items"
              onClick={() => navigate("/portfolio")}
            >
              <Link to="/portfolio" onClick={() => setExpanded(false)}>
                Portfolio
              </Link>
            </Nav.Item>
            <Nav className="brand-logo">
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
                onClick={() =>
                  openInNewTab("https://twitter.com/ClearwebCloud")
                }
              >
                <FontAwesomeIcon icon={["fab", "twitter"]} />
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
            </Nav>
            <Nav.Item className="button-container ">
              <Link to="/pricing" onClick={() => setExpanded(false)}>
                <CustomButton>Pricing </CustomButton>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
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
