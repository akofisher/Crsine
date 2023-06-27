import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectAbout } from '../../Store/CarWash/CarWashSelector'
import BGFBg1 from '../../assets/images/backgrounds/footer-bg-1.png'

export const Footer = () => {
  const CONTACT = useSelector(selectAbout)
  useEffect(() => {}, [CONTACT])

  return (
    <>
      <footer className="main-footer">
        <div
          className="image-layer"
          style={{ backgroundImage: `url(${BGFBg1})` }}
        ></div>

        <div className="upper-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-3">
                <div className="footer-widget footer-widget__about">
                  <Link to="/" className="footer-widget__logo">
                    <img
                      src="assets/images/logo-light.png"
                      width="137"
                      alt=""
                    />
                  </Link>
                  {/* <p className="footer-widget__text">There are many vari of pass of lorem ipsum availab but the
                                        majority have suffered in some form by injected humour or words</p> */}
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
                <div className="footer-widget footer-widget__links">
                  <h3 className="footer-widget__title">Links</h3>
                  <div className="footer-widget__links-wrap">
                    <ul className="list-unstyled">
                      <li>
                        <Link to="/services">Our Services</Link>
                      </li>
                      {/* <li><Link to="/about">
                                                Best Cleaning
                                            </Link></li> */}
                      {/* <li><Link to="/about">
                                                Quality Polish

                                            </Link></li> */}
                      <li>
                        <Link to="/about">About Store</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                      {/* <li><Link to="/faqs">
                                                Help
                                            </Link></li> */}
                    </ul>
                    <ul className="list-unstyled">
                      {/* <li><Link to="/shops">
                                                New Products
                                            </Link></li> */}
                      {/* <li><Link to="/about">
                                                About Store
                                            </Link></li> */}
                      {/* <li><Link to="/about">
                                                Support

                                            </Link></li> */}
                      {/* <li><Link to="faqs.html">
                                                FAQs
                                            </Link></li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
                <div className="footer-widget footer-widget__contact">
                  <h3 className="footer-widget__title">Contact</h3>
                  <p className="footer-widget__text">{CONTACT.ADDRESS}</p>
                  <ul className="footer-widget__contact-list list-unstyled">
                    <li>
                      <Link to={`mailto:${CONTACT.EMAIL}`}>
                        <i className="fa fa-envelope"></i>
                        {CONTACT.EMAIL}
                      </Link>
                    </li>
                    <li>
                      <Link to={`tel:${CONTACT.PHONE}`}>
                        <i className="fa fa-phone-square-alt"></i>
                        {CONTACT.PHONE}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
                <div className="footer-widget__social">
                  {/* <Link to="#">
                    <i className="fab fa-twitter"></i>
                  </Link> */}
                  <a target="_blank" href={`${CONTACT.FACEBOOK}`}>
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a target="_blank" href={`${CONTACT.INSTAGRAM}`}>
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              {/* <div className="col-sm-12 col-md-6 col-lg-3">
                                <div className="footer-widget footer-widget__mailchimp">
                                    <h3 className="footer-widget__title">Newsletter</h3>
                                    <p className="footer-widget__text">Subscribe to our newsletter for daily
                                        new and updates</p>
                                    <form action="#" className="footer-widget__mailchimp-form">
                                        <input type="text" placeholder="Email Address" />
                                        <button type="submit" className="thm-btn">
                                            Send
                                            <i className="far fa-arrow-alt-circle-right"></i>
                                        </button>
                                    </form>
                                </div>
                            </div> */}
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="container">
            <div className="bottom-footer__inner">
              <p className="bottom-footer__text">© Copyrights, 2023</p>
              <p className="bottom-footer__text">
                <Link to="#">Terms & Condition</Link>
                <Link to="#">Privacy Policy</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
