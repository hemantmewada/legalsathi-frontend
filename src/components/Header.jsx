import React from "react";
import { Outlet, Link } from "react-router-dom";

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
                <Link to="/">
                  {/* <strong>Legal Sathi</strong> */}
                  <img src="/images/legalsathi-logo.jpg" width={"100%"} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-9 text-right text-lg-left">
              <span className="d-inline-block d-lg-none">
                <a href="#" className="site-menu-toggle js-menu-toggle py-5 ">
                  <span className="icon-menu h3 text-black" />
                </a>
              </span>
              <nav
                className="site-navigation text-right ml-auto d-none d-lg-block"
                role="navigation"
              >

                <ul className="site-menu main-menu js-clone-nav ml-auto">
                <li className="has-children">
                    <Link to="#" className="nav-link">Legal issues</Link>
                    <ul className="dropdown mega-menu">
                    <div className="row">
                        <div className="col-lg-6">
                        <Link to="/legal-notice-reply">Legal Notice Reply</Link>
                        <li><Link to="/legal-notice-preparation">Legal Notice Preparation</Link></li>
                        <li><Link to="/legal-consultation">Legal Consultation</Link></li>
                        </div>
                        <div className="col-lg-6">
                        <li><Link to="/trademark-registration">Trademark Registration</Link></li>
                        <li><Link to="/copyright-registration">Copyright Registration</Link></li>
                        <li><Link to="/patent-registration">Patent Registration</Link></li>
                        <li><Link to="/design-registration">Design Registration</Link></li>
                        <li><Link to="/trademark-renewal">Trademark Renewal</Link></li>
                        </div>
                    </div>
                    </ul>
                </li>
                <li className="has-children">
                    <Link to="#" className="nav-link">Start A Business</Link>
                    <ul className="dropdown mega-menu">
                    <div className="row">
                        <div className="col-lg-6">
                        <li><Link to="/proprietorship">Proprietorship</Link></li>
                        <li><Link to="/partnership">Partnership</Link></li>
                        <li><Link to="/private-limited-company">Private Limited Company</Link></li>
                        </div>
                        <div className="col-lg-6">
                        <li><Link to="/one-person-company">One Person Company</Link></li>
                        <li><Link to="/limited-liability-partnership">Limited Liability Partnership</Link></li>
                        <li><Link to="/nidhi-company">Nidhi Company</Link></li>
                        <li><Link to="/section-8-company">Section 8 Company</Link></li>
                        </div>
                    </div>
                    </ul>
                </li>
                <li className="has-children">
                    <Link to="#" className="nav-link">Compliance</Link>
                    <ul className="dropdown mega-menu">
                    <div className="row">
                        <div className="col-lg-6">
                        <li><Link to="/proprietorship">Proprietorship</Link></li>
                        <li><Link to="/partnership">Partnership</Link></li>
                        <li><Link to="/company">Company</Link></li>
                        <li><Link to="/llp-compliance">LLP Compliance</Link></li>
                        </div>
                        <div className="col-lg-6">
                        <li><Link to="/payroll">Payroll</Link></li>
                        <li><Link to="/pf-registration">PF Registration</Link></li>
                        <li><Link to="/pf-return-filing">PF Return Filing</Link></li>
                        <li><Link to="/esi-registration">ESI Registration</Link></li>
                        </div>
                    </div>
                    </ul>
                </li>
                <li className="has-children">
                    <Link to="#" className="nav-link">Goods and Services Tax</Link>
                    <ul className="dropdown mega-menu">
                    <div className="row">
                        <div className="col-lg-6">
                        <li><Link to="/gst-registration">GST Registration</Link></li>
                        <li><Link to="/gst-return-filing">GST Return Filing</Link></li>
                        <li><Link to="/gst-lut-filing">GST LUT Filing</Link></li>
                        <li><Link to="/gst-registration-cancellation">GST Registration Cancellation</Link></li>
                        <li><Link to="/gst-annual-return">GST Annual Return</Link></li>
                        </div>
                        <div className="col-lg-6">
                        <li><Link to="/gst-invoicing">GST Invoicing</Link></li>
                        <li><Link to="/gst-einvoicing">GST eInvoicing</Link></li>
                        <li><Link to="/eway-bill">eWay Bill</Link></li>
                        <li><Link to="/input-tax-credit">Input Tax Credit</Link></li>
                        </div>
                    </div>
                    </ul>
                </li>
                <li className="has-children">
                    <Link to="#" className="nav-link">Income Tax</Link>
                    <ul className="dropdown mega-menu">
                    <div className="row">
                        <div className="col-lg-6">
                        <li><Link to="/personal-tax-filing">Personal Tax Filing</Link></li>
                        <li><Link to="/business-tax-filing">Business Tax Filing</Link></li>
                        <li><Link to="/tax-notice">Tax Notice</Link></li>
                        <li><Link to="/tds-filing">TDS Filing</Link></li>
                        <li><Link to="/form-16">Form 16</Link></li>
                        </div>
                        <div className="col-lg-6">
                        <li><Link to="/itr-1-return">ITR-1 Return</Link></li>
                        <li><Link to="/itr-2-return">ITR-2 Return</Link></li>
                        <li><Link to="/itr-3-return">ITR-3 Return</Link></li>
                        <li><Link to="/itr-4-return">ITR-4 Return</Link></li>
                        <li><Link to="/itr-5-return">ITR-5 Return</Link></li>
                        <li><Link to="/itr-6-return">ITR-6 Return</Link></li>
                        <li><Link to="/itr-7-return">ITR-7 Return</Link></li>
                        </div>
                    </div>
                    </ul>
                </li>
                </ul>

              </nav>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
      <footer
        className="site-footer"
        style={{ backgroundImage: 'url("images/hero_bg_footer.jpg")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h2 className="footer-heading mb-4">About Us</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
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
                <p>
                  Copyright © All rights reserved | This template is made with{" "}
                  <i className="icon-heart text-danger" aria-hidden="true" /> by{" "}
                  <a href="https://colorlib.com/" target="_blank">
                    Colorlib
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Header;
