import React, { useState } from 'react';
import {Link} from "react-router-dom";
import services from '../config/data';

const Header = () => {
    const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [searchServices, setSearchServices] = useState([])
    const handleChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        const filteredServices = services.filter((service) => service.name.toLowerCase().includes(value.toLowerCase()));
        setSearchServices(filteredServices);
        if (value == "") {
            console.log("fsdfsdf");
            setSearchServices([]);
            console.log(searchServices);
        }
    }
    const reset = () => {
        setIsSearchBoxOpen(false);
        setSearchValue("");
        setSearchServices([]);
    }
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
                    <div className="col-9 text-right text-lg-right">
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
                                <li>
                                    <div className="search-box">
                                        <i onClick={() => setIsSearchBoxOpen(!isSearchBoxOpen)} className="fa-solid fa-magnifying-glass text-white cursor-pointer"></i>
                                        {isSearchBoxOpen && (
                                            <>
                                                <input value={searchValue} onChange={handleChange} className='search' type="search" name="" id="" />
                                                <div className='serarch-serives dropdown'>
                                                    <ul>
                                                        {searchServices.map((service) => (
                                                            <li key={service.id}><Link onClick={() => reset()} to={`/${service.slug}`}>{service.name}</Link></li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </>
                                        )}
                                    </div>
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