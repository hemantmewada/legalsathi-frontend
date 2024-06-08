import React from 'react';
import Typed from 'typed.js';
import Form from './components/Form';

function Home() {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Get your personal legal advisor.',
        'One step solution to your all legal problems',
        'Now legalsathi is always on your phone'
      ],
      typeSpeed: 50,
      loop: true,
      backSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="hero overlay" style={{backgroundImage: 'url("images/hero_bg_1.jpg")'}}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-12">
              <div className="row align-items-center justify-content-between">
                <div className="col-lg-5 intro">
                  <h1 className="text-white">
                    {/* <strong>Notary Public</strong> &amp; Legal Solutions */}
                    <span ref={el}></span>
                  </h1>
                  <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis cupiditate deserunt placeat necessitatibus a aliquam corrupti nisi odio aliquid, accusamus.</p>
                </div>
                <div className="col-lg-5">
                  <Form pageName={"GENERAL"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section bg-light">
        <div className="container">
          <div className="mb-5 text-center">
            <h2 className="section-heading">
              <strong className="text-black">Practice</strong> Areas
            </h2>
            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-5">
              <div className="practicing">
                <div className="practicing-inner">
                  <div className="wrap-icon">
                    <span className="flaticon-museum" />
                  </div>
                  <h3>Bankruptcy Law</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="practicing">
                <div className="practicing-inner">
                  <div className="wrap-icon">
                    <span className="flaticon-shield" />
                  </div>
                  <h3>Business Law</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="practicing">
                <div className="practicing-inner">
                  <div className="wrap-icon">
                    <span className="flaticon-help" />
                  </div>
                  <h3>Civil Rights Law</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="practicing">
                <div className="practicing-inner">
                  <div className="wrap-icon">
                    <span className="flaticon-revolver" />
                  </div>
                  <h3>Criminal Law</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="practicing">
                <div className="practicing-inner">
                  <div className="wrap-icon">
                    <span className="flaticon-luggage" />
                  </div>
                  <h3>Immigration Law</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="practicing">
                <div className="practicing-inner">
                  <div className="wrap-icon">
                    <span className="flaticon-house" />
                  </div>
                  <h3>Family Law</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 text-center">
              <div className="row mb-5 mb-lg-0">
                <div className="col-6">
                  <img src="images/atty_1.jpg" alt="Image" className="img-fluid" />
                </div>
                <div className="col-6">
                  <img src="images/atty_2.jpg" alt="Image" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 ml-auto order-lg-1">
              <h3 className="mb-4 section-heading">We Provide Highly <strong>Reliable &amp; Effective</strong> Legal Solutions </h3>
              <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, explicabo iste a labore id est quas, doloremque veritatis! Provident odit pariatur dolorem quisquam, voluptatibus voluptates optio accusamus, vel quasi quidem!</p>
              <p>
                <a href="#home-section" className="btn btn-primary">Book an appointment</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section bg-light">
        <div className="container">
          <div className="row text-center justify-content-center mb-4">
            <div className="col-lg-7">
              <h2 className="mb-4 section-heading">
                <strong>Happy Customers</strong>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="mb-4 mb-lg-0 col-sm-6 col-md-6 col-lg-4">
              <div className="testimonial-2">
                <div className="d-flex v-card align-items-center mb-4">
                  <img src="images/person_2.jpg" alt="Image" className="img-fluid mr-3" />
                  <div className="author-name">
                    <span className="d-block">Lina Gold</span>
                    <span>Owner, Ford</span>
                  </div>
                </div>
                <blockquote>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"</p>
                </blockquote>
              </div>
            </div>
            <div className="mb-4 mb-lg-0 col-sm-6 col-md-6 col-lg-4">
              <div className="testimonial-2">
                <div className="d-flex v-card align-items-center mb-4">
                  <img src="images/person_1.jpg" alt="Image" className="img-fluid mr-3" />
                  <div className="author-name">
                    <span className="d-block">Mike Fisher</span>
                    <span>Owner, Ford</span>
                  </div>
                </div>
                <blockquote>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"</p>
                </blockquote>
              </div>
            </div>
            <div className="mb-4 mb-lg-0 col-sm-6 col-md-6 col-lg-4">
              <div className="testimonial-2">
                <div className="d-flex v-card align-items-center mb-4">
                  <img src="images/person_3.jpg" alt="Image" className="img-fluid mr-3" />
                  <div className="author-name">
                    <span className="d-block">Sheen Yu</span>
                    <span>Owner, Ford</span>
                  </div>
                </div>
                <blockquote>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"</p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <img src="images/atty_2.jpg" alt="Image" className="img-fluid" />
            </div>
            <div className="col-md-6 col-lg-4">
              <h2 className="mb-4 section-heading">We Have <strong>Legal Solutions</strong>
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam reprehenderit perspiciatis iste culpa consequuntur consequatur eum, voluptatum, quod deserunt maiores?</p>
              <p className="mb-4">Modi perferendis ipsa ducimus consequuntur excepturi autem, numquam facere aperiam iste nam molestias provident consectetur molestiae voluptatibus ipsum. Fugiat, quas.</p>
              <ul className="ul-check list-unstyled">
                <li>Aperiam iste nam molestias</li>
                <li>Modi perferendis ipsa</li>
                <li>Perspic iste culpa</li>
              </ul>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="custom-accordion" id="accordion_1">
                <div className="accordion-item">
                  <h2 className="mb-0">
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">How to download and register?</button>
                  </h2>
                  <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion_1">
                    <div className="accordion-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="mb-0">
                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">How to create your paypal account?</button>
                  </h2>
                  <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion_1">
                    <div className="accordion-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="mb-0">
                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">How to link your paypal and bank account?</button>
                  </h2>
                  <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion_1">
                    <div className="accordion-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home