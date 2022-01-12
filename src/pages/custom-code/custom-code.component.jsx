import React from "react";
import ContactUs from "../../components/contact-us/contact-us.component";

import './custom-code.styles.scss'

const CustomCodePage = () => (
    <div className="custom-code">
    <h1 className="title">Custom Code</h1>
    <h1 className="title">CLEAR WEB VALUE: UNIQUENESS</h1>
    <div>See Pricing Below</div>
    <div className="row">
        <div className="content-list">
            <h2 className="list-title">Custom Code</h2>
            <h2 className="list-title">$TBD</h2>
            <ul>
                <li>Price is built into your web developement quote</li>
                <li>Depends on the complexity of the code</li>
            </ul>
        </div>
        <div className="content-list">
            <h2 className="list-title">Custom Map</h2>
            <h2 className="list-title">$150+</h2>
            <ul>
                <li className="foot-note">Google Maps API setup</li>
                <li className="foot-note">Code creation</li>
                <li className="foot-note">Price depends on the number of locations required</li>
            </ul>
        </div>
    </div>
    <ContactUs/>
</div>
)

export default CustomCodePage

