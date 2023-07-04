import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API } from '../../../API'
import BGPh1 from '../../../assets/images/backgrounds/page-header-bg-1-1.jpg'
import api from '../../../useApiCall'

const NewsDetails = () => {
    const [news, setNews] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    let id = localStorage.getItem('NewsId')

    const getNewsDetails = async () => {
        setIsLoading(true)

        try {
            const url = API
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ApiMethod: 'GetNews',
                    controller: 'Services',
                    pars: {
                        NEWS_ID: id,
                    },
                }),
            }
            const responseData = await api.fetchData(url, options)
            if (responseData.status == 'success') {
                setIsLoading(false)
                setNews(responseData.data[0])
            } else {
            }
        } catch (error) {
            setError(error.message)
        }
    }

    useEffect(() => {
        getNewsDetails()
    }, [id])

    return (
        <>
            <div className="page-wrapper">
                <div className="stricky-header stricked-menu main-menu">
                    <div className="sticky-header__content"></div>
                </div>
                <section className="page-header">
                    <div
                        className="page-header__bg"
                        style={{ backgroundImage: `url(${BGPh1})` }}
                    ></div>

                    <div className="container">
                        <h2>News Details</h2>
                        <ul className="thm-breadcrumb list-unstyled">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>/</li>
                            <li>
                                <span>News</span>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="blog-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-12">
                                <div className="blog-card__image blog-details__image">
                                    <div className="blog-card__date">18 Nov</div>
                                    <img src={news.NEWS_IMAGE} className="img-fluid" alt="" />
                                </div>

                                <div className="blog-details__content blog-card__content">
                                    {/* <div className="blog-card__date">
                                        20 Jan
                                    </div>
                                    <ul className="list-unstyled blog-card__meta">
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

                                    <h3 className="blog-card__title">{news.NEWS_NAME}</h3>
                                    <p>{news.NEWS_DESCRIPTION}</p>
                                </div>
                                {/* <div className="blog-details__meta">
                                    <p className="blog-details__tags"><span>Tags:</span><Link to="#">Car washing,</Link><Link to="#">Car
                                        washing</Link></p>
                                    <div className="blog-details__social">
                                        <Link to="#"><i className="fab fa-twitter"></i></Link>
                                        <Link to="#"><i className="fab fa-facebook-square"></i></Link>
                                        <Link to="#"><i className="fab fa-linkedin"></i></Link>
                                        <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                                    </div>
                                </div> */}
                                {/* <div className="blog-author">
                                    <div className="blog-author__image">
                                        <img src="assets/images/blog/blog-author-1-1.jpg" alt="" />
                                    </div>
                                    <div className="blog-author__content">
                                        <h3>Mike Hardson</h3>
                                        <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem
                                            ipsum quia quaed inventore veritatis et quasi.</p>
                                    </div>
                                </div>
                                <div className="blog-comment">
                                    <h2>2 Comments</h2>
                                    <div className="blog-comment__box">
                                        <div className="blog-comment__image">
                                            <img src="assets/images/blog/blog-comment-1-1.jpg" alt="" />
                                        </div>
                                        <div className="blog-comment__content">
                                            <div className="blog-comment__content-top">
                                                <h3>Kevin Martin</h3>
                                                <span><i className="far fa-clock"></i>28 Nov, 2020</span>
                                            </div>
                                            <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui
                                                dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt
                                                explicabo.</p>
                                            <Link to="#" className="thm-btn">
                                                Reply <i className="far fa-arrow-alt-circle-right"></i> </Link>
                                        </div>
                                    </div>
                                    <div className="blog-comment__box">
                                        <div className="blog-comment__image">
                                            <img src="assets/images/blog/blog-comment-1-2.jpg" alt="" />
                                        </div>
                                        <div className="blog-comment__content">
                                            <div className="blog-comment__content-top">
                                                <h3>Sarah Albert</h3>
                                                <span><i className="far fa-clock"></i>28 Nov, 2020</span>
                                            </div>
                                            <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui
                                                dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt
                                                explicabo.</p>
                                            <Link to="#" className="thm-btn">
                                                Reply <i className="far fa-arrow-alt-circle-right"></i> </Link>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="comment-form">
                                    <h2>Leave a Comments</h2>

                                    <form action="assets/inc/sendemail.php" className="contact-one__form contact-form-validated">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <input type="text" name="name" placeholder="Full Name" />
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" name="email" placeholder="Email Address" />
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" name="phone" placeholder="Phone Number" />
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" name="subject" placeholder="Subject" />
                                            </div>
                                            <div className="col-lg-12">
                                                <textarea name="message" placeholder="Write Message"></textarea>
                                            </div>
                                            <div className="col-lg-12">
                                                <button type="submit" className="thm-btn">Submit Comment</button>
                                            </div>
                                        </div>
                                    </form>
                                </div> */}
                            </div>
                            <div className="col-md-12 col-lg-4">
                                {/* <div className="blog-sidebar">
                                    <div className="blog-sidebar__search">
                                        <form action="#">
                                            <input type="text" placeholder="Search" />
                                            <button type="submit"><i className="crsine-magnifying-glass"></i></button>
                                        </form>
                                    </div>
                                    <div className="blog-sidebar__posts">
                                        <h3>Recent Posts</h3>
                                        <ul>
                                            <li>
                                                <img src="assets/images/blog/lp-1-1.jpg" alt="" />
                                                <span><i className="far fa-clock"></i>20 Nov, 2020</span>
                                                <h4><Link to="/newsdetails">Get Some Useful Car
                                                    Service Tips</Link></h4>
                                            </li>
                                            <li>
                                                <img src="assets/images/blog/lp-1-2.jpg" alt="" />
                                                <span><i className="far fa-clock"></i>20 Nov, 2020</span>
                                                <h4><Link to="/newsdetails">Get Some Useful Car
                                                    Service Tips</Link></h4>
                                            </li>
                                            <li>
                                                <img src="assets/images/blog/lp-1-3.jpg" alt="" />
                                                <span><i className="far fa-clock"></i>20 Nov, 2020</span>
                                                <h4><Link to="/newsdetails">Get Some Useful Car
                                                    Service Tips</Link></h4>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="service-details__menu">
                                        <h3 className="service-details__menu-title">Categories</h3>
                                        <ul className="list-unstyled service-details__menu-list">
                                            <li><Link to="/servicedetails">Full Service Wash
                                            </Link></li>

                                            <li><Link to="/servicedetails">
                                                Auto Detailing
                                            </Link></li>
                                            <li><Link to="/servicedetails">
                                                Express Interior
                                            </Link></li>
                                            <li><Link to="/servicedetails">
                                                Interior Polish
                                            </Link></li>
                                            <li><Link to="/servicedetails">
                                                Tire Shine
                                            </Link></li>
                                            <li><Link to="/servicedetails">
                                                Engine Wash
                                            </Link></li>
                                        </ul>
                                    </div>
                                    <div className="blog-sidebar__tags">
                                        <h3>Tags</h3>
                                        <div className="blog-sidebar__tags-links">
                                            <Link to="#">Carwashing,</Link>
                                            <Link to="#">Auto Car Detailing,</Link>
                                            <Link to="#">Express Interior,</Link>
                                            <Link to="#">Interior Polish,</Link>
                                            <Link to="#">Tire Shine,</Link>
                                            <Link to="#">Engine Wash</Link>
                                        </div>
                                    </div>
                                    <div className="blog-sidebar__gallery">
                                        <h3>Gallery</h3>
                                        <div className="blog-sidebar__gallery-links">
                                            <Link to="assets/images/blog/gallery-1-1.jpg" className="img-popup">
                                                <img src="assets/images/blog/gallery-1-1.jpg" alt="" />
                                            </Link>
                                            <Link to="assets/images/blog/gallery-1-2.jpg" className="img-popup">
                                                <img src="assets/images/blog/gallery-1-2.jpg" alt="" />
                                            </Link>
                                            <Link to="assets/images/blog/gallery-1-3.jpg" className="img-popup">
                                                <img src="assets/images/blog/gallery-1-3.jpg" alt="" />
                                            </Link>
                                            <Link to="assets/images/blog/gallery-1-4.jpg" className="img-popup">
                                                <img src="assets/images/blog/gallery-1-4.jpg" alt="" />
                                            </Link>
                                            <Link to="assets/images/blog/gallery-1-5.jpg" className="img-popup">
                                                <img src="assets/images/blog/gallery-1-5.jpg" alt="" />
                                            </Link>
                                            <Link to="assets/images/blog/gallery-1-6.jpg" className="img-popup">
                                                <img src="assets/images/blog/gallery-1-6.jpg" alt="" />
                                            </Link>
                                        </div>
                                    </div>

                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* <Link to="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></Link> */}
        </>
    )
}

export default NewsDetails
