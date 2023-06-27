import React from 'react'
import { Link } from 'react-router-dom'

export default function NewsCard({ val }) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="blog-card">
        <div className="blog-card__image">
          <img src={val.NEWS_IMAGE} alt="" />
          <Link to="/newsdetails"></Link>
        </div>
        <div className="blog-card__content">
          {/* <div className="blog-card__date">20 Jan</div> */}
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
            <Link to="/newsdetails">{val.NEWS_NAME}</Link>
          </h3>
          <p className="blog-card__text">{val.NEWS_DESCRIPTION}</p>
          <Link to="/newsdetails" className="blog-card__more">
            Read More
            <i className="far fa-arrow-alt-circle-right"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
