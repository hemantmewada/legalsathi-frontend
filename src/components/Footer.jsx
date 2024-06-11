import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer
        className="site-footer"
        style={{ backgroundImage: 'url("images/hero_bg_footer.jpg")' }}
    >
        <div className="container">
        <div className="row">
            <div className="col-lg-3">
            <Link to="/">
                <img src="/images/legalsathi-logo.jpg" width={"100%"} alt="" />
            </Link>
            {/* <h2 className="footer-heading mb-4">About Us</h2> */}
            <p className='mt-10'>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
            </p>
            <ul className="list-unstyled social">
                <li className='mr-4'>
                <a href="#">
                    <span className="icon-facebook" />
                </a>
                </li>
                <li className='mr-4'>
                <a href="#">
                    <span className="icon-instagram" />
                </a>
                </li>
                <li className='mr-4'>
                <a href="#">
                    <span className="icon-twitter" />
                </a>
                </li>
                <li className='mr-4'>
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
                Copyright © {currentYear} All rights reserved | Legalsathi made with {" "}
                <a href="https://github.com/hemantmewada/" target="_blank"><i className="icon-heart text-danger" aria-hidden="true" /></a>
                </p>
            </div>
            </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer