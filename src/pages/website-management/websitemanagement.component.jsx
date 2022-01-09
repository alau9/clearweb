import React from "react";
import ContactUs from "../../components/contact-us/contact-us.component";
import CustomButton from "../../components/custom-button/custom-button.component"

import './websitemanagement.styles.scss'

const WebsiteManagementPage = () => (
    <div className="website-management">
        <h1>Site Management</h1>
        <h1>CLEAR WEB VALUE: DEDICATION</h1>
        <div>See Pricing Below</div>
        <div className="row">
            <div className="col">
                <div>Basic Web Management</div>
                <div className="price">$250/mo</div>
                <div className="foot-note">Up to 5 hours/month</div>
            </div>
            <div className="col">
                <div>Unlimited Web Management</div>
                <div className="price">$500/mo</div>
                <div className="foot-note">Unlimited means unlimited =)</div>
            </div>
            <div></div>
        </div>
        <ContactUs/>
    </div>
)

export default WebsiteManagementPage
