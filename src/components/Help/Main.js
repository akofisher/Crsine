import BGPh1 from '../../assets/images/backgrounds/page-header-bg-1-1.jpg'
import { Link } from 'react-router-dom'
import React from 'react'

const Help = () => {
    return (
        <>


            <div className="stricky-header stricked-menu main-menu">
                <div className="sticky-header__content"></div>
            </div>
            <section className="page-header">
                <div className="page-header__bg" style={{ backgroundImage: `url(${BGPh1})` }}></div>

                <div className="container">
                    <h2>Help</h2>
                    <ul className="thm-breadcrumb list-unstyled">
                        <li><Link to="/">Home</Link></li>
                        <li>/</li>
                        <li><span>Help</span></li>
                    </ul>
                </div>
            </section>

            <section className="help-search">
                <div className="container">
                    <h3 className="help-search__title">Need Some Help?</h3>
                    <form action="#" className="search-form">
                        <input type="text" placeholder="Find Out Anything..." name="s" />
                        <button type="submit">
                            <i className="crsine-magnifying-glass"></i>
                        </button>
                    </form>
                </div>
            </section>

            <section className="help-one">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="help-one__card">
                                <i className=" crsine-brake-disc help-one__card-icon"></i>
                                <h3 className="help-one__card-title"><Link to="#">Ticket Dispach</Link></h3>
                                <p className="help-one__card-text">There are not many of passages of lorem ipsum avail isn alteration
                                    donationa in form.</p>
                                <Link to="#" className="help-one__card-more"><i className="crsine-right-arrow"></i></Link>

                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="help-one__card">
                                <i className=" crsine-polish help-one__card-icon"></i>
                                <h3 className="help-one__card-title"><Link to="#">Vacum Service</Link></h3>
                                <p className="help-one__card-text">There are not many of passages of lorem ipsum avail isn alteration
                                    donationa in form.</p>
                                <Link to="#" className="help-one__card-more"><i className="crsine-right-arrow"></i></Link>

                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="help-one__card">
                                <i className=" crsine-car-wash-1 help-one__card-icon"></i>
                                <h3 className="help-one__card-title"><Link to="#">Washing</Link></h3>
                                <p className="help-one__card-text">There are not many of passages of lorem ipsum avail isn alteration
                                    donationa in form.</p>
                                <Link to="#" className="help-one__card-more"><i className="crsine-right-arrow"></i></Link>

                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="help-one__card">
                                <i className=" crsine-car-wash-2 help-one__card-icon"></i>
                                <h3 className="help-one__card-title"><Link to="#">Automatic</Link></h3>
                                <p className="help-one__card-text">There are not many of passages of lorem ipsum avail isn alteration
                                    donationa in form.</p>
                                <Link to="#" className="help-one__card-more"><i className="crsine-right-arrow"></i></Link>

                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="help-one__card">
                                <i className=" crsine-tire-1 help-one__card-icon"></i>
                                <h3 className="help-one__card-title"><Link to="#">Cleaning</Link></h3>
                                <p className="help-one__card-text">There are not many of passages of lorem ipsum avail isn alteration
                                    donationa in form.</p>
                                <Link to="#" className="help-one__card-more"><i className="crsine-right-arrow"></i></Link>

                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="help-one__card">
                                <i className=" crsine-brush help-one__card-icon"></i>
                                <h3 className="help-one__card-title"><Link to="#">Ticket Dispach</Link></h3>
                                <p className="help-one__card-text">There are not many of passages of lorem ipsum avail isn alteration
                                    donationa in form.</p>
                                <Link to="#" className="help-one__card-more"><i className="crsine-right-arrow"></i></Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <Link to="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></Link> */}

        </>
    )
}

export default Help