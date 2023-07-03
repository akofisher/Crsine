import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { API } from '../../API'
import { selectAbout } from '../../Store/CarWash/CarWashSelector'
import BGPh1 from '../../assets/images/backgrounds/page-header-bg-1-1.jpg'
import api from '../../useApiCall'
import './Order.css'

const Order = () => {
  const CONTACT = useSelector(selectAbout)
  const [order, setOrder] = useState({})
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
          ApiMethod: 'GetOrderByToken',
          controller: 'Orders',
          pars: {
            TOKEN: 'f5fff8b250bf3acef6fdb6016acd1d17',
          },
        }),
      }
      const responseData = await api.fetchData(url, options)
      console.log(responseData, 'before if else')
      if (responseData.status == 'success') {
        setOrder(responseData.data)
        console.log(responseData, 'RESPONSE yes order')
      } else {
        console.log(responseData, 'RESPONSE no order')
      }
    } catch (error) {
      setError(error.message)
      console.log(error.message)
    }
  }

  useEffect(() => {
    getServiceDetails()
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
            <div className="row">
              {order.length > 0 ? (
                order.map((val, idx) => (
                  <div className='orderTable' key={idx}>
                    <div className='orderDetailsRow'>
                      <p className='orderDetailName'>Order Status:</p>
                      <p className='orderDetails'>Started</p>
                    </div>
                    <div className='orderDetailsRow'>
                      <p className='orderDetailName'>Car Model:</p>
                      <p className='orderDetails'>{val.CAR_MODEL}</p>
                    </div>
                    <div className='orderDetailsRow'>
                      <p className='orderDetailName'>Car Producer:</p>
                      <p className='orderDetails'>{val.CAR_PRODUCER}</p>
                    </div>
                    <div className='orderDetailsRow'>
                      <p className='orderDetailName'>Your Address:</p>
                      <p className='orderDetails'>{val.CUSTOMER_ADDRESS}</p>
                    </div>
                    <div className='orderDetailsRow'>
                      <p className='orderDetailName'>Your Email:</p>
                      <p className='orderDetails'>{val.CUSTOMER_EMAIL}</p>
                    </div>
                    <div className='orderDetailsRow'>
                      <p className='orderDetailName'>Your Name:</p>
                      <p className='orderDetails'>{val.CUSTOMER_NAME}</p>
                    </div>
                    <div className='orderDetailsRow'>
                      <p className='orderDetailName'>Your Phone:</p>
                      <p className='orderDetails'>{val.CUSTOMER_PHONE}</p>
                    </div>
                    <div className='orderDetailsRow'>
                      <p className='orderDetailName'>Your Comment:</p>
                      <p className='orderDetails'>{val.ORDER_COMMENT}</p>
                    </div>
                    <div className='orderDetailsRow'>
                      <p className='orderDetailName'>Date of Booking:</p>
                      <p className='orderDetails'>{val.ORDER_TIME}</p>
                    </div>
                    <div className='orderDetailsRow'>
                      <p className='orderDetailName'>Packet:</p>
                      <p className='orderDetails'>{val.PACKET_NAME}</p>
                    </div>
                    <div className='orderDetailsRow'>
                      <p className='orderDetailName'>Extra Packet:</p>
                      <p className='orderDetails'>{val.PACKET_NAME}</p>
                    </div>
                    <div className='orderDetailsRow'>
                      <p className='orderDetailName'>Car Type:</p>
                      <p className='orderDetails'>{val.TYPE_NAME}</p>
                    </div>
                    <div className='orderDetailsRow'>
                      <p className='orderDetailName'>Total Price:</p>
                      <p className='orderDetails'>{val.ORDER_TOTAL}$</p>
                    </div>
                  </div>
                ))

              ) : (
                <p className='orderDetailName'>Order Not Found</p>
              )}

            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Order
