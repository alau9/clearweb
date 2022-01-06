import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,  } from '@fortawesome/free-solid-svg-icons'

import "./header.styles.scss"

const Header = () => {
    
    const navigate = useNavigate()
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

return(
    <div className="header">
        <div className="header-items left-side" onClick={() => navigate('/')}><img className="logo" src="https://i.ibb.co/LdMFpcL/Clear-Web-Logo.png" alt="Clear-Web-Logo" border="0" /></div>
        <div className="right-side">
            <div className="header-items" onClick={() => navigate('/services')}>Services</div>
            <div className="header-items" onClick={() => navigate('/portfolio')} >Portfolio</div>
            <div className="header-items" onClick={() => navigate('/about')}>About</div>
            <div className="header-items" onClick={() => openInNewTab('https://www.facebook.com/clearweb.cloud')}><FontAwesomeIcon icon={['fab', 'facebook']} /></div>
            <div className="header-items" onClick={() => openInNewTab('https://twitter.com/ClearwebCloud')}><FontAwesomeIcon icon={['fab', 'twitter']} /></div>
            <div className="header-items" onClick={() => openInNewTab('https://www.instagram.com/clearweb.cloud/')}><FontAwesomeIcon icon={['fab', 'instagram']} /></div>
            <div className="header-items" onClick={() => openInNewTab('https://www.youtube.com/channel/UCydv7oPwYWUDjQy7AXcMF8A')}><FontAwesomeIcon icon={['fab', 'youtube']} /></div>
        </div>
        <div className="button-container" onClick={() => navigate('/pricing')}><CustomButton>Pricing</CustomButton></div>
        <div>     
  </div>
    </div>
)}

export default Header