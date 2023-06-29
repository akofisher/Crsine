import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { API } from '../../../API'
import { selectAbout } from '../../../Store/CarWash/CarWashSelector'
import BGPh1 from '../../../assets/images/backgrounds/page-header-bg-1-1.jpg'
import api from '../../../useApiCall'

const ServiceDetails = () => {
  const CONTACT = useSelector(selectAbout)
  const [service, setService] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  let id = localStorage.getItem('ServiceId')

  const getServiceDetails = async () => {
    setIsLoading(true)

    try {
      const url = API
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ApiMethod: 'GetService',
          controller: 'Services',
          pars: {
            SERVICE_ID: id,
          },
        }),
      }
      const responseData = await api.fetchData(url, options)
      // dispatch(setPackets(responseData.data))
      console.log(responseData, 'news data')
      if (responseData.status == 'success') {
        setIsLoading(false)
        setService(responseData.data[0])
        console.log(responseData, 'RESPONSE ABOUT')
      } else {
      }
    } catch (error) {
      setError(error.message)
      console.log(error.message)
    }
  }

  useEffect(() => {
    getServiceDetails()
  }, [id])
  useEffect(() => {}, [CONTACT])

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
            <h2>Services Details</h2>
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

        <section className="service-details">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                {/* <div className="service-details__menu">
                  <h3 className="service-details__menu-title">Services</h3>
                  <ul className="list-unstyled service-details__menu-list">
                    <li>
                      <Link to="/servicedetails">Full Service Wash</Link>
                    </li>

                    <li>
                      <Link to="/servicedetails">Auto Detailing</Link>
                    </li>
                    <li>
                      <Link to="/servicedetails">Express Interior</Link>
                    </li>
                    <li>
                      <Link to="/servicedetails">Interior Polish</Link>
                    </li>
                    <li>
                      <Link to="/servicedetails">Tire Shine</Link>
                    </li>
                    <li>
                      <Link to="/servicedetails">Engine Wash</Link>
                    </li>
                  </ul>
                </div> */}
                <div
                  className="faq-one__call"
                  style={{ backgroundColor: 'transaprent' }}
                >
                  <h3 className="faq-one__call-title">Get Our Help</h3>
                  <p className="faq-one__call-text">
                    call corporate office and we will connect you with a team
                    member.
                  </p>
                  <Link
                    to={`tel:${CONTACT.PHONE}`}
                    className="faq-one__call-number"
                  >
                    {CONTACT.PHONE}
                  </Link>
                  <Link to="/onlinebooking" className="thm-btn">
                    Online Booking
                    <i className="far fa-arrow-alt-circle-right"></i>
                  </Link>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="service-details__image">
                  <img src={service.SERVICE_IMAGE} alt="" />
                </div>
                <div className="service-details__icon">
                  <i className="crsine-car"></i>
                </div>
                <h3 className="service-details__title">
                  {service.SERVICE_NAME}
                </h3>
                <p className="service-details__text">
                  {service.SERVICE_DESCRIPTION}
                </p>

                {/* <blockquote className="service-details__blockqoute">
                                    <p>Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown
                                        printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </blockquote> */}
                {/* 
                                <p className="service-details__text">
                                    It has survived not only five centuries. Lorem Ipsum is simply dummy text of the new design printng
                                    and type setting Ipsum take a look at our round. When an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                                    leap into electronic typesetting.
                                </p> */}
                <br />
                <br />
                {/* <div className="row">
                                    <div className="col-md-6">
                                        <h3 className="service-details__subtitle">Service Benefits</h3>
                                        <p className="service-details__highlighted">Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum.
                                        </p>
                                        <ul className="list-unstyled service-details__list">
                                            <li>
                                                <i className="fa fa-check-circle"></i>
                                                Refresing to get such a touch.
                                            </li>
                                            <li>
                                                <i className="fa fa-check-circle"></i>
                                                Duis aute irure dolor in in voluptate.
                                            </li>
                                            <li>
                                                <i className="fa fa-check-circle"></i>
                                                Velit esse cillum eu fugiat pariatur.
                                            </li>
                                            <li>
                                                <i className="fa fa-check-circle"></i>
                                                Duis aute irure dolor in in voluptate.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <img className="img-fluid" src="assets/images/services/service-d-2.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="thm-accordion" id="thm-accordion-one">
                                    {faqs.map((item, index) => (
                                        <div className={`thm-accordion__item ${index === clicked && "active-item"}`} key={index} data-wow-delay="0ms">
                                            <div className="thm-accordion__title" onClick={() => setClicked(index)}>{item.question}

                                                <div className="thm-accordion__icon"></div>
                                            </div>
                                            {index === clicked && <div className="thm-accordion__content">
                                                <p>{item.answer}</p>
                                            </div>}
                                        </div>
                                    ))}
                                </div> */}
              </div>
            </div>
          </div>
        </section>

        <section className="call-to-action">
          <div className="container">
            <h3 className="call-to-action__title">
              Easy Online Carwash Booking System
            </h3>

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

export default ServiceDetails
