import React from "react";
import { FaFacebook, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa';
function Footer () {
    return (
      <div className="footer">
        <div className="container">
            <div className="footerSection">
                <div className="row justifyConter">
                <div className="footer-content">
                    <div className="footer-section-logo">
                        <img src="/img/logo footer.png" alt=""/>
                    </div>
                    <ul className="footerCircles">
                        <li><FaFacebook  className="footerIcon"/></li>
                        <li><FaPinterest className="footerIcon" /></li>
                        <li><FaInstagram className="footerIcon" /></li>
                        <li><FaTwitter   className="footerIcon"/></li>
                    </ul>
                    <div className="copy-right-content">
                        <p className="copyright">copyright {new Date().getFullYear()} marvinchaviel.com | All Rights Reserved </p>
                    </div>
                </div> 
                </div>
            </div>
        </div>
      </div>
    )
}

export default Footer;