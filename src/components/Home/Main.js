import AnimatedNumber from 'animated-number-react'
import { jarallax } from 'jarallax'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import BGImg from '../../assets/images/backgrounds/main-slider-1-1.jpg'
import BGImg1 from '../../assets/images/backgrounds/main-slider-1-2.jpg'

const Home = () => {
  const [ytShow, setytShow] = useState(false)
  const [tabMenu, tabActive] = useState({ sedan: true })
  const activeRef = useRef(null)

  useEffect(() => {
    jarallax(activeRef.current, {
      speed: 0.3,
    })
  }, [])

  return (
    <>
      <section className="main-slider">
        <Swiper
          className="swiper-container thm-swiper__slider"
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: '#main-slider__swiper-button-next',
            prevEl: '#main-slider__swiper-button-prev',
          }}
          autoplay={{ delay: 5000 }}
        >
          <div className="swiper-wrapper">
            <SwiperSlide>
              <div className="swiper-slide">
                <div
                  className="image-layer"
                  style={{ backgroundImage: `url(${BGImg})` }}
                ></div>

                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <h2>
                        Care Service <br />
                        For Your <br />
                        Cars
                      </h2>
                      <Link to="/onlinebooking" className="thm-btn">
                        Order Now{' '}
                        <i className="far fa-arrow-alt-circle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-slide">
                <div
                  className="image-layer"
                  style={{ backgroundImage: `url(${BGImg1})` }}
                ></div>

                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <h2>
                        Care Service <br />
                        For Your <br />
                        Cars
                      </h2>
                      <Link to="/onlinebooking" className="thm-btn">
                        Order Now{' '}
                        <i className="far fa-arrow-alt-circle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>

          <div className="main-slider__nav">
            <div
              className="swiper-button-prev"
              id="main-slider__swiper-button-next"
            >
              <i className="crsine-left-arrow"></i>
            </div>
            <div
              className="swiper-button-next"
              id="main-slider__swiper-button-prev"
            >
              <i className="crsine-right-arrow"></i>
            </div>
          </div>
        </Swiper>
      </section>

      <section className="about-two">
        <div className="container">
          <div className="row flex-lg-row-reverse">
            <div className="col-lg-6">
              <div
                className="about-two__image wow fadeInRight"
                data-wow-duration="1500ms"
              >
                <img
                  src="assets/images/resources/about-2-1.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-two__content">
                <div className="section-title">
                  <span className="section-title__tagline">
                    write a message
                  </span>
                  <h2 className="section-title__title">
                    It’s Time to Come and <br />
                    Clean Your Car
                  </h2>
                </div>
                <div className="about-two__summery">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even.
                </div>
                <ul className="about-two__list list-unstyled">
                  <li>
                    <i className="fa fa-check-circle"></i>
                    We’re professional and certified car washers
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>
                    We use quality material to clean your cars
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>
                    We care about our customers satisfaction
                  </li>
                </ul>
                <hr className="section-separator" />
                <div className="about-two__icon-box">
                  <i className=" crsine-car-service-3 about-two__icon"></i>
                  <div className="about-two__icon-content">
                    We have 30+ years of experiences for give you better quality
                    results.
                  </div>
                </div>
                <div className="about-two__button-box">
                  <Link to="/onlinebooking" className="thm-btn">
                    Order Now
                    <i className="far fa-arrow-alt-circle-right"></i>
                  </Link>
                  <div className="about-two__phone">
                    <i className="crsine-phone-call"></i>
                    <div className="about-two__phone-content">
                      <span>Call Us Anytime</span>
                      <Link to="tel:92-666-888-0000">92 666 888 0000</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-home">
        <img
          src="assets/images/backgrounds/service-bg-1.png"
          alt=""
          className="image-layer"
        />
        <div className="container">
          <div className="section-title text-center">
            <span className="section-title__tagline">What We’re Offering</span>
            <h2 className="section-title__title">
              Services We’re Provding <br />
              to Customers
            </h2>
          </div>

          <div className="row ">
            <div
              className="col-sm-12 col-md-12 col-lg-4 wow fadeInLeft"
              data-wow-duration="1500ms"
            >
              <div className="service-card">
                <div className="service-card__image">
                  <img src="assets/images/services/service-1-1.jpg" alt="" />
                  <Link to="/servicedetails">
                    <i className="crsine-plus"></i>
                  </Link>
                </div>
                <div className="service-card__content">
                  <div className="service-card__icon">
                    <i className=" crsine-car-service-1"></i>
                  </div>
                  <h3 className="service-card__title">
                    <Link to="/servicedetails">Full Service Wash</Link>
                  </h3>
                  <p className="service-card__text">
                    There are not many of passages of lorem ipsum avail isn
                    alteration donationa in form.
                  </p>
                  <Link to="/servicedetails" className="service-card__more">
                    <i className="crsine-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-sm-12 col-md-12 col-lg-4 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="100ms"
            >
              <div className="service-card">
                <div className="service-card__image">
                  <img src="assets/images/services/service-1-2.jpg" alt="" />
                  <Link to="/servicedetails">
                    <i className="crsine-plus"></i>
                  </Link>
                </div>
                <div className="service-card__content">
                  <div className="service-card__icon">
                    <i className="crsine-car-service-2"></i>
                  </div>
                  <h3 className="service-card__title">
                    <Link to="/servicedetails">Auto Detailing</Link>
                  </h3>
                  <p className="service-card__text">
                    There are not many of passages of lorem ipsum avail isn
                    alteration donationa in form.
                  </p>
                  <Link to="/servicedetails" className="service-card__more">
                    <i className="crsine-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-sm-12 col-md-12 col-lg-4 wow fadeInRight"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div className="service-card">
                <div className="service-card__image">
                  <img src="assets/images/services/service-1-3.jpg" alt="" />
                  <Link to="/servicedetails">
                    <i className="crsine-plus"></i>
                  </Link>
                </div>
                <div className="service-card__content">
                  <div className="service-card__icon">
                    <i className="crsine-car-wash"></i>
                  </div>
                  <h3 className="service-card__title">
                    <Link to="/servicedetails">Express Interior</Link>
                  </h3>
                  <p className="service-card__text">
                    There are not many of passages of lorem ipsum avail isn
                    alteration donationa in form.
                  </p>
                  <Link to="/servicedetails" className="service-card__more">
                    <i className="crsine-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-lists">
        <div
          className="feature-lists__boxed jarallax"
          ref={activeRef}
          data-jarallax
        >
          <img
            src="assets/images/backgrounds/feature-bg-1-1.jpg"
            alt=""
            className="jarallax-img"
          />
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="section-title">
                  <span className="section-title__tagline">
                    What We’re Offering
                  </span>
                  <h2 className="section-title__title">
                    Premium Car <br />
                    Washing Center
                  </h2>
                </div>
                <Link to="/onlinebooking" className="thm-btn">
                  Appointment <i className="far fa-arrow-alt-circle-right"></i>
                </Link>
              </div>
              <div className="col-lg-8">
                <div className="feature-lists__wrap">
                  <ul className="list-unstyled feature-lists__list">
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Platinum Exterior Wash
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      24-Hour Rain Guarantee
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Door Panels / Seats Wiped
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Super Wash
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Hhard Surfaces Cleaned
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Thorough Cleaning of Dash
                    </li>
                  </ul>
                  <ul className="list-unstyled feature-lists__list">
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Rubber Mats Washed
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Tire Shine
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Engine Wash
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Seats Cleaning
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Rim Cleaner x 2
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Interior Polish
                    </li>
                  </ul>
                  <ul className="list-unstyled feature-lists__list">
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Dashboard Cleaning
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Exterior Shine
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Auto Detailing
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Full Car Service
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      All Cars Wash
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Best Quality
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="call-to-action">
        <div className="container">
          <h3 className="call-to-action__title">
            Easy Online Carwash Booking System
          </h3>

          <div className="call-to-action__btn-wrap">
            <Link to="/onlinebooking" className="thm-btn">
              Book Appointment
              <i className="far fa-arrow-alt-circle-right"></i>
            </Link>
          </div>
        </div>
      </section>
      <section className="feature-one">
        <div className="video-one wow fadeInLeft" data-wow-duration="1500ms">
          <img src="assets/images/resources/video-1-1.jpg" alt="" />
          <div className="video-one__content">
            <span onClick={() => setytShow(true)} className="video-popup">
              <i className="fa fa-play"></i>
            </span>
            <p className="video-one__text">
              We specialize in detailing and cars washing
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-xl-end">
            <div className="col-lg-7">
              <div className="feature-one__content">
                <div className="section-title">
                  <span className="section-title__tagline">
                    Our Service Benefits
                  </span>
                  <h2 className="section-title__title">
                    Why You Should Choose <br />
                    Our Services
                  </h2>
                </div>
                <div className="feature-one__summery">
                  There are many variations of passages of but the majority have
                  in some form, by injected humou or words which don't look even
                  slightly believable of but the majority have suffered.
                </div>
                <ul className="list-unstyled feature-one__list">
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Reliable and Proven
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Best Team Members
                  </li>
                </ul>

                <ul className="list-unstyled feature-one__progress">
                  <li className="feature-one__progress-item">
                    <span className="feature-one__progress-title">
                      Cleaning
                    </span>
                    <div className="feature-one__progress-bar">
                      <span
                        className="feature-one__progress-main"
                        style={{ width: '77%' }}
                      >
                        <span className="feature-one__progress-count">77%</span>
                      </span>
                    </div>
                  </li>
                  <li className="feature-one__progress-item">
                    <span className="feature-one__progress-title">Washing</span>
                    <div className="feature-one__progress-bar">
                      <span
                        className="feature-one__progress-main"
                        style={{ width: '58%' }}
                      >
                        <span className="feature-one__progress-count">58%</span>
                      </span>
                    </div>
                  </li>
                </ul>

                <div className="feature-one__counter">
                  <i className="crsine-car-service feature-one__counter-icon"></i>

                  <div className="feature-one__counter-content">
                    <h3
                      className="feature-one__counter-title odometer"
                      data-count="867000"
                    >
                      <AnimatedNumber
                        value={867000}
                        duration={6000}
                        formatValue={(v) => Math.round(v)}
                      />
                    </h3>

                    <p className="feature-one__counter-text">
                      Happy customers in 30 years of washing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-one">
        <div className="container">
          <div className="section-title text-center">
            <span className="section-title__tagline">Our Pricing Plans</span>
            <h2 className="section-title__title">
              Looking for Car Wash? <br />
              Choose a Plan
            </h2>
          </div>

          <div className="tab-box" id="price-tab">
            <ul className="pricing-one__tab-title tab-box__title list-unstyled">
              <li
                className={`pricing-one__tab-title-item ${
                  tabMenu.sedan && 'active-item'
                }`}
                onClick={() => tabActive({ sedan: true })}
              >
                <i className="crsine-sedan-car-model"></i>
                <p>Sedan Car</p>
              </li>
              <li
                className={`pricing-one__tab-title-item ${
                  tabMenu.minivancan && 'active-item'
                }`}
                onClick={() => tabActive({ minivancan: true })}
              >
                <i className="crsine-minivan-car"></i>
                <p>Minivan Can</p>
              </li>
              <li
                className={`pricing-one__tab-title-item ${
                  tabMenu.microbus && 'active-item'
                }`}
                onClick={() => tabActive({ microbus: true })}
              >
                <i className="crsine-microbus"></i>
                <p>Microbus</p>
              </li>
              <li
                className={`pricing-one__tab-title-item ${
                  tabMenu.SUVCar && 'active-item'
                }`}
                onClick={() => tabActive({ SUVCar: true })}
              >
                <i className="crsine-car-suv"></i>
                <p>SUV Car</p>
              </li>
            </ul>

            <div
              className={`tab-box__content  ${tabMenu.sedan && 'active-item'}`}
            >
              <div className="row">
                <div className="col-md-12 col-lg-4">
                  <div className="price-card">
                    <p className="price-card__name">Basic Washing</p>
                    <p className="price-card__amount">
                      <span className="price-card__amount-symbol">$</span>
                      20
                      <span className="price-card__amount-fraction">.99</span>
                    </p>
                    <div className="price-card__duration">
                      <i className="far fa-clock"></i>
                      20 Minutes
                    </div>
                    <div className="price-card__bottom">
                      <ul className="price-card__list list-unstyled">
                        <li>
                          <i className="fa fa-check"></i>
                          Exterior Wash
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                          Interior Vacuum
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                          Exterior Polish
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                          Windows In & Out
                        </li>
                      </ul>
                      <Link to="/onlinebooking" className="thm-btn">
                        Order Now
                        <i className="far fa-arrow-alt-circle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4">
                  <div className="price-card">
                    <p className="price-card__name">Basic Washing</p>
                    <p className="price-card__amount">
                      <span className="price-card__amount-symbol">$</span>
                      30
                      <span className="price-card__amount-fraction">.99</span>
                    </p>
                    <div className="price-card__duration">
                      <i className="far fa-clock"></i>
                      20 Minutes
                    </div>
                    <div className="price-card__bottom">
                      <ul className="price-card__list list-unstyled">
                        <li>
                          <i className="fa fa-check"></i>
                          Exterior Wash
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                          Interior Vacuum
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                          Exterior Polish
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                          Windows In & Out
                        </li>
                      </ul>
                      <Link to="/onlinebooking" className="thm-btn">
                        Order Now
                        <i className="far fa-arrow-alt-circle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4">
                  <div className="price-card">
                    <p className="price-card__name">Basic Washing</p>
                    <p className="price-card__amount">
                      <span className="price-card__amount-symbol">$</span>
                      60
                      <span className="price-card__amount-fraction">.99</span>
                    </p>
                    <div className="price-card__duration">
                      <i className="far fa-clock"></i>
                      20 Minutes
                    </div>
                    <div className="price-card__bottom">
                      <ul className="price-card__list list-unstyled">
                        <li>
                          <i className="fa fa-check"></i>
                          Exterior Wash
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                          Interior Vacuum
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                          Exterior Polish
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                          Windows In & Out
                        </li>
                      </ul>
                      <Link to="/onlinebooking" className="thm-btn">
                        Order Now
                        <i className="far fa-arrow-alt-circle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`tab-box__content ${
                tabMenu.minivancan && 'active-item'
              }`}
            >
              <div className="row">
                <div className="col-md-12 col-lg-4">
                  <div className="price-card">
                    <p className="price-card__name">Basic Washing</p>
                    <p className="price-card__amount">
                      <span className="price-card__amount-symbol">$</span>
                      20
                      <span className="price-card__amount-fraction">.99</span>
                    </p>
                    <div className="price-card__duration">
                      <i className="far fa-clock"></i>
                      20 Minutes
                    </div>
                    <div className="price-card__bottom">
                      <ul className="price-card__list list-unstyled">
                        <li>
                          <i className="fa fa-check"></i>
                          Exterior Wash
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                          Interior Vacuum
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                          Exterior Polish
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                          Windows In & Out
                        </li>
                      </ul>
                      <Link to="/onlinebooking" className="thm-btn">
                        Order Now
                        <i className="far fa-arrow-alt-circle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4">
                  <div className="price-card">
                    <p className="price-card__name">Basic Washing</p>
                    <p className="price-card__amount">
                      <span className="price-card__amount-symbol">$</span>
                      30
                      <span className="price-card__amount-fraction">.99</span>
                    </p>
                    <div className="price-card__duration">
                      <i className="far fa-clock"></i>
                      20 Minutes
                    </div>
                    <div className="price-card__bottom">
                      <ul className="price-card__list list-unstyled">
                        <li>
                          <i className="fa fa-check"></i>
                          Exterior Wash
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                          Interior Vacuum
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                          Exterior Polish
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                          Windows In & Out
                        </li>
                      </ul>
                      <Link to="/onlinebooking" className="thm-btn">
                        Order Now
                        <i className="far fa-arrow-alt-circle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4">
                  <div className="price-card">
                    <p className="price-card__name">Basic Washing</p>
                    <p className="price-card__amount">
                      <span className="price-card__amount-symbol">$</span>
                      60
                      <span className="price-card__amount-fraction">.99</span>
                    </p>
                    <div className="price-card__duration">
                      <i className="far fa-clock"></i>
                      20 Minutes
                    </div>
                    <div className="price-card__bottom">
                      <ul className="price-card__list list-unstyled">
                        <li>
                          <i className="fa fa-check"></i>
                          Exterior Wash
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                          Interior Vacuum
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                          Exterior Polish
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                          Windows In & Out
                        </li>
                      </ul>
                      <Link to="/onlinebooking" className="thm-btn">
                        Order Now
                        <i className="far fa-arrow-alt-circle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`tab-box__content ${
                tabMenu.microbus && 'active-item'
              }`}
            >
              <div className="row">
                <div className="col-md-12 col-lg-4">
                  <div className="price-card">
                    <p className="price-card__name">Basic Washing</p>
                    <p className="price-card__amount">
                      <span className="price-card__amount-symbol">$</span>
                      20
                      <span className="price-card__amount-fraction">.99</span>
                    </p>
                    <div className="price-card__duration">
                      <i className="far fa-clock"></i>
                      20 Minutes
                    </div>
                    <div className="price-card__bottom">
                      <ul className="price-card__list list-unstyled">
                        <li>
                          <i className="fa fa-check"></i>
                          Exterior Wash
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                          Interior Vacuum
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                          Exterior Polish
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                          Windows In & Out
                        </li>
                      </ul>
                      <Link to="/onlinebooking" className="thm-btn">
                        Order Now
                        <i className="far fa-arrow-alt-circle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4">
                  <div className="price-card">
                    <p className="price-card__name">Basic Washing</p>
                    <p className="price-card__amount">
                      <span className="price-card__amount-symbol">$</span>
                      30
                      <span className="price-card__amount-fraction">.99</span>
                    </p>
                    <div className="price-card__duration">
                      <i className="far fa-clock"></i>
                      20 Minutes
                    </div>
                    <div className="price-card__bottom">
                      <ul className="price-card__list list-unstyled">
                        <li>
                          <i className="fa fa-check"></i>
                          Exterior Wash
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                          Interior Vacuum
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                          Exterior Polish
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                          Windows In & Out
                        </li>
                      </ul>
                      <Link to="/onlinebooking" className="thm-btn">
                        Order Now
                        <i className="far fa-arrow-alt-circle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4">
                  <div className="price-card">
                    <p className="price-card__name">Basic Washing</p>
                    <p className="price-card__amount">
                      <span className="price-card__amount-symbol">$</span>
                      60
                      <span className="price-card__amount-fraction">.99</span>
                    </p>
                    <div className="price-card__duration">
                      <i className="far fa-clock"></i>
                      20 Minutes
                    </div>
                    <div className="price-card__bottom">
                      <ul className="price-card__list list-unstyled">
                        <li>
                          <i className="fa fa-check"></i>
                          Exterior Wash
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                          Interior Vacuum
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                          Exterior Polish
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                          Windows In & Out
                        </li>
                      </ul>
                      <Link to="/onlinebooking" className="thm-btn">
                        Order Now
                        <i className="far fa-arrow-alt-circle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`tab-box__content ${tabMenu.SUVCar && 'active-item'}`}
            >
              <div className="row">
                <div className="col-md-12 col-lg-4">
                  <div className="price-card">
                    <p className="price-card__name">Basic Washing</p>
                    <p className="price-card__amount">
                      <span className="price-card__amount-symbol">$</span>
                      20
                      <span className="price-card__amount-fraction">.99</span>
                    </p>
                    <div className="price-card__duration">
                      <i className="far fa-clock"></i>
                      20 Minutes
                    </div>
                    <div className="price-card__bottom">
                      <ul className="price-card__list list-unstyled">
                        <li>
                          <i className="fa fa-check"></i>
                          Exterior Wash
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                          Interior Vacuum
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                          Exterior Polish
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                          Windows In & Out
                        </li>
                      </ul>
                      <Link to="/onlinebooking" className="thm-btn">
                        Order Now
                        <i className="far fa-arrow-alt-circle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4">
                  <div className="price-card">
                    <p className="price-card__name">Basic Washing</p>
                    <p className="price-card__amount">
                      <span className="price-card__amount-symbol">$</span>
                      30
                      <span className="price-card__amount-fraction">.99</span>
                    </p>
                    <div className="price-card__duration">
                      <i className="far fa-clock"></i>
                      20 Minutes
                    </div>
                    <div className="price-card__bottom">
                      <ul className="price-card__list list-unstyled">
                        <li>
                          <i className="fa fa-check"></i>
                          Exterior Wash
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                          Interior Vacuum
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                          Exterior Polish
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                          Windows In & Out
                        </li>
                      </ul>
                      <Link to="/onlinebooking" className="thm-btn">
                        Order Now
                        <i className="far fa-arrow-alt-circle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4">
                  <div className="price-card">
                    <p className="price-card__name">Basic Washing</p>
                    <p className="price-card__amount">
                      <span className="price-card__amount-symbol">$</span>
                      60
                      <span className="price-card__amount-fraction">.99</span>
                    </p>
                    <div className="price-card__duration">
                      <i className="far fa-clock"></i>
                      20 Minutes
                    </div>
                    <div className="price-card__bottom">
                      <ul className="price-card__list list-unstyled">
                        <li>
                          <i className="fa fa-check"></i>
                          Exterior Wash
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                          Interior Vacuum
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                          Exterior Polish
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                          Windows In & Out
                        </li>
                      </ul>
                      <Link to="/onlinebooking" className="thm-btn">
                        Order Now
                        <i className="far fa-arrow-alt-circle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-two">
        <div className="container">
          <div className="row flex-xl-row-reverse">
            <div className="col-xl-6">
              <div className="feature-two__image">
                <img src="assets/images/resources/feature-1-1.jpg" alt="" />
                <div
                  className="feature-two__image-text wow flipInY"
                  data-wow-duration="1500ms"
                >
                  <i className="feature-two__image-line-left"></i>
                  <i className="feature-two__image-line-right"></i>
                  <i className="feature-two__image-line-top"></i>
                  <i className="feature-two__image-line-bottom"></i>
                  <span>30</span>
                  Years of Experience
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="feature-two__content">
                <div className="section-title">
                  <span className="section-title__tagline">
                    Find Who We Are
                  </span>
                  <h2 className="section-title__title">
                    We Only Provide Quality <br />
                    Care Services
                  </h2>
                </div>

                <ul className="list-unstyled feature-two__list">
                  <li className="feature-two__list-item">
                    <i className="feature-two__list-icon crsine-car"></i>
                    <div className="feature-two__list-content">
                      <h3 className="feature-two__list-title">
                        Natural Cleaners
                      </h3>
                      <p className="feature-two__list-text">
                        Donec pellentesque dapibus interdum. Mauris et tellus
                        congue rutrum neque a, varius felis.
                      </p>
                    </div>
                  </li>
                  <li className="feature-two__list-item">
                    <i className="feature-two__list-icon crsine-tire"></i>
                    <div className="feature-two__list-content">
                      <h3 className="feature-two__list-title">Tire Shines</h3>
                      <p className="feature-two__list-text">
                        Donec pellentesque dapibus interdum. Mauris et tellus
                        congue rutrum neque a, varius felis.
                      </p>
                    </div>
                  </li>
                  <li className="feature-two__list-item">
                    <i className="feature-two__list-icon crsine-mat"></i>
                    <div className="feature-two__list-content">
                      <h3 className="feature-two__list-title">Mat Washing</h3>
                      <p className="feature-two__list-text">
                        Donec pellentesque dapibus interdum. Mauris et tellus
                        congue rutrum neque a, varius felis.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gallery-two__home-title">
        <div className="container">Checkout Our Gallery</div>
      </div>

      <div className="gallery-two gallery-two__home">
        <Swiper
          className="swiper-container thm-swiper__slider"
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            '376': {
              spaceBetween: 30,
              slidesPerView: 2,
            },
            '576': {
              spaceBetween: 30,
              slidesPerView: 3,
            },
            '768': {
              spaceBetween: 30,
              slidesPerView: 3,
            },
            '992': {
              spaceBetween: 30,
              slidesPerView: 4,
            },
            '1200': {
              spaceBetween: 30,
              slidesPerView: 5,
            },
          }}
        >
          <div className="swiper-wrapper">
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="gallery-one__item">
                  <img src="assets/images/gallery/gallery-2-1.jpg" alt="" />
                  <a
                    className="img-popup"
                    href="assets/images/gallery/gallery-2-1.jpg"
                  >
                    <i className="crsine-plus"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="gallery-one__item">
                  <img src="assets/images/gallery/gallery-2-2.jpg" alt="" />
                  <a
                    className="img-popup"
                    href="assets/images/gallery/gallery-2-2.jpg"
                  >
                    <i className="crsine-plus"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="gallery-one__item">
                  <img src="assets/images/gallery/gallery-2-3.jpg" alt="" />
                  <a
                    className="img-popup"
                    href="assets/images/gallery/gallery-2-3.jpg"
                  >
                    <i className="crsine-plus"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="gallery-one__item">
                  <img src="assets/images/gallery/gallery-2-4.jpg" alt="" />
                  <a
                    className="img-popup"
                    href="assets/images/gallery/gallery-2-4.jpg"
                  >
                    <i className="crsine-plus"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="gallery-one__item">
                  <img src="assets/images/gallery/gallery-2-5.jpg" alt="" />
                  <a
                    className="img-popup"
                    href="assets/images/gallery/gallery-2-5.jpg"
                  >
                    <i className="crsine-plus"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>

      <section className="blog-home">
        <div className="container">
          <div className="blog-home__top">
            <div className="section-title">
              <span className="section-title__tagline">Write a Message</span>
              <h2 className="section-title__title">
                We’re Connected to Help You <br />
                All the Time
              </h2>
            </div>

            <div className="blog-home__top-text">
              Donec pellentesque dapibus interdum. Mauris et tellus <br />{' '}
              congue rutrum neque a, varius felis.
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="blog-card">
                <div className="blog-card__image">
                  <img src="assets/images/blog/blog-1-1.png" alt="" />
                  <Link to="/newsdetails"></Link>
                </div>
                <div className="blog-card__content">
                  <div className="blog-card__date">20 Jan</div>
                  <ul className="list-unstyled blog-card__meta">
                    <li className="blog-card__meta-item">
                      <Link to="#">
                        <i className="far fa-user-circle"></i>
                        by Admin
                      </Link>
                    </li>
                    <li className="blog-card__meta-item">
                      <Link to="#">
                        <i className="far fa-comments"></i>2 Comments
                      </Link>
                    </li>
                  </ul>
                  <h3 className="blog-card__title">
                    <Link to="/newsdetails">
                      Get Some Useful Car Service Tips
                    </Link>
                  </h3>
                  <p className="blog-card__text">
                    Lorem ipsum is simply free text used by copytyping
                    refreshing.
                  </p>
                  <Link to="/newsdetails" className="blog-card__more">
                    Read More
                    <i className="far fa-arrow-alt-circle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="blog-card">
                <div className="blog-card__image">
                  <img src="assets/images/blog/blog-1-2.png" alt="" />
                  <Link to="/newsdetails"></Link>
                </div>
                <div className="blog-card__content">
                  <div className="blog-card__date">20 Jan</div>
                  <ul className="list-unstyled blog-card__meta">
                    <li className="blog-card__meta-item">
                      <Link to="#">
                        <i className="far fa-user-circle"></i>
                        by Admin
                      </Link>
                    </li>
                    <li className="blog-card__meta-item">
                      <Link to="#">
                        <i className="far fa-comments"></i>2 Comments
                      </Link>
                    </li>
                  </ul>
                  <h3 className="blog-card__title">
                    <Link to="/newsdetails">
                      Get Some Useful Car Service Tips
                    </Link>
                  </h3>
                  <p className="blog-card__text">
                    Lorem ipsum is simply free text used by copytyping
                    refreshing.
                  </p>
                  <Link to="/newsdetails" className="blog-card__more">
                    Read More
                    <i className="far fa-arrow-alt-circle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="blog-card">
                <div className="blog-card__image">
                  <img src="assets/images/blog/blog-1-3.png" alt="" />
                  <Link to="/newsdetails"></Link>
                </div>
                <div className="blog-card__content">
                  <div className="blog-card__date">20 Jan</div>
                  <ul className="list-unstyled blog-card__meta">
                    <li className="blog-card__meta-item">
                      <Link to="#">
                        <i className="far fa-user-circle"></i>
                        by Admin
                      </Link>
                    </li>
                    <li className="blog-card__meta-item">
                      <Link to="#">
                        <i className="far fa-comments"></i>2 Comments
                      </Link>
                    </li>
                  </ul>
                  <h3 className="blog-card__title">
                    <Link to="/newsdetails">
                      Get Some Useful Car Service Tips
                    </Link>
                  </h3>
                  <p className="blog-card__text">
                    Lorem ipsum is simply free text used by copytyping
                    refreshing.
                  </p>
                  <Link to="/newsdetails" className="blog-card__more">
                    Read More
                    <i className="far fa-arrow-alt-circle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-separator" />
      <div className="client-carousel ">
        <div className="container">
          <Swiper
            className="swiper-container thm-swiper__slider"
            modules={[Autoplay]}
            spaceBetween={140}
            slidesPerView={5}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              '0': {
                spaceBetween: 30,
                slidesPerView: 2,
              },
              '375': {
                spaceBetween: 30,
                slidesPerView: 2,
              },
              '575': {
                spaceBetween: 30,
                slidesPerView: 3,
              },
              '767': {
                spaceBetween: 50,
                slidesPerView: 4,
              },
              '991': {
                spaceBetween: 50,
                slidesPerView: 5,
              },
              '1199': {
                spaceBetween: 140,
                slidesPerView: 5,
              },
            }}
          >
            <div className="swiper-wrapper">
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>

      {/* <Link to="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></Link > */}

      {/* {ytShow &&

                <>
                    <div className="mfp-bg mfp-fade mfp-ready" style={{ height: '8367px', position: 'absolute' }}></div>

                    <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready" tabindex="-1" style={{ top: '3807px', position: 'absolute', height: '298px' }}>
                        <div className="mfp-container mfp-s-ready mfp-iframe-holder">
                            <div className="mfp-content">
                                <div className="mfp-iframe-scaler">
                                    <button title="Close (Esc)" type="button" className="mfp-close" onClick={() => setytShow(false)}>×</button>
                                    <iframe className="mfp-iframe" title="video-1" src="//www.youtube.com/embed/y2Eqx6ys1hQ?autoplay=1" frameborder="0" allowfullscreen="">
                                    </iframe></div></div><div className="mfp-preloader">Loading...</div>
                        </div>
                    </div>
                </>} */}
    </>
  )
}

export default Home
