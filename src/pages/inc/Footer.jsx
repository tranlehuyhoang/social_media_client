import React from 'react'

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-wrapper">
                        <div className="col-md-3 col-sm-3">
                            <a href="">
                                <img src="https://themified.com/friend-finder/images/logo-black.png" alt="" className="footer-logo" />
                            </a>
                            <ul className="list-inline social-icons">
                                <li>
                                    <a href="#">
                                        <i className="icon ion-social-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="icon ion-social-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="icon ion-social-googleplus" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="icon ion-social-pinterest" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="icon ion-social-linkedin" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-2">
                            <h5>For individuals</h5>
                            <ul className="footer-links">
                                <li>
                                    <a href="">Signup</a>
                                </li>
                                <li>
                                    <a href="">login</a>
                                </li>
                                <li>
                                    <a href="">Explore</a>
                                </li>
                                <li>
                                    <a href="">Finder app</a>
                                </li>
                                <li>
                                    <a href="">Features</a>
                                </li>
                                <li>
                                    <a href="">Language settings</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-2">
                            <h5>For businesses</h5>
                            <ul className="footer-links">
                                <li>
                                    <a href="">Business signup</a>
                                </li>
                                <li>
                                    <a href="">Business login</a>
                                </li>
                                <li>
                                    <a href="">Benefits</a>
                                </li>
                                <li>
                                    <a href="">Resources</a>
                                </li>
                                <li>
                                    <a href="">Advertise</a>
                                </li>
                                <li>
                                    <a href="">Setup</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-2">
                            <h5>About</h5>
                            <ul className="footer-links">
                                <li>
                                    <a href="">About us</a>
                                </li>
                                <li>
                                    <a href="">Contact us</a>
                                </li>
                                <li>
                                    <a href="">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="">Terms</a>
                                </li>
                                <li>
                                    <a href="">Help</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            <h5>Contact Us</h5>
                            <ul className="contact">
                                <li>
                                    <i className="icon ion-ios-telephone-outline" />
                                    +1 (234) 222 0754
                                </li>
                                <li>
                                    <i className="icon ion-ios-email-outline" />
                                    info@thunder-team.com
                                </li>
                                <li>
                                    <i className="icon ion-ios-location-outline" />
                                    228 Park Ave S NY, USA
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Thunder Team © 2016. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer