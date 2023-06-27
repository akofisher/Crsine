import React from 'react'
import { Link } from 'react-router-dom'

export default function ServiceCard({ val }) {
  return (
    <div className="col-sm-12 col-md-12 col-lg-4">
      <div className="service-card">
        <div className="service-card__image">
          <img src={val.SERVICE_IMAGE} alt="" />
          <Link
            onClick={() => localStorage.setItem('ServiceId', val.UID)}
            to="/servicedetails"
          >
            <i className="crsine-plus"></i>
          </Link>
        </div>
        <div className="service-card__content">
          <div className="service-card__icon">
            <i className=" crsine-car-service-1"></i>
          </div>
          <h3 className="service-card__title">
            <Link
              onClick={() => localStorage.setItem('ServiceId', val.UID)}
              to="/servicedetails"
            >
              {val.SERVICE_NAME}
            </Link>
          </h3>
          <p className="service-card__text">{val.SERVICE_DESCRIPTION}</p>
          <Link
            onClick={() => localStorage.setItem('ServiceId', val.UID)}
            to="/servicedetails"
            className="service-card__more"
          >
            <i className="crsine-right-arrow"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
