import React from 'react'
import { Link } from 'react-router-dom'
import BGPh1 from '../../../assets/images/backgrounds/page-header-bg-1-1.jpg'

const NewsMain = () => {
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
            <h2>News</h2>
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

        <section className="news-page">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="blog-card">
                  <div className="blog-card__image">
                    <img src="assets/images/blog/blog-1-1.png" alt="" />
                    <Link to="/newsdetails"></Link>
                  </div>
                  <div className="blog-card__content">
                    <div className="blog-card__date">20 Jan</div>
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
                    <img src="assets/images/blog/blog-1-4.png" alt="" />
                    <Link to="/newsdetails"></Link>
                  </div>
                  <div className="blog-card__content">
                    <div className="blog-card__date">20 Jan</div>
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
                    <img src="assets/images/blog/blog-1-5.png" alt="" />
                    <Link to="/newsdetails"></Link>
                  </div>
                  <div className="blog-card__content">
                    <div className="blog-card__date">20 Jan</div>
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
                    <img src="assets/images/blog/blog-1-6.png" alt="" />
                    <Link to="/newsdetails"></Link>
                  </div>
                  <div className="blog-card__content">
                    <div className="blog-card__date">20 Jan</div>
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
            {/* 
                        <ul className="list-unstyled post-pagination d-flex justify-content-center align-items-center">
                            <li><Link to="#"><i className="fa fa-angle-left"></i></Link></li>
                            <li><Link to="#">01</Link></li>
                            <li><Link to="#">02</Link></li>
                            <li><Link to="#">03</Link></li>
                            <li><Link to="#"><i className="fa fa-angle-right"></i></Link></li>
                        </ul> */}
          </div>
        </section>
      </div>

      {/* <Link to="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></Link> */}
    </>
  )
}

export default NewsMain
