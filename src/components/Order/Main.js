import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { API } from '../../API'
import { selectAbout } from '../../Store/CarWash/CarWashSelector'
import BGPh1 from '../../assets/images/backgrounds/page-header-bg-1-1.jpg'
import api from '../../useApiCall'

const Order = () => {
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
            <h2>Order Details</h2>
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>/</li>
              <li>
                <span>Order</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="service-details">
          <div className="container">
            <div className="row"></div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Order
