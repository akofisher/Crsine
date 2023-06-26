import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectAbout } from '../../Store/CarWash/CarWashSelector'
import BGPh1 from '../../assets/images/backgrounds/page-header-bg-1-1.jpg'

const Contact = () => {
  const CONTACT = useSelector(selectAbout)

  useEffect(() => {}, [CONTACT])
  return (
    <>
      <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content"></div>
      </div>
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{ backgroundImage: `url(${BGPh1})` }}
        ></div>

        <div className="container">
          <h2>Contact</h2>
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>/</li>
            <li>
              <span>Contact</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="contact-one">
        <div className="container">
          <div className="section-title">
            <span className="section-title__tagline">Dear Customer</span>
            <h2 className="section-title__title">
              We’re Connected to Help You <br />
              All the Time
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-one__content">
                <p className="contact-one__text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour.
                </p>
                <p className="contact-one__address">
                  86 Road Broklyn Street, 600 <br />
                  New York, USA
                </p>
                <ul className="contact-one__list list-unstyled">
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
            {/* <div className="col-lg-8">
              <form
                action="assets/inc/sendemail.php"
                className="contact-form-validated contact-one__form"
              >
                <div className="row">
                  <div className="col-md-6">
                    <input type="text" placeholder="Your Name" name="name" />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="email"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      name="phone"
                    />
                  </div>
                  <div className="col-md-6">
                    <input type="text" placeholder="Subject" name="subject" />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      name="message"
                      placeholder="Write Comment"
                    ></textarea>
                  </div>
                  <div className="col-md-12">
                    <button type="submit" className="thm-btn">
                      Send a Message
                      <i className="far fa-arrow-alt-circle-right"></i>
                    </button>
                  </div>
                </div>
              </form>
              <div className="result"></div>
            </div> */}
          </div>
        </div>
      </section>

      <div className="google-map__contact-page">
        <iframe
          title="template google map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
          className="map__contact-page"
          allowFullScreen
        ></iframe>
      </div>

      {/* <Link to="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></Link> */}
    </>
  )
}
export default Contact
