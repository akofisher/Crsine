import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { API } from '../../../API'
import { setServices } from '../../../Store/CarWash/CarWashActCreat'
import { selectServices } from '../../../Store/CarWash/CarWashSelector'
import BGPh1 from '../../../assets/images/backgrounds/page-header-bg-1-1.jpg'
import api from '../../../useApiCall'
import ServiceCard from '../../Home2/ServiceCard'

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
              {services.length > 0
                ? services.map((val, idx) => (
                    <ServiceCard val={val} key={idx} />
                  ))
                : null}
            </div>

            {/* <div className="service-one__load text-center">
              <Link to="#" className="thm-btn">
                Load More
                <i className="fa fa-arrow-alt-circle-right"></i>
              </Link>
            </div> */}
          </div>
        </section>
      </div>
      {/* <Link to="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></Link> */}
    </>
  )
}

export default Services
