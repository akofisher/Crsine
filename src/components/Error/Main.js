import BGPh1 from '../../assets/images/backgrounds/page-header-bg-1-1.jpg'
import BGErr from '../../assets/images/shapes/404-bg.png'
import { Link } from 'react-router-dom'
import React from "react";

const Error = () => {
    return (
        <>



            <div className="stricky-header stricked-menu main-menu">
                <div className="sticky-header__content"></div>
            </div>
            <section className="page-header">
                <div className="page-header__bg" style={{ backgroundImage: `url(${BGPh1})` }}></div>

                <div className="container">
                    <h2>Error Page</h2>
                    <ul className="thm-breadcrumb list-unstyled">
                        <li><Link to="index.html">Home</Link></li>
                        <li>/</li>
                        <li><span>Error Page</span></li>
                    </ul>
                </div>
            </section>

            <section className="error-section">
                <div className="image-layer" style={{ backgroundImage: `url(${BGErr})` }}></div>
                <div className="container">

                    <h1 className="error-section__title">404</h1>
                    <h3 className="error-section__subtitle">Sorry We Can't Find That Page!</h3>
                    <p className="error-section__text">The page you are looking for was moved, removed, renamed or never existed.</p>
                    <form action="#" className="search-form">
                        <input type="text" placeholder="Search" name="s" />
                        <button type="submit">
                            <i className="crsine-magnifying-glass"></i>
                        </button>
                    </form>
                    <Link to="index.html" className="thm-btn">
                        Back to Home
                        <i className="far fa-arrow-alt-circle-right"></i>
                    </Link>
                </div>
            </section>

            {/* <Link to="#" data-target="html" classNameName="scroll-to-target scroll-to-top"><i classNameName="fa fa-angle-up"></i></Link> */}
        </>
    )
}

export default Error