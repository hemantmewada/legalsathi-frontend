import React, { useEffect, useState } from 'react'
import Form from './Form'
import { useParams } from 'react-router-dom';
import services, { achievements, documents } from '../config/data';

const Service = () => {
  const {service} = useParams();
  const [pageName, setPageName] = useState("");
  useEffect(() => {
    const single = services.filter((singleService) => singleService.slug == service)[0];
    setPageName(single.name);
  }, [service])
  
  return (
    <>
    <div className="site-section service-page">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
            <img width={"100%"} src="https://www.indiafilings.com/if-web/assets/images/LEDGERS-Business-Platform.jpg" alt="Image" className="img-fluid border-radius-10" />
          </div>
          <div className="col-md-6 col-lg-5">
            <h2 className="mb-4 section-heading">{pageName}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam reprehenderit perspiciatis iste culpa consequuntur consequatur eum, voluptatum, quod deserunt maiores?</p>
            <div className="row">
              <div className="mb-4 mb-lg-4 col-sm-6 col-md-6">
                <div className="testimonial-2">
                  <p className='font-weight-bold margin-bottom-0'>INR 245 <span className='font-weight-normal'>All Inclusive</span></p>
                  <p className='font-weight-bold margin-bottom-0'><del>INR 310</del></p>
                  <ul className="ul-check list-unstyled">
                    <li>Aperiam iste nam molestias</li>
                    <li>Modi perferendis ipsa</li>
                    <li>Perspic iste culpa</li>
                  </ul>
                </div>
              </div>
              <div className="mb-4 mb-lg-4 col-sm-6 col-md-6">
                <div className="testimonial-2">
                  <p className='font-weight-bold margin-bottom-0'>INR 245 <span className='font-weight-normal'>All Inclusive</span></p>
                  <p className='font-weight-bold margin-bottom-0'><del>INR 310</del></p>
                  <ul className="ul-check list-unstyled">
                    <li>Aperiam iste nam molestias</li>
                    <li>Modi perferendis ipsa</li>
                    <li>Perspic iste culpa</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <Form pageName={pageName} />
          </div>
        </div>
      </div>
    </div>
    <div className="site-section document-required-section bg-light">
      <div className="container">
        <div className="row text-center justify-content-center mb-4">
          <div className="col-lg-7">
            <h2 className="mb-4 section-heading">
              <strong>Documents required for Partnership Deed Drafting</strong>
            </h2>
          </div>
        </div>
        <div className="row">
          {documents.map((document, index) => (
            <div key={index} className="mb-4 mb-md-1 col-md-6">
              <div className="testimonial-2 p-15">
                <div className="d-flex v-card align-items-center">
                  <img src="/images/file.png" alt="Image" width="50%" className="img-fluid mr-3 p-10" />
                  <div className="author-name">
                    <span className="d-block">{document}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="site-section">
      <div className="container">
        <div className="row text-center justify-content-center mb-4">
          <div className="col-lg-7">
            <h2 className="mb-4 section-heading">
              <strong>Procedure for Online Registration of Partnership Firm</strong>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="custom-accordion" id="accordion_1">
              <div className="accordion-item">
                <h2 className="mb-0">
                  <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Document Review by Legal Experts</button>
                </h2>
                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion_1">
                  <div className="accordion-body"> Our legal experts will review all the documents you submit to lessen the chances of incorrect or misleading information to make the process smooth. </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="mb-0">
                  <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Expert Assistance for Partnership Deed</button>
                </h2>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion_1">
                  <div className="accordion-body"> Our best Partnership Deed experts are here to help you with document requirements and registration necessities. </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="mb-0">
                  <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Submission for Partnership Deed Registration</button>
                </h2>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion_1">
                  <div className="accordion-body"> The respective professional will move further with your documents to apply for your Partnership Deed Registration. </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="mb-0">
                  <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Certificate Generation by Registrar</button>
                </h2>
                <div id="collapseFour" className="collapse" aria-labelledby="headingThree" data-parent="#accordion_1">
                  <div className="accordion-body"> After acceptance of your application by the Registrar of Firms, your Partnership Deed certificate will be generated. </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="mb-0">
                  <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Notification of Certificate Generation</button>
                </h2>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion_1">
                  <div className="accordion-body"> You are supposed to wait until our expert reaches out to notify you of the generation of your Partnership Deed Certificate. </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="site-section bg-light">
      <div className="container">
        <div className="row">
          {achievements.map((achievement, index) => (
            <div key={index} className="col-2 mb-5 achievements">
              <div className="practicing-inner">
                <div className="wrap-icon">
                  <i className={`${achievement.icon} font-size-30`}></i>
                </div>
                <h3>{achievement.title}</h3>
                <p>{achievement.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Service