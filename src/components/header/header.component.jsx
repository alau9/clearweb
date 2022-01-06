import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { useNavigate } from "react-router-dom";

import "./header.styles.scss"

const Header = () => {
    const navigate = useNavigate()
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

return(
    <div className="header">
        <span className="header-items left-side" onClick={() => navigate('/')}>LOGO</span>
        <span className="header-items right-side" onClick={() => navigate('/services')}>SERVICES</span>
        <span className="header-items" onClick={() => navigate('/portfolio')} >PORTFOLIO</span>
        <span className="header-items" onClick={() => navigate('/about')}>ABOUT</span>
        <span className="header-items" onClick={() => openInNewTab('https://www.facebook.com/clearweb.cloud')}>FB</span>
        <span className="header-items" onClick={() => openInNewTab('https://twitter.com/ClearwebCloud')}>TWITTER</span>
        <span className="header-items" onClick={() => openInNewTab('https://www.instagram.com/clearweb.cloud/')}>IG</span>
        <span className="header-items" onClick={() => openInNewTab('https://www.youtube.com/channel/UCydv7oPwYWUDjQy7AXcMF8A')}>YT</span>
        <CustomButton>PRICING</CustomButton>
    </div>
)}

export default Header