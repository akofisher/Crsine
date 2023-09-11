import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectAbout } from '../../Store/CarWash/CarWashSelector'
import BGPh1 from '../../assets/images/backgrounds/page-header-bg-1-1.jpg'

const About = () => {
    const CONTACT = useSelector(selectAbout)
    useEffect(() => { }, [CONTACT])

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
                    <h2>About</h2>
                    <ul className="thm-breadcrumb list-unstyled">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>/</li>
                        <li>
                            <span>About</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="about-one">
                <div className="container">
                    {/* <div className="row">
            <div className="col-lg-6">
              <img
                src="assets/images/resources/about-1-1.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6">
              <img
                src="assets/images/resources/about-1-2.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div> */}
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="section-title">
                                <span className="section-title__tagline">Dear Customer</span>
                                <h2 className="section-title__title">
                                    We’re the Leading Carwash Center For You
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="about-one__content">
                                <p className="about-one__highlighted">
                                    We have 30+ years of experiences for give you better quality
                                    results.
                                </p>
                                <p className="about-one__text">{CONTACT.ABOUT_TEXT}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="section-separator" />
            {/* <div className="client-carousel ">
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
            </div>

            <section className="team-about">
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
                                        <Link to="#"><i className="fab fa-twitter"></i></Link >
                                        <Link to="#"><i className="fab fa-facebook-square"></i></Link >
                                        <Link to="#"><i className="fab fa-pinterest-p"></i></Link >
                                        <Link to="#"><i className="fab fa-instagram"></i></Link >
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
                                        <Link to="#"><i className="fab fa-twitter"></i></Link >
                                        <Link to="#"><i className="fab fa-facebook-square"></i></Link >
                                        <Link to="#"><i className="fab fa-pinterest-p"></i></Link >
                                        <Link to="#"><i className="fab fa-instagram"></i></Link >
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
                                        <Link to="#"><i className="fab fa-twitter"></i></Link >
                                        <Link to="#"><i className="fab fa-facebook-square"></i></Link >
                                        <Link to="#"><i className="fab fa-pinterest-p"></i></Link >
                                        <Link to="#"><i className="fab fa-instagram"></i></Link >
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
                                        <Link to="#"><i className="fab fa-twitter"></i></Link >
                                        <Link to="#"><i className="fab fa-facebook-square"></i></Link >
                                        <Link to="#"><i className="fab fa-pinterest-p"></i></Link >
                                        <Link to="#"><i className="fab fa-instagram"></i></Link >
                                    </div>
                                    <h3>Martin McLaughlin</h3>
                                    <p>Worker</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonials-one">
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
            </section>

            <div className="gallery-two">
                <Swiper
                    className="swiper-container thm-swiper__slider"
                    modules={[Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 5000 }}
                    breakpoints={{
                        "376": {
                            "spaceBetween": 30,
                            "slidesPerView": 2
                        },
                        "576": {
                            "spaceBetween": 30,
                            "slidesPerView": 3
                        },
                        "768": {
                            "spaceBetween": 30,
                            "slidesPerView": 3
                        },
                        "992": {
                            "spaceBetween": 30,
                            "slidesPerView": 4
                        },
                        "1200": {
                            "spaceBetween": 30,
                            "slidesPerView": 5
                        }
                    }}
                >
                    <div className="swiper-wrapper">
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="gallery-one__item">
                                    <img src="assets/images/gallery/gallery-2-1.jpg" alt="" />
                                    <a className="img-popup" href="assets/images/gallery/gallery-2-1.jpg"><i className="crsine-plus"></i></a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="gallery-one__item">
                                    <img src="assets/images/gallery/gallery-2-2.jpg" alt="" />
                                    <a className="img-popup" href="assets/images/gallery/gallery-2-2.jpg"><i className="crsine-plus"></i></a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="gallery-one__item">
                                    <img src="assets/images/gallery/gallery-2-3.jpg" alt="" />
                                    <a className="img-popup" href="assets/images/gallery/gallery-2-3.jpg"><i className="crsine-plus"></i></a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="gallery-one__item">
                                    <img src="assets/images/gallery/gallery-2-4.jpg" alt="" />
                                    <a className="img-popup" href="assets/images/gallery/gallery-2-4.jpg"><i className="crsine-plus"></i></a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="gallery-one__item">
                                    <img src="assets/images/gallery/gallery-2-5.jpg" alt="" />
                                    <a className="img-popup" href="assets/images/gallery/gallery-2-5.jpg"><i className="crsine-plus"></i></a>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div> */}

            <section className="call-to-action">
                <div className="container">
                    <h3 className="call-to-action__title">
                        Easy Online Carwash Booking System
                    </h3>

                    <div className="call-to-action__btn-wrap">
                        <Link to="/OnlineBooking" className="thm-btn">
                            Online Booking
                            <i className="far fa-arrow-alt-circle-right"></i>
                        </Link>
                    </div>
                </div>
            </section>
            {/* <Link to="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></Link > */}
        </>
    )
}
export default About
