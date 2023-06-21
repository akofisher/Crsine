import BGPh1 from '../../assets/images/backgrounds/page-header-bg-1-1.jpg'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Gallery = () => {
    const [tabMenu, tabActive] = useState({ all: true })
    return (
        <>


            <div className="stricky-header stricked-menu main-menu">
                <div className="sticky-header__content"></div>
            </div>
            <section className="page-header">
                <div className="page-header__bg" style={{ backgroundImage: `url(${BGPh1})` }}></div>

                <div className="container">
                    <h2>Gallery</h2>
                    <ul className="thm-breadcrumb list-unstyled">
                        <li><Link to="/">Home</Link></li>
                        <li>/</li>
                        <li><span>Gallery</span></li>
                    </ul>
                </div>
            </section>
            <div className="gallery-one">
                <div className="container">
                    <ul className="post-filter list-unstyled">
                        <li className={`post-filter__item ${tabMenu.all && "active"}`} onClick={() => tabActive({ all: true })} data-filter=".filter-item"><span>All</span></li>
                        <li className={`post-filter__item ${tabMenu.car && "active"}`} onClick={() => tabActive({ car: true })} data-filter=".car"><span>Car Wash</span></li>
                        <li className={`post-filter__item ${tabMenu.polish && "active"}`} onClick={() => tabActive({ polish: true })} data-filter=".polish"><span>Polish</span></li>
                        <li className={`post-filter__item ${tabMenu.cleaner && "active"}`} onClick={() => tabActive({ cleaner: true })} data-filter=".cleaner"><span>Cleaner</span></li>
                        <li className={`post-filter__item ${tabMenu.tire && "active"}`} onClick={() => tabActive({ tire: true })} data-filter=".tire"><span>Tire Shine</span></li>
                    </ul>
                    <div className="row filter-layout">
                        <div className={`col-sm-12 col-md-6 col-lg-4 filter-item car  ${tabMenu.all && "active"}`}>
                            <div className="gallery-one__item">
                                <img src="assets/images/gallery/gallery-1-1.jpg" alt="" />
                                <a className="img-popup" href="assets/images/gallery/gallery-1-1.jpg"><i className="crsine-plus"></i></a>
                            </div>
                        </div>
                        <div className={`col-sm-12 col-md-6 col-lg-4 filter-item car  ${tabMenu.car && "active"}`}>
                            <div className="gallery-one__item">
                                <img src="assets/images/gallery/gallery-1-2.jpg" alt="" />
                                <a className="img-popup" href="assets/images/gallery/gallery-1-2.jpg"><i className="crsine-plus"></i></a>
                            </div>
                        </div>
                        <div className={`col-sm-12 col-md-6 col-lg-4 filter-item polish ${tabMenu.polish && "active"}`}>
                            <div className="gallery-one__item">
                                <img src="assets/images/gallery/gallery-1-3.jpg" alt="" />
                                <a className="img-popup" href="assets/images/gallery/gallery-1-3.jpg"><i className="crsine-plus"></i></a>
                            </div>
                        </div>
                        <div className={`col-sm-12 col-md-6 col-lg-4 filter-item polish ${tabMenu.polish && "active"}`}>
                            <div className="gallery-one__item">
                                <img src="assets/images/gallery/gallery-1-4.jpg" alt="" />
                                <a className="img-popup" href="assets/images/gallery/gallery-1-4.jpg"><i className="crsine-plus"></i></a>
                            </div>
                        </div>
                        <div className={`col-sm-12 col-md-6 col-lg-4 filter-item cleaner  ${tabMenu.cleaner && "active"}`}>
                            <div className="gallery-one__item">
                                <img src="assets/images/gallery/gallery-1-5.jpg" alt="" />
                                <a className="img-popup" href="assets/images/gallery/gallery-1-5.jpg"><i className="crsine-plus"></i></a>
                            </div>
                        </div>
                        <div className={`col-sm-12 col-md-6 col-lg-4 filter-item cleaner polish  ${tabMenu.all && "active"}`}>
                            <div className="gallery-one__item">
                                <img src="assets/images/gallery/gallery-1-6.jpg" alt="" />
                                <a className="img-popup" href="assets/images/gallery/gallery-1-6.jpg"><i className="crsine-plus"></i></a>
                            </div>
                        </div>
                        <div className={`col-sm-12 col-md-6 col-lg-4 filter-item tire ${tabMenu.tire && "active"}`}>
                            <div className="gallery-one__item">
                                <img src="assets/images/gallery/gallery-1-7.jpg" alt="" />
                                <a className="img-popup" href="assets/images/gallery/gallery-1-7.jpg"><i className="crsine-plus"></i></a>
                            </div>
                        </div>
                        <div className={`col-sm-12 col-md-6 col-lg-4 filter-item tire car  ${tabMenu.all && "active"}`}>
                            <div className="gallery-one__item">
                                <img src="assets/images/gallery/gallery-1-8.jpg" alt="" />
                                <a className="img-popup" href="assets/images/gallery/gallery-1-8.jpg"><i className="crsine-plus"></i></a>
                            </div>
                        </div>
                        <div className={`col-sm-12 col-md-6 col-lg-4 filter-item cleanup  ${tabMenu.cleanup && "active"}`}>
                            <div className="gallery-one__item">
                                <img src="assets/images/gallery/gallery-1-9.jpg" alt="" />
                                <a className="img-popup" href="assets/images/gallery/gallery-1-9.jpg"><i className="crsine-plus"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Link to="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></Link> */}
        </>
    )
}

export default Gallery