import React from 'react'
import { Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <div className="site-wrap" id="home-section">
        <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle" />
            </div>
        </div>
        <div className="site-mobile-menu-body" />
        </div>
        <header className="site-navbar site-navbar-target" role="banner">
            <div className="container">
                <div className="row align-items-center position-relative header-row">
                    <div className="col">
                        <div className="site-logo">
                        <a href="index.html">
                            <strong>Notary</strong>
                        </a>
                        </div>
                    </div>
                    <div className="col-9 text-right text-lg-left">
                        <span className="d-inline-block d-lg-none">
                        <a href="#" className=" site-menu-toggle js-menu-toggle py-5 ">
                            <span className="icon-menu h3 text-black" />
                        </a>
                        </span>
                        <nav className="site-navigation text-right ml-auto d-none d-lg-block" role="navigation">
                        <ul className="site-menu main-menu js-clone-nav ml-auto ">
                            <li className="has-children">
                                <p className="nav-link">Legal issues</p>
                                <ul className="dropdown">
                                    <li><a href="#">Legal Notice Reply</a></li>
                                    <li><a href="#">Legal Notice Preparation</a></li>
                                    <li><a href="#">Legal Consultation</a></li>
                                    <li><a href="#">Trademark Registration</a></li>
                                    <li><a href="#">Copyright Registration</a></li>
                                    <li><a href="#">Patent Registration</a></li>
                                    <li><a href="#">Design Registration</a></li>
                                    <li><a href="#">Trademark Renewal</a></li>
                                </ul>
                            </li>
                            <li className="has-children">
                                <p className="nav-link">Start A Business</p>
                                <ul className="dropdown">
                                    <li><a href="#">Proprietorship</a></li>
                                    <li><a href="#">Partnership</a></li>
                                    <li><a href="#">Private Limited Company</a></li>
                                    <li><a href="#">One Person Company</a></li>
                                    <li><a href="#">Limited Liability Partnership</a></li>
                                    <li><a href="#">Nidhi Company</a></li>
                                    <li><a href="#">Section 8 Company</a></li>
                                    {/* <li><a href="#">Startup India Registration</a>
                                    <li><a href="#">Indian Subsidiary</a>
                                    <li><a href="#">Digital Signature</a>
                                    <li><a href="#">Udyam Registration</a>
                                    <li><a href="#">FSSAI Registration</a>
                                    <li><a href="#">Import Export Code</a> */}
                                </ul>
                            </li>
                            <li className="has-children">
                                <p className="nav-link">Compliance</p>
                                <ul className="dropdown">
                                    <li><a href="#">Proprietorship</a></li>
                                    <li><a href="#">Proprietorship</a></li>
                                    <li><a href="#">Partnership</a></li>
                                    <li><a href="#">Company</a></li>
                                    <li><a href="#">LLP Compliance</a></li>
                                    <li><a href="#">Payroll</a></li>
                                    <li><a href="#">PF Registration</a></li>
                                    <li><a href="#">PF Return Filing</a></li>
                                    <li><a href="#">ESI Registration</a></li>
                                </ul>
                            </li>
                            <li className="has-children">
                                <p className="nav-link">Goods and Services Tax</p>
                                <ul className="dropdown">
                                    <li><a href="#">Proprietorship</a></li>
                                    <li><a href="#">GST Registration</a></li>
                                    <li><a href="#">GST Return Filing</a></li>
                                    <li><a href="#">GST LUT Filing</a></li>
                                    <li><a href="#">GST Registration Cancellation</a></li>
                                    <li><a href="#">GST Annual Return</a></li>
                                    <li><a href="#">GST Invoicing</a></li>
                                    <li><a href="#">GST eInvoicing</a></li>
                                    <li><a href="#">eWay Bill</a></li>
                                    <li><a href="#">Input Tax Credit</a></li>
                                </ul>
                            </li>
                            <li className="has-children">
                                <p className="nav-link">Income Tax</p>
                                <ul className="dropdown">
                                    <li><a href="#">Proprietorship</a></li>
                                    <li><a href="#">Personal Tax Filing</a></li>
                                    <li><a href="#">Business Tax Filing</a></li>
                                    <li><a href="#">Tax Notice</a></li>
                                    <li><a href="#">TDS Filing</a></li>
                                    <li><a href="#">Form 16</a></li>
                                    <li><a href="#">ITR Return</a></li>
                                    {/* <li><a href="#">ITR-1 Return</a></li>
                                    <li><a href="#">ITR-2 Return</a></li>
                                    <li><a href="#">ITR-3 Return</a></li>
                                    <li><a href="#">ITR-4 Return</a></li>
                                    <li><a href="#">ITR-5 Return</a></li>
                                    <li><a href="#">ITR-6 Return</a></li>
                                    <li><a href="#">ITR-7 Return</a></li> */}
                                </ul>
                            </li>
                        </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        <Outlet />
        <footer className="site-footer" style={{backgroundImage: 'url("images/hero_bg_footer.jpg")'}}>
            <div className="container">
            <div className="row">
                <div className="col-lg-3">
                <h2 className="footer-heading mb-4">About Us</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                <ul className="list-unstyled social">
                    <li>
                    <a href="#">
                        <span className="icon-facebook" />
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        <span className="icon-instagram" />
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        <span className="icon-twitter" />
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        <span className="icon-linkedin" />
                    </a>
                    </li>
                </ul>
                </div>
                <div className="col-lg-8 ml-auto">
                <div className="row">
                    <div className="col-lg-3">
                    <h2 className="footer-heading mb-4">Quick Links</h2>
                    <ul className="list-unstyled">
                        <li>
                        <a href="#">About Us</a>
                        </li>
                        <li>
                        <a href="#">Testimonials</a>
                        </li>
                        <li>
                        <a href="#">Terms of Service</a>
                        </li>
                        <li>
                        <a href="#">Privacy</a>
                        </li>
                        <li>
                        <a href="#">Contact Us</a>
                        </li>
                    </ul>
                    </div>
                    <div className="col-lg-3">
                    <h2 className="footer-heading mb-4">Resources</h2>
                    <ul className="list-unstyled">
                        <li>
                        <a href="#">About Us</a>
                        </li>
                        <li>
                        <a href="#">Testimonials</a>
                        </li>
                        <li>
                        <a href="#">Terms of Service</a>
                        </li>
                        <li>
                        <a href="#">Privacy</a>
                        </li>
                        <li>
                        <a href="#">Contact Us</a>
                        </li>
                    </ul>
                    </div>
                    <div className="col-lg-3">
                    <h2 className="footer-heading mb-4">Support</h2>
                    <ul className="list-unstyled">
                        <li>
                        <a href="#">About Us</a>
                        </li>
                        <li>
                        <a href="#">Testimonials</a>
                        </li>
                        <li>
                        <a href="#">Terms of Service</a>
                        </li>
                        <li>
                        <a href="#">Privacy</a>
                        </li>
                        <li>
                        <a href="#">Contact Us</a>
                        </li>
                    </ul>
                    </div>
                    <div className="col-lg-3">
                    <h2 className="footer-heading mb-4">Company</h2>
                    <ul className="list-unstyled">
                        <li>
                        <a href="#">About Us</a>
                        </li>
                        <li>
                        <a href="#">Testimonials</a>
                        </li>
                        <li>
                        <a href="#">Terms of Service</a>
                        </li>
                        <li>
                        <a href="#">Privacy</a>
                        </li>
                        <li>
                        <a href="#">Contact Us</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            <div className="row pt-5 mt-5 text-center">
                <div className="col-md-12">
                <div className="border-top pt-5">
                    <p> Copyright ©  All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true" /> by <a href="https://colorlib.com/" target="_blank">Colorlib</a>
                    </p>
                </div>
                </div>
            </div>
            </div>
        </footer>
    </div>
  )
}

export default Header