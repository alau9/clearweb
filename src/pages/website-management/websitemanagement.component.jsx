import React from "react";
import ContactUs from "../../components/contact-us/contact-us.component";
import CustomButton from "../../components/custom-button/custom-button.component"

import './websitemanagement.styles.scss'

const WebsiteManagementPage = () => {
    
    return(
    <div className="website-management">
        <h1 className="title">Site Management</h1>
        <h1 className="title">CLEAR WEB VALUE: DEDICATION</h1>
        <div>See Pricing Below</div>
        <div className="row">
            <div className="content-list">
                <h2 className="list-title">Basic Web Management</h2>
                <h2 className="list-title">$250/mo</h2>
                <ul>
                    <li>Up to 5 hours/month</li>
                </ul>
            </div>
            <div className="content-list">
                <h2 className="list-title">Unlimited Web Management</h2>
                <h2 className="list-title">$500/mo</h2>
                <ul>
                    <li className="foot-note">Unlimited means unlimited =)</li>
                </ul>
            </div>
        </div>
        <ContactUs/>
    </div>
)}

export default WebsiteManagementPage
