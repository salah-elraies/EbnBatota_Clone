import React from 'react'
import "./Footer.css";
import {FaHeadset, FaRegEnvelope, FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaPinterestP, FaVimeoV, FaYoutube} from 'react-icons/fa'
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3>Need help?</h3>
                        <a href="tel://004542344599" className="supLink"><FaHeadset /> &nbsp; +201555943184</a>
                        
                        <a href="mailto:info@ebnbatota.com" className="supLink"><FaRegEnvelope /> &nbsp; info@ebnbatota.com</a>
                    </div>
                    <div className="col-md-4">
                        <h3>About</h3>
                        <Link to="/register" className="supLink coloring">Register</Link>
                        <Link to="/terms" className="supLink coloring">Terms and condition</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="social">
                            <ul className="social-icons">
                                <li><a className="iconFootr" href="/"><FaFacebookF /></a></li>
                                <li><a className="iconFootr" href="/"><FaTwitter /></a></li>
                                <li><a className="iconFootr" href="/"><FaGoogle /></a></li>
                                <li><a className="iconFootr" href="/"><FaInstagram /></a></li>
                                <li><a className="iconFootr" href="/"><FaPinterestP /></a></li>
                                <li><a className="iconFootr" href="/"><FaVimeoV /></a></li>
                                <li><a className="iconFootr" href="/"><FaYoutube /></a></li>
                            </ul>
                            <p>© Ebnbatota 2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;