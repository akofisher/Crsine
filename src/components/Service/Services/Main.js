import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { API } from '../../../API'
import { setServices } from '../../../Store/CarWash/CarWashActCreat'
import { selectServices } from '../../../Store/CarWash/CarWashSelector'
import BGPh1 from '../../../assets/images/backgrounds/page-header-bg-1-1.jpg'
import api from '../../../useApiCall'

const Services = () => {
  const services = useSelector(selectServices)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const dispatch = useDispatch()

  const fetchServiceList = async () => {
    try {
      const url = API
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ApiMethod: 'GetServiceList',
          controller: 'Services',
        }),
      }
      const responseData = await api.fetchData(url, options)
      dispatch(setServices(responseData.data))
      console.log(responseData.data, 'Services')
    } catch (error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    const fetchingData = async () => {
      setIsLoading(true)
      await fetchServiceList()
      setIsLoading(false)
    }
    fetchingData()
  }, [])

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
            <h2>All Services</h2>
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>/</li>
              <li>
                <span>Services</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="service-one">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="service-card">
                  <div className="service-card__image">
                    <img src="assets/images/services/service-1-1.jpg" alt="" />
                    <Link to="/servicedetails">
                      <i className="crsine-plus"></i>
                    </Link>
                  </div>
                  <div className="service-card__content">
                    <div className="service-card__icon">
                      <i className=" crsine-car-service-1"></i>
                    </div>
                    <h3 className="service-card__title">
                      <Link to="/servicedetails">Full Service Wash</Link>
                    </h3>
                    <p className="service-card__text">
                      There are not many of passages of lorem ipsum avail isn
                      alteration donationa in form.
                    </p>
                    <Link to="/servicedetails" className="service-card__more">
                      <i className="crsine-right-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="service-card">
                  <div className="service-card__image">
                    <img src="assets/images/services/service-1-2.jpg" alt="" />
                    <Link to="/servicedetails">
                      <i className="crsine-plus"></i>
                    </Link>
                  </div>
                  <div className="service-card__content">
                    <div className="service-card__icon">
                      <i className="crsine-car-service-2"></i>
                    </div>
                    <h3 className="service-card__title">
                      <Link to="/servicedetails">Auto Detailing</Link>
                    </h3>
                    <p className="service-card__text">
                      There are not many of passages of lorem ipsum avail isn
                      alteration donationa in form.
                    </p>
                    <Link to="/servicedetails" className="service-card__more">
                      <i className="crsine-right-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="service-card">
                  <div className="service-card__image">
                    <img src="assets/images/services/service-1-3.jpg" alt="" />
                    <Link to="/servicedetails">
                      <i className="crsine-plus"></i>
                    </Link>
                  </div>
                  <div className="service-card__content">
                    <div className="service-card__icon">
                      <i className="crsine-car-wash"></i>
                    </div>
                    <h3 className="service-card__title">
                      <Link to="/servicedetails">Express Interior</Link>
                    </h3>
                    <p className="service-card__text">
                      There are not many of passages of lorem ipsum avail isn
                      alteration donationa in form.
                    </p>
                    <Link to="/servicedetails" className="service-card__more">
                      <i className="crsine-right-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="service-card">
                  <div className="service-card__image">
                    <img src="assets/images/services/service-1-4.jpg" alt="" />
                    <Link to="/servicedetails">
                      <i className="crsine-plus"></i>
                    </Link>
                  </div>
                  <div className="service-card__content">
                    <div className="service-card__icon">
                      <i className="crsine-car-service-5"></i>
                    </div>
                    <h3 className="service-card__title">
                      <Link to="/servicedetails">Interior Polish</Link>
                    </h3>
                    <p className="service-card__text">
                      There are not many of passages of lorem ipsum avail isn
                      alteration donationa in form.
                    </p>
                    <Link to="/servicedetails" className="service-card__more">
                      <i className="crsine-right-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="service-card">
                  <div className="service-card__image">
                    <img src="assets/images/services/service-1-5.jpg" alt="" />
                    <Link to="/servicedetails">
                      <i className="crsine-plus"></i>
                    </Link>
                  </div>
                  <div className="service-card__content">
                    <div className="service-card__icon">
                      <i className="crsine-tire"></i>
                    </div>
                    <h3 className="service-card__title">
                      <Link to="/servicedetails">Tire Shine</Link>
                    </h3>
                    <p className="service-card__text">
                      There are not many of passages of lorem ipsum avail isn
                      alteration donationa in form.
                    </p>
                    <Link to="/servicedetails" className="service-card__more">
                      <i className="crsine-right-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="service-card">
                  <div className="service-card__image">
                    <img src="assets/images/services/service-1-6.jpg" alt="" />
                    <Link to="/servicedetails">
                      <i className="crsine-plus"></i>
                    </Link>
                  </div>
                  <div className="service-card__content">
                    <div className="service-card__icon">
                      <i className="crsine-vacuum-cleaner"></i>
                    </div>
                    <h3 className="service-card__title">
                      <Link to="/servicedetails">Engine Wash</Link>
                    </h3>
                    <p className="service-card__text">
                      There are not many of passages of lorem ipsum avail isn
                      alteration donationa in form.
                    </p>
                    <Link to="/servicedetails" className="service-card__more">
                      <i className="crsine-right-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-one__load text-center">
              <Link to="#" className="thm-btn">
                Load More
                <i className="fa fa-arrow-alt-circle-right"></i>
              </Link>
            </div>
          </div>
        </section>
      </div>
      {/* <Link to="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></Link> */}
    </>
  )
}

export default Services
