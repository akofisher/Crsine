
import BGImg3 from '../../assets/images/backgrounds/main-slider-2-2.jpg'
import BGImg2 from '../../assets/images/backgrounds/main-slider-2-1.jpg'
import { Link } from 'react-router-dom'
import React from 'react'
import AnimatedNumber from "animated-number-react"
import { useRef, useEffect } from 'react'
import { jarallax } from "jarallax";
import { Navigation, Autoplay, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Home2 = () => {
    // const activeRef = useRef(null);
    // const active1Ref = useRef(null);
    // const active2Ref = useRef(null);

    useEffect(() => {
        // jarallax(activeRef.current, {
        //     speed: 0.3,
        // })
        // jarallax(active1Ref.current, {
        //     speed: 0.3,
        // })
        // jarallax(active2Ref.current, {
        //     speed: 0.3,
        // })
    }, [])

    return (
        <>
            <div className="stricky-header stricked-menu main-menu main-menu__two">
                <div className="sticky-header__content"></div>
            </div>

            <section className="main-slider main-slider-two">
                <Swiper
                    className="swiper-container thm-swiper__slider"
                    modules={[Navigation, Autoplay]}
                    slidesPerView={1}
                    loop={true}
                    navigation={{
                        nextEl: "#main-slider__swiper-button-next",
                        prevEl: "#main-slider__swiper-button-prev"
                    }}
                    autoplay={{ delay: 5000 }}
                >

                    <div className="swiper-wrapper">
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="image-layer" style={{ backgroundImage: `url(${BGImg2})` }}>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12 text-center">
                                            <p>Welcome to Crsine Carwash</p>
                                            <h2>Premium Quality <br />
                                                Carwash</h2>
                                            <Link to="/onlinebooking" className="thm-btn">Order Now <i className="far fa-arrow-alt-circle-right"></i></Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="image-layer" style={{ backgroundImage: `url(${BGImg3})` }}>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12 text-center">
                                            <p>Welcome to Crsine Carwash</p>
                                            <h2>Premium Quality <br />
                                                Carwash</h2>
                                            <Link to="/onlinebooking" className="thm-btn">Order Now <i className="far fa-arrow-alt-circle-right"></i></Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>

                    <div className="main-slider__nav-two">
                        <div className="swiper-button-prev" id="main-slider__swiper-button-next"><i className="crsine-left-arrow"></i>
                        </div>
                        <div className="swiper-button-next" id="main-slider__swiper-button-prev"><i className="crsine-right-arrow"></i>
                        </div>
                    </div>
                </Swiper>
            </section>

            <section className="about-five">
                <img src="assets/images/shapes/about-5-shape-1.png" className="image-layer" alt="" />
                <div className="container">
                    <div className="row flex-xl-row-reverse">
                        <div className="col-xl-6">
                            <div className="about-five__images">
                                <img src="assets/images/resources/about-1-1.jpg" alt="" className="wow fadeInUp img-fluid" data-wow-duration="1500ms" />
                                <img src="assets/images/resources/about-1-2.jpg" alt="" className="wow fadeInUp img-fluid" data-wow-duration="1500ms" data-wow-delay="100ms" />
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="about-five__content">
                                <div className="section-title">
                                    <span className="section-title__tagline">Get to Know Us</span>
                                    <h2 className="section-title__title">Welcome to Crsine Car
                                        Wash Center</h2>
                                </div>
                                <div className="about-five__summery">
                                    We have 30+ years of experiences for give you better quality results.
                                </div>
                                <div className="about-five__text">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                    alteration in some form, by injected humour, or randomised words which don't look even you are
                                    going to use a passage.
                                </div>
                            </div>
                            <div className="about-five__progress-wrap">

                                <div className="about-five__progress">
                                    <div className="about-five__progress-box">
                                        <div className="circle-progress" data-options='{ "value": 0.9,"thickness": 3,"emptyFill": "#eef3f7","lineCap": "square", "size": 120, "fill": { "color": "#3fbfef" } }'>
                                        </div>
                                        <span>90%</span>
                                    </div>
                                    <div className="about-five__progress-content">
                                        <h3>Interior
                                            Washing</h3>
                                    </div>
                                </div>
                                <div className="about-five__progress">
                                    <div className="about-five__progress-box">
                                        <div className="circle-progress" data-options='{ "value": 0.5,"thickness": 3,"emptyFill": "#eef3f7","lineCap": "square", "size": 120, "fill": { "color": "#3fbfef" } }'>
                                        </div>
                                        <span>50%</span>
                                    </div>
                                    <div className="about-five__progress-content">
                                        <h3>Quality
                                            Cleaning</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-home-two">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="section-title__tagline">What We’re Offering</span>
                        <h2 className="section-title__title">Services We’re Provding <br />
                            to Customers</h2>
                    </div>

                    <div className="row ">
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <div className="service-card">
                                <div className="service-card__image">
                                    <img src="assets/images/services/service-1-1.jpg" alt="" />
                                    <Link to="/servicedetails"><i className="crsine-plus"></i></Link>
                                </div>
                                <div className="service-card__content">
                                    <div className="service-card__icon">
                                        <i className=" crsine-car-service-1"></i>
                                    </div>
                                    <h3 className="service-card__title"><Link to="/servicedetails">
                                        Full Service Wash
                                    </Link></h3>
                                    <p className="service-card__text">There are not many of passages of lorem ipsum avail isn alteration
                                        donationa in form.</p>
                                    <Link to="/servicedetails" className="service-card__more"><i className="crsine-right-arrow"></i></Link>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <div className="service-card">
                                <div className="service-card__image">
                                    <img src="assets/images/services/service-1-2.jpg" alt="" />
                                    <Link to="/servicedetails"><i className="crsine-plus"></i></Link>
                                </div>
                                <div className="service-card__content">
                                    <div className="service-card__icon">
                                        <i className="crsine-car-service-2"></i>
                                    </div>
                                    <h3 className="service-card__title"><Link to="/servicedetails">
                                        Auto Detailing
                                    </Link></h3>
                                    <p className="service-card__text">There are not many of passages of lorem ipsum avail isn alteration
                                        donationa in form.</p>
                                    <Link to="/servicedetails" className="service-card__more"><i className="crsine-right-arrow"></i></Link>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <div className="service-card">
                                <div className="service-card__image">
                                    <img src="assets/images/services/service-1-3.jpg" alt="" />
                                    <Link to="/servicedetails"><i className="crsine-plus"></i></Link>
                                </div>
                                <div className="service-card__content">
                                    <div className="service-card__icon">
                                        <i className="crsine-car-wash"></i>
                                    </div>
                                    <h3 className="service-card__title"><Link to="/servicedetails">
                                        Express Interior
                                    </Link></h3>
                                    <p className="service-card__text">There are not many of passages of lorem ipsum avail isn alteration
                                        donationa in form.</p>
                                    <Link to="/servicedetails" className="service-card__more"><i className="crsine-right-arrow"></i></Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-four">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="about-four__image clearfix wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0">
                                <img src="assets/images/resources/about-4-1.jpg" alt="" />
                                {/* <div className="about-four__image-text">
                                    Crsine is Certified Quality
                                    Car Wash Company <br />
                                    <Link to="/about">
                                        Get Started
                                    </Link>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="about-four__content">
                                <div className="section-title">
                                    <span className="section-title__tagline">Here to Help You</span>
                                    <h2 className="section-title__title">We’re Ready to Wash
                                        Your Cars</h2>
                                </div>
                                <div className="about-four__text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed deiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Donec scelerisque dolor id nunc dictum.
                                </div>

                                <ul className="list-unstyled about-four__list">
                                    <li className="about-four__list-item">
                                        <i className="fa fa-check-circle"></i>
                                        We’re professional and certified car washers
                                    </li>
                                    <li className="about-four__list-item">
                                        <i className="fa fa-check-circle"></i>
                                        We use quality material to clean your cars
                                    </li>
                                </ul>
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

            {/* <section className="team-home-two">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="section-title__tagline">Meet Our Team</span>
                        <h2 className="section-title__title">Meet Our Professional <br />
                            Skilled Staff</h2>
                    </div>
                    <div className="row team-card__row">
                        <div className="col-lg-6 col-xl-3">
                            <div className="team-card">
                                <div className="team-card__image">
                                    <img src="assets/images/team/team-1-1.jpg" alt="" />
                                </div>
                                <div className="team-card__content">
                                    <div className="team-card__social">
                                        <Link to="#"><i className="fab fa-twitter"></i></Link>
                                        <Link to="#"><i className="fab fa-facebook-square"></i></Link>
                                        <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                                        <Link to="#"><i className="fab fa-instagram"></i></Link>
                                    </div>
                                    <h3>Jessica Brown</h3>
                                    <p>Worker</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-3">
                            <div className="team-card">
                                <div className="team-card__image">
                                    <img src="assets/images/team/team-1-2.jpg" alt="" />
                                </div>
                                <div className="team-card__content">
                                    <div className="team-card__social">
                                        <Link to="#"><i className="fab fa-twitter"></i></Link>
                                        <Link to="#"><i className="fab fa-facebook-square"></i></Link>
                                        <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                                        <Link to="#"><i className="fab fa-instagram"></i></Link>
                                    </div>
                                    <h3>Jordan Rodriquez</h3>
                                    <p>Worker</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-3">
                            <div className="team-card">
                                <div className="team-card__image">
                                    <img src="assets/images/team/team-1-4.jpg" alt="" />
                                </div>
                                <div className="team-card__content">
                                    <div className="team-card__social">
                                        <Link to="#"><i className="fab fa-twitter"></i></Link>
                                        <Link to="#"><i className="fab fa-facebook-square"></i></Link>
                                        <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                                        <Link to="#"><i className="fab fa-instagram"></i></Link>
                                    </div>
                                    <h3>Leila Manning</h3>
                                    <p>Worker</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-3">
                            <div className="team-card">
                                <div className="team-card__image">
                                    <img src="assets/images/team/team-1-3.jpg" alt="" />
                                </div>
                                <div className="team-card__content">
                                    <div className="team-card__social">
                                        <Link to="#"><i className="fab fa-twitter"></i></Link>
                                        <Link to="#"><i className="fab fa-facebook-square"></i></Link>
                                        <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                                        <Link to="#"><i className="fab fa-instagram"></i></Link>
                                    </div>
                                    <h3>Martin McLaughlin</h3>
                                    <p>Worker</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <section className="call-to-action call-to-action__home-two jarallax" ref={activeRef} data-jarallax >
                <img src="assets/images/backgrounds/cta-bg-1-1.jpg" alt="" className="jarallax-img" />
                <div className="container">
                    <h3 className="call-to-action__title">Premium Quality Online Carwash <br />
                        Booking System</h3>

                    <div className="call-to-action__btn-wrap">
                        <Link to="/onlinebooking" className="thm-btn">
                            Book Appointment
                            <i className="far fa-arrow-alt-circle-right"></i>
                        </Link>
                    </div>
                </div>
            </section> */}


            {/* <section className="testimonials-one testimonials-one__home-two">
                <div className="testimonials-one__boxed">
                    <div className="container">
                        <Swiper
                            className="swiper-container testimonials-one__thumb"
                            loop={false}
                            slidesPerView={3}
                            spaceBetween={0}
                            speed={1400}
                            watchSlidesProgress={true}
                            autoplay={{ delay: 5000 }}
                        >
                            <div className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <img src="assets/images/resources/testi-1-1.jpg" alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <img src="assets/images/resources/testi-1-2.jpg" alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <img src="assets/images/resources/testi-1-3.jpg" alt="" />
                                    </div>
                                </SwiperSlide>
                            </div>
                        </Swiper>
                        <Swiper
                            className="swiper-container testimonials-one__carousel"
                            modules={[Mousewheel]}
                            loop={false}
                            speed={1400}
                            mousewheel={true}
                            slidesPerView={1}
                            autoplay={{ delay: 5000 }}
                        >
                            <div className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <p className="testimonials-one__text">This is due to their excellent service, competitive pricing
                                            and customer support. It’s
                                            throughly
                                            refresing to get such a personal touch. Duis aute lorem ipsum is simply free text irure
                                            dolor in
                                            reprehenderit in esse nulla pariatur.</p>
                                        <div className="testimonials-two__meta">
                                            <h3 className="testimonials-one__name">Christine Rose</h3>
                                            <span className="testimonials-one__designation">Customer</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <p className="testimonials-one__text">This is due to their excellent service, competitive pricing
                                            and customer support. It’s
                                            throughly
                                            refresing to get such a personal touch. Duis aute lorem ipsum is simply free text irure
                                            dolor in
                                            reprehenderit in esse nulla pariatur.</p>
                                        <div className="testimonials-two__meta">
                                            <h3 className="testimonials-one__name">Christine Rose</h3>
                                            <span className="testimonials-one__designation">Customer</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <p className="testimonials-one__text">This is due to their excellent service, competitive pricing
                                            and customer support. It’s
                                            throughly
                                            refresing to get such a personal touch. Duis aute lorem ipsum is simply free text irure
                                            dolor in
                                            reprehenderit in esse nulla pariatur.</p>
                                        <div className="testimonials-two__meta">
                                            <h3 className="testimonials-one__name">Christine Rose</h3>
                                            <span className="testimonials-one__designation">Customer</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </section> */}

            <section className="about-three">
                <div className="container">
                    <div className="row flex-lg-row-reverse">
                        <div className="col-lg-6">
                            <div className="about-three__image wow fadeInRight" data-wow-duration="1500ms">
                                <img src="assets/images/resources/about-3-1.jpg" className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-three__content">
                                <div className="section-title">
                                    <span className="section-title__tagline">Find Who We Are</span>
                                    <h2 className="section-title__title">About Our Professional
                                        Car Washing Service</h2>
                                </div>
                                <div className="about-three__summery">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                                </div>

                                <ul className="about-three__counter list-unstyled">
                                    <li className="about-three__counter-item">
                                        <i className="crsine-brush"></i>
                                        <div className="about-three__counter-content">
                                            <h3 className="about-three__counter-number odometer" data-count="30"><AnimatedNumber value={30} duration={2500} formatValue={(v) => Math.round(v)} /></h3>

                                            <p className="about-three__counter-text">Year Experience</p>

                                        </div>
                                    </li>
                                    <li className="about-three__counter-item">
                                        <i className="crsine-polish"></i>
                                        <div className="about-three__counter-content">
                                            <h3 className="about-three__counter-number odometer" data-count="10"><AnimatedNumber value={10} duration={2500} formatValue={(v) => Math.round(v)} /></h3>

                                            <p className="about-three__counter-text">Quality Polish</p>

                                        </div>
                                    </li>
                                    <li className="about-three__counter-item">
                                        <i className="crsine-car-service-4"></i>
                                        <div className="about-three__counter-content">
                                            <h3 className="about-three__counter-number odometer" data-count="74"><AnimatedNumber value={74} duration={2500} formatValue={(v) => Math.round(v)} /></h3>

                                            <p className="about-three__counter-text">Cars Washed</p>

                                        </div>
                                    </li>
                                    <li className="about-three__counter-item">
                                        <i className="crsine-seat"></i>
                                        <div className="about-three__counter-content">
                                            <h3 className="about-three__counter-number odometer" data-count="16"><AnimatedNumber value={16} duration={2500} formatValue={(v) => Math.round(v)} /></h3>

                                            <p className="about-three__counter-text">Team Members</p>

                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <hr className="section-separator" />
            <div className="client-carousel ">
                <div className="container">
                    <Swiper
                        className="swiper-container thm-swiper__slider"
                        modules={[Autoplay]}
                        spaceBetween={140}
                        slidesPerView={5}
                        autoplay={{ delay: 5000 }}
                        breakpoints={{
                            "0": {
                                "spaceBetween": 30,
                                "slidesPerView": 2
                            },
                            "375": {
                                "spaceBetween": 30,
                                "slidesPerView": 2
                            },
                            "575": {
                                "spaceBetween": 30,
                                "slidesPerView": 3
                            },
                            "767": {
                                "spaceBetween": 50,
                                "slidesPerView": 4
                            },
                            "991": {
                                "spaceBetween": 50,
                                "slidesPerView": 5
                            },
                            "1199": {
                                "spaceBetween": 140,
                                "slidesPerView": 5
                            }
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
            </div> */}

            <section className="blog-home-two">
                <img src="assets/images/backgrounds/service-bg-1.png" alt="" className="image-layer" />
                <div className="container">
                    <div className="section-title text-center">
                        <span className="section-title__tagline">Dear Customer</span>
                        <h2 className="section-title__title">We’re Connected to Help You <br />
                            All the Time</h2>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="blog-card">
                                <div className="blog-card__image">
                                    <img src="assets/images/blog/blog-1-1.png" alt="" />
                                    <Link to="/newsdetails"></Link>
                                </div>
                                <div className="blog-card__content">
                                    <div className="blog-card__date">
                                        20 Jan
                                    </div>
                                    {/* <ul className="list-unstyled blog-card__meta">
                                        <li className="blog-card__meta-item">
                                            <Link to="#">
                                                <i className="far fa-user-circle"></i>
                                                by Admin
                                            </Link>
                                        </li>
                                        <li className="blog-card__meta-item">
                                            <Link to="#">
                                                <i className="far fa-comments"></i>
                                                2 Comments
                                            </Link>
                                        </li>
                                    </ul> */}
                                    <h3 className="blog-card__title">
                                        <Link to="/newsdetails">
                                            Get Some Useful Car Service Tips
                                        </Link>
                                    </h3>
                                    <p className="blog-card__text">
                                        Lorem ipsum is simply free text used by copytyping refreshing.
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
                                    <div className="blog-card__date">
                                        20 Jan
                                    </div>
                                    {/* <ul className="list-unstyled blog-card__meta">
                                        <li className="blog-card__meta-item">
                                            <Link to="#">
                                                <i className="far fa-user-circle"></i>
                                                by Admin
                                            </Link>
                                        </li>
                                        <li className="blog-card__meta-item">
                                            <Link to="#">
                                                <i className="far fa-comments"></i>
                                                2 Comments
                                            </Link>
                                        </li>
                                    </ul> */}
                                    <h3 className="blog-card__title">
                                        <Link to="/newsdetails">
                                            Get Some Useful Car Service Tips
                                        </Link>
                                    </h3>
                                    <p className="blog-card__text">
                                        Lorem ipsum is simply free text used by copytyping refreshing.
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
                                    <div className="blog-card__date">
                                        20 Jan
                                    </div>
                                    {/* <ul className="list-unstyled blog-card__meta">
                                        <li className="blog-card__meta-item">
                                            <Link to="#">
                                                <i className="far fa-user-circle"></i>
                                                by Admin
                                            </Link>
                                        </li>
                                        <li className="blog-card__meta-item">
                                            <Link to="#">
                                                <i className="far fa-comments"></i>
                                                2 Comments
                                            </Link>
                                        </li>
                                    </ul> */}
                                    <h3 className="blog-card__title">
                                        <Link to="/newsdetails">
                                            Get Some Useful Car Service Tips
                                        </Link>
                                    </h3>
                                    <p className="blog-card__text">
                                        Lorem ipsum is simply free text used by copytyping refreshing.
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

            {/* 
            <section className="call-to-action-two jarallax" ref={active1Ref} data-jarallax >
                <img src="assets/images/backgrounds/cta-bg-2-2.jpg" className=" jarallax-img call-two-action-two__image" alt="" />
                <div className="container-fluid">
                    <div className="row no-gutters">
                        <div className="col-xl-6">
                            <div className="call-to-action-two__box jarallax" ref={active2Ref} data-jarallax >
                                <img src="assets/images/backgrounds/cta-bg-2-1.jpg" alt="" className="jarallax-img" />
                                <h3 className="call-to-action-two__title">Get Complete Auto Detailing
                                    in 50% Discount Price</h3>
                                <Link to="/onlinebooking" className="thm-btn">
                                    Order Now
                                    <i className="far fa-arrow-alt-circle-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="call-to-action-two__box">
                                <h3 className=" call-to-action-two__title">Only Use Quality Products
                                    for Car Wash</h3>
                                <Link to="/onlinebooking" className="thm-btn">
                                    Order Now
                                    <i className="far fa-arrow-alt-circle-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <Link to="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></Link> */}


        </>
    )
}

export default Home2