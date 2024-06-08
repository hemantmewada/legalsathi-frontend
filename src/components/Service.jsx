import React, { useEffect, useState } from 'react'
import Form from './Form'
import { useParams } from 'react-router-dom'

const Service = () => {
  const {service} = useParams();
  const [pageName, setPageName] = useState("");
  useEffect(() => {
    const pageName = service.replaceAll("-"," ").toUpperCase();
    setPageName(pageName);
  }, [service])
  
  return (
    <div className="site-section bg-light" id="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 ml-auto">
            <div className="bg-white p-3 p-md-5">
              <h3 className="text-black mb-4">Contact Info</h3>
              <ul className="list-unstyled footer-link">
                <li className="d-block mb-3">
                  <span className="d-block text-black">Address:</span>
                  <span>34 Street Name, City Name Here, United States</span>
                </li>
                <li className="d-block mb-3">
                  <span className="d-block text-black">Phone:</span>
                  <span>+1 242 4942 290</span>
                </li>
                <li className="d-block mb-3">
                  <span className="d-block text-black">Email:</span>
                  <span>
                    <a
                      href="https://preview.colorlib.com/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="a0c9cec6cfe0d9cfd5d2c4cfcdc1c9ce8ec3cfcd"
                    >
                      [email&nbsp;protected]
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 ml-auto">
            <div className="bg-white p-3 p-md-5">
              <h3 className="text-black mb-4">Contact Info</h3>
              <ul className="list-unstyled footer-link">
                <li className="d-block mb-3">
                  <span className="d-block text-black">Address:</span>
                  <span>34 Street Name, City Name Here, United States</span>
                </li>
                <li className="d-block mb-3">
                  <span className="d-block text-black">Phone:</span>
                  <span>+1 242 4942 290</span>
                </li>
                <li className="d-block mb-3">
                  <span className="d-block text-black">Email:</span>
                  <span>
                    <a
                      href="https://preview.colorlib.com/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="a0c9cec6cfe0d9cfd5d2c4cfcdc1c9ce8ec3cfcd"
                    >
                      [email&nbsp;protected]
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 ml-auto">
            <Form pageName={pageName} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service