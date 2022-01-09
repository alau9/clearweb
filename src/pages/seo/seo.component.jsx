import React from "react";
import ContactUs from "../../components/contact-us/contact-us.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import './seo.styles.scss'

const SEOPage = () => {
    return(
        <div className="seo-page">
            <h1 className="title">SEO</h1>
            <h1 className="title">CLEAR WEB VALUE: COMPETITIVE ADVANTAGE</h1>
            <CustomButton>Pricing</CustomButton>
            <div className="row">
                <div className="content-list">
                    <h2>On-page SEO</h2>
                    <ul>
                        <li>Keyword optimization</li>
                        <li>Metadata</li>
                        <li>Internal links</li>
                        <li>Alt tags</li>
                    </ul>
                </div>
                <div className="content-list">
                    <h2>Off-page SEO</h2>
                    <ul>
                        <li>Backlinks</li>
                        <li>Authority</li>
                        <li>Social reputation</li>
                    </ul>
                </div>
                <div className="content-list">
                    <h2>Technical SEO</h2>
                    <ul>
                        <li>Structured data</li>
                        <li>Indexing</li>
                        <li>Site speed</li>
                    </ul>
                </div>
            </div>
            <ContactUs/>
        </div> 
        
    )
}

export default SEOPage