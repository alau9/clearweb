import React from "react";

import "./header.styles.scss"

const Header = () => (
    <div className="header">
        <span className="header-items left-side">LOGO</span>
        <span className="header-items right-side">SERVICES</span>
        <span className="header-items">PORTFOLIO</span>
        <span className="header-items">ABOUT</span>
        <span className="header-items">TWITTER</span>
        <span className="header-items">IG</span>
        <span className="header-items">YT</span>
        <button>PRICING</button>
    </div>
)

export default Header