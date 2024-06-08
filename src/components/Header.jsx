import React from 'react';
import {Link} from "react-router-dom";
import services from '../config/data';

const Header = () => {
  return (
    <>
        <div className="site-mobile-menu site-navbar-target bg-primary">
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
                    <span className="icon-menu h3 text-white" />
                    </a>
                </span>
                <nav
                    className="site-navigation text-right ml-auto d-none d-lg-block"
                    role="navigation"
                >

                    <ul className="site-menu main-menu js-clone-nav ml-auto">
                    <li className="has-children">
                        <Link to="#" className="nav-link text-white">Legal issues</Link>
                        <ul className="dropdown mega-menu">
                        <div className="row">
                            <div className="col-lg-6">
                                {services.map((service) => {
                                    return service.position == "first-half" && service.type == "legal-issues" && (
                                        <li key={service.id}><Link to={`/${service.slug}`}>{service.name}</Link></li>
                                    )
                                })}
                            </div>
                            <div className="col-lg-6">
                                {services.map((service) => {
                                    return service.position == "second-half" && service.type == "legal-issues" && (
                                        <li key={service.id}><Link to={`/${service.slug}`}>{service.name}</Link></li>
                                    )
                                })}
                            </div>
                        </div>
                        </ul>
                    </li>
                    <li className="has-children">
                        <Link to="#" className="nav-link text-white">Start A Business</Link>
                        <ul className="dropdown mega-menu">
                        <div className="row">
                            <div className="col-lg-6">
                                {services.map((service) => {
                                    return service.position == "first-half" && service.type == "start-a-business" && (
                                        <li key={service.id}><Link to={`/${service.slug}`}>{service.name}</Link></li>
                                    )
                                })}
                            </div>
                            <div className="col-lg-6">
                                {services.map((service) => {
                                    return service.position == "second-half" && service.type == "start-a-business" && (
                                        <li key={service.id}><Link to={`/${service.slug}`}>{service.name}</Link></li>
                                    )
                                })}
                            </div>
                        </div>
                        </ul>
                    </li>
                    <li className="has-children">
                        <Link to="#" className="nav-link text-white">Compliance</Link>
                        <ul className="dropdown mega-menu">
                        <div className="row">
                            <div className="col-lg-6">
                                {services.map((service) => {
                                    return service.position == "first-half" && service.type == "compliance" && (
                                        <li key={service.id}><Link to={`/${service.slug}`}>{service.name}</Link></li>
                                    )
                                })}
                            </div>
                            <div className="col-lg-6">
                                {services.map((service) => {
                                    return service.position == "second-half" && service.type == "compliance" && (
                                        <li key={service.id}><Link to={`/${service.slug}`}>{service.name}</Link></li>
                                    )
                                })}
                            </div>
                        </div>
                        </ul>
                    </li>
                    <li className="has-children">
                        <Link to="#" className="nav-link text-white">Goods and Services Tax</Link>
                        <ul className="dropdown mega-menu">
                        <div className="row">
                            <div className="col-lg-6">
                                {services.map((service) => {
                                    return service.position == "first-half" && service.type == "goods-and-services-tax" && (
                                        <li key={service.id}><Link to={`/${service.slug}`}>{service.name}</Link></li>
                                    )
                                })}
                            </div>
                            <div className="col-lg-6">
                                {services.map((service) => {
                                    return service.position == "second-half" && service.type == "goods-and-services-tax" && (
                                        <li key={service.id}><Link to={`/${service.slug}`}>{service.name}</Link></li>
                                    )
                                })}
                            </div>
                        </div>
                        </ul>
                    </li>
                    <li className="has-children">
                        <Link to="#" className="nav-link text-white">Income Tax</Link>
                        <ul className="dropdown mega-menu">
                        <div className="row">
                            <div className="col-lg-6">
                                {services.map((service) => {
                                    return service.position == "first-half" && service.type == "income-tax" && (
                                        <li key={service.id}><Link to={`/${service.slug}`}>{service.name}</Link></li>
                                    )
                                })}
                            </div>
                            <div className="col-lg-6">
                                {services.map((service) => {
                                    return service.position == "second-half" && service.type == "income-tax" && (
                                        <li key={service.id}><Link to={`/${service.slug}`}>{service.name}</Link></li>
                                    )
                                })}
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
    </>
  )
}

export default Header