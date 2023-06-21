import BGPh1 from '../../assets/images/backgrounds/page-header-bg-1-1.jpg'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'

const Pricing = () => {
    const [tabMenu, tabActive] = useState({ hatchback: true })

    return (
        <>
            <div className="page-wrapper">

                <div className="stricky-header stricked-menu main-menu">
                    <div className="sticky-header__content"></div>
                </div>
                <section className="page-header">
                    <div className="page-header__bg" style={{ backgroundImage: `url(${BGPh1})` }}></div>

                    <div className="container">
                        <h2>Pricing</h2>
                        <ul className="thm-breadcrumb list-unstyled">
                            <li><Link to="/">Home</Link></li>
                            <li>/</li>
                            <li><span>Pricing</span></li>
                        </ul>
                    </div>
                </section>

                <div className="pricing-one">
                    <div className="container">
                        <div className="tab-box" id="price-tab">
                            {/* <ul className="pricing-one__tab-title tab-box__title list-unstyled">
                                <li className={`pricing-one__tab-title-item ${tabMenu.sedan && "active-item"}`} onClick={() => tabActive({ sedan: true })}>
                                    <i className="crsine-sedan-car-model"></i>
                                    <p>Sedan Car</p>
                                </li>
                                <li className={`pricing-one__tab-title-item ${tabMenu.minivancan && "active-item"}`} onClick={() => tabActive({ minivancan: true })}>
                                    <i className="crsine-minivan-car"></i>
                                    <p>Minivan Can</p>
                                </li>
                                <li className={`pricing-one__tab-title-item ${tabMenu.microbus && "active-item"}`} onClick={() => tabActive({ microbus: true })}>
                                    <i className="crsine-microbus"></i>
                                    <p>Microbus</p>
                                </li>
                                <li className={`pricing-one__tab-title-item ${tabMenu.SUVCar && "active-item"}`} onClick={() => tabActive({ SUVCar: true })}>
                                    <i className="crsine-car-suv"></i>
                                    <p>SUV Car</p>
                                </li>
                            </ul> */}
                            <ul className="pricing-one__tab-title list-unstyled">
                                <li className={`pricing-one__tab-title-item ${tabMenu.hatchback && "active-item"}`} onClick={() => tabActive({ hatchback: true })}>
                                    <div className="hatchback"></div>
                                    <p>Hatchback</p>
                                </li>
                                <li className={`pricing-one__tab-title-item ${tabMenu.sedan && "active-item"}`} onClick={() => tabActive({ sedan: true })}>
                                    <div className="sedan"></div>
                                    <p>Sedan</p>
                                </li>
                                <li className={`pricing-one__tab-title-item ${tabMenu.minivan && "active-item"}`} onClick={() => tabActive({ minivan: true })}>
                                    <div className='minivan' ></div>
                                    <p>Minivan</p>
                                </li>
                                <li className={`pricing-one__tab-title-item ${tabMenu.microbus && "active-item"}`} onClick={() => tabActive({ microbus: true })}>
                                    <div className="microbus" ></div>
                                    <p>Microbus</p>
                                </li>
                                <li className={`pricing-one__tab-title-item ${tabMenu.jeep && "active-item"}`} onClick={() => tabActive({ jeep: true })}>
                                    <div className="jeep" ></div>
                                    <p>Jeep</p>
                                </li>
                                <li className={`pricing-one__tab-title-item ${tabMenu.suv && "active-item"}`} onClick={() => tabActive({ suv: true })}>
                                    <div className="suv" ></div>
                                    <p>Suv</p>
                                </li>

                                {/* <li className="pricing-one__tab-title-item">
                                <i className="crsine-car-suv"></i>
                                <p>SUV Car</p>
                            </li> */}
                            </ul>

                            <div className={`tab-box__content  ${tabMenu.hatchback && "active-item"}`}>
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
                                                        <i className="fa fa-check"></i>
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
                                                        <i className="fa fa-check"></i>
                                                        Interior Vacuum
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-check"></i>
                                                        Exterior Polish
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-check"></i>
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

                            <div className={`tab-box__content  ${tabMenu.sedan && "active-item"}`}>
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
                                                        <i className="fa fa-check"></i>
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
                                                        <i className="fa fa-check"></i>
                                                        Interior Vacuum
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-check"></i>
                                                        Exterior Polish
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-check"></i>
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

                            <div className={`tab-box__content  ${tabMenu.minivan && "active-item"}`}>
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
                                                        <i className="fa fa-check"></i>
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
                                                        <i className="fa fa-check"></i>
                                                        Interior Vacuum
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-check"></i>
                                                        Exterior Polish
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-check"></i>
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

                            <div className={`tab-box__content  ${tabMenu.microbus && "active-item"}`}>
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
                                                        <i className="fa fa-check"></i>
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
                                                        <i className="fa fa-check"></i>
                                                        Interior Vacuum
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-check"></i>
                                                        Exterior Polish
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-check"></i>
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
                            <div className={`tab-box__content  ${tabMenu.jeep && "active-item"}`}>
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
                                                        <i className="fa fa-check"></i>
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
                                                        <i className="fa fa-check"></i>
                                                        Interior Vacuum
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-check"></i>
                                                        Exterior Polish
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-check"></i>
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
                            <div className={`tab-box__content  ${tabMenu.suv && "active-item"}`}>
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
                                                        <i className="fa fa-check"></i>
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
                                                        <i className="fa fa-check"></i>
                                                        Interior Vacuum
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-check"></i>
                                                        Exterior Polish
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-check"></i>
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
                </div>
                <section className="call-to-action">
                    <div className="container">
                        <h3 className="call-to-action__title">Easy Online Carwash Booking System</h3>

                        <div className="call-to-action__btn-wrap">
                            <Link to="/onlinebooking" className="thm-btn">
                                Book Appointment
                                <i className="far fa-arrow-alt-circle-right"></i>
                            </Link>
                        </div>
                    </div>
                </section>


            </div>

            {/* <Link to="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></Link> */}

        </>
    )
}

export default Pricing
