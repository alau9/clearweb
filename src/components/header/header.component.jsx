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
  const [top, setSticky] = useState(false);


  return (
    <Navbar className={`header ${expanded}` }  expand="xl" expanded={expanded} sticky={top}>
      <Container fluid>
        <Navbar
          className="header-items left-side"
          onClick={() => navigate("/") }
          
        >
          <Logo className="logo"
           onClick={() => {setExpanded(false); setSticky(false)}}/>
        </Navbar>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => {setExpanded(expanded ? false : "expanded"); setSticky(top ? false: "top")}}
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
              <Link to="/services" onClick={() => {setExpanded(expanded ? false : "expanded"); setSticky(false)}}>
                Services
              </Link>
            </Nav.Item>
            <Nav.Item
              className="header-items"
              onClick={() => navigate("/portfolio")}
            >
              <Link to="/portfolio"onClick={() => {setExpanded(expanded ? false : "expanded"); setSticky(false)}}>
                Portfolio
              </Link>
            </Nav.Item>
            <Nav.Item className="header-items">
              <Link to="/about" onClick={() => {setExpanded(expanded ? false : "expanded"); setSticky(false)}}>
                About
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


