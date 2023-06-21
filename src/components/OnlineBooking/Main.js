import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { API } from '../../API'
import {
  setCarTypes,
  setPackets,
  setSubPackets,
  setTimes,
} from '../../Store/CarWash/CarWashActCreat'
import {
  selectCarTypes,
  selectChoosenPacket,
  selectChoosenSubPacket,
  selectPackets,
  selectSubPackets,
  selectTimes,
} from '../../Store/CarWash/CarWashSelector'
import BGPh1 from '../../assets/images/backgrounds/page-header-bg-1-1.jpg'
import api from '../../useApiCall'
import ExtraServiceCard from './ExtraServiceCard'
import PackageCard from './PackageCard'


const OnlineBooking = () => {
  const [tabMenu, tabActive] = useState({ hatchback: true, UID: 1 })
  const dispatch = useDispatch()
  const freeTimes = useSelector(selectTimes)
  const carTypes = useSelector(selectCarTypes)
  const packets = useSelector(selectPackets)
  const subPackets = useSelector(selectSubPackets)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [time, setTime] = useState('')
  const [address, setAddress] = useState('')
  const [mesage, setMesage] = useState('')
  const ChoosenPacket = useSelector(selectChoosenPacket)
  const ChoosenSubPacket = useSelector(selectChoosenSubPacket)
  let sum = 0
  let totalTime = 0

  const SumPrice = () => {
    if (ChoosenSubPacket !== null && ChoosenSubPacket !== undefined) {
      sum = ChoosenSubPacket.reduce(
        (total, num) => Number(total) + Number(num.PRICE),
        0,
      )
      console.log(sum + Number(ChoosenPacket.PRICE), 'SUM')
    }
  }
  useEffect(() => {
    SumPrice()
  }, [sum, ChoosenSubPacket])

  useEffect(() => {
    SumTime()
  }, [totalTime, ChoosenSubPacket, ChoosenPacket])

  const SumTime = () => {
    if (
      ChoosenPacket !== undefined &&
      ChoosenPacket !== null &&
      ChoosenPacket !== NaN &&
      ChoosenSubPacket !== null &&
      ChoosenSubPacket !== undefined
    ) {
      totalTime = ChoosenSubPacket.reduce(
        (total, num) => Number(total) + Number(num.TIME),
        0,
      )
      console.log(totalTime + Number(ChoosenPacket.TIME), 'TIME')
    }
  }

  const PlaceOrder = async () => {
    try {
      const url = API
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ApiMethod: 'PlaceOrder',
          controller: 'Orders',
          pars: {
            USER_NAME: user,
            USER_EMAIL: email,
            USER_PHONE: phone,
            CAR_BRAND: brand,
            CAR_MODEL: model,
            BOOKED_TIME: time,
            USER_ADDRESS: address,
            USER_MESSAGE: mesage,
            CAR_TYPE: tabMenu.UID,
            CHOOSEN_PACKET: ChoosenPacket.UID,
            CHOOSEN_SUB_PACKET: ChoosenSubPacket,
            ORDER_TOTAL_TIME: totalTime + Number(ChoosenPacket.TIME),
            ORDER_TOTAL: sum + Number(ChoosenPacket.PRICE),
          },
        }),
      }
      const responseData = await api.fetchData(url, options)
      if (responseData.status == 'success') {

      } else {

      }
    } catch (error) {
      setError(error.message)
    }
    // console.log(user, 'user')
    // console.log(email, 'email')
    // console.log(phone, 'phone')
    // console.log(brand, 'brand')
    // console.log(model, 'model')
    // console.log(time, 'time')
    // console.log(address, 'address')
    // console.log(mesage, 'mesage')
    // console.log(tabMenu.UID, 'car type')
    // console.log(ChoosenPacket, 'packet')
    // console.log(ChoosenSubPacket, 'sub Packet')
  }

  const fetchTime = async () => {
    setIsLoading(true)
    try {
      const url = API
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ApiMethod: 'GetTimeList',
          controller: 'Services',
          pars: '',
        }),
      }
      const responseData = await api.fetchData(url, options)
      if (responseData.status == 'success') {
        setIsLoading(false)
        dispatch(setTimes(responseData.data))

      } else {
        setIsLoading(true)
      }
    } catch (error) {
      setError(error.message)
    }
  }

  const fetchCarTypes = async () => {
    setIsLoading(true)
    try {
      const url = API
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ApiMethod: 'GetCarTypes',
          controller: 'Services',
          pars: '',
        }),
      }
      const responseData = await api.fetchData(url, options)
      if (responseData.status == 'success') {

        dispatch(setCarTypes(responseData.data))
        setIsLoading(false)
      } else {
        setIsLoading(true)
      }
    } catch (error) {
      setError(error.message)
    }
  }

  const fetchPackets = async (id) => {
    try {
      const url = API
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ApiMethod: 'GetPackets',
          controller: 'Services',
          pars: { TYPE_ID: Number(id) },
        }),
      }
      const responseData = await api.fetchData(url, options)
      if (responseData.status == 'success') {
        dispatch(setPackets(responseData.data))
      } else {
        dispatch(setPackets([]))
      }

    } catch (error) {
      setError(error.message)
    }
  }




  const fetchSubPackets = async (id) => {

    try {
      const url = API
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ApiMethod: 'GetSubPackets',
          controller: 'Services',
          pars: { TYPE_ID: Number(id) },
        }),
      }
      const responseData = await api.fetchData(url, options)
      if (responseData.status == 'success') {
        dispatch(setSubPackets(responseData.data))
      } else {
        dispatch(setSubPackets([]))
      }
    } catch (error) {
      setError(error.message)
    }
  }
  useEffect(() => {
    fetchPackets(tabMenu.UID)
    fetchSubPackets(tabMenu.UID)

    return () => { }

  }, [tabMenu.UID])



  useEffect(() => {
    const FetchDatas = async () => {
      await fetchTime()
      await fetchCarTypes()
    }
    FetchDatas()
    return () => { }
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
            <h2>Online Booking</h2>
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>/</li>
              <li>
                <span>Online Booking</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="online-booking">
          <div className="container">
            <div className="online-booking__top">
              <div className="online-booking__count"></div>
              <div className="section-title">
                <span className="section-title__tagline">Choose Car</span>
                <h2 className="section-title__title">Select Vehicle Type</h2>
              </div>
            </div>

            <ul className="pricing-one__tab-title list-unstyled">
              <li
                className={`pricing-one__tab-title-item ${tabMenu.hatchback && 'active-item'
                  }`}
                onClick={() => tabActive({ hatchback: true, UID: 1 })}
              >
                <div className="hatchback"></div>
                <p>Hatchback</p>
              </li>
              <li
                className={`pricing-one__tab-title-item ${tabMenu.sedan && 'active-item'
                  }`}
                onClick={() => tabActive({ sedan: true, UID: 2 })}
              >
                <div className="sedan"></div>
                <p>Sedan</p>
              </li>
              <li
                className={`pricing-one__tab-title-item ${tabMenu.minivan && 'active-item'
                  }`}
                onClick={() => tabActive({ minivan: true, UID: 3 })}
              >
                <div className="minivan"></div>
                <p>Minivan</p>
              </li>
              <li
                className={`pricing-one__tab-title-item ${tabMenu.microbus && 'active-item'
                  }`}
                onClick={() => tabActive({ microbus: true, UID: 4 })}
              >
                <div className="microbus"></div>
                <p>Microbus</p>
              </li>
              <li
                className={`pricing-one__tab-title-item ${tabMenu.jeep && 'active-item'
                  }`}
                onClick={() => tabActive({ jeep: true, UID: 5 })}
              >
                <div className="jeep"></div>
                <p>Jeep</p>
              </li>
              <li
                className={`pricing-one__tab-title-item ${tabMenu.suv && 'active-item'
                  }`}
                onClick={() => tabActive({ suv: true, UID: 6 })}
              >
                <div className="suv"></div>
                <p>Suv</p>
              </li>

              {/* <li className="pricing-one__tab-title-item">
                                <i className="crsine-car-suv"></i>
                                <p>SUV Car</p>
                            </li> */}
            </ul>
          </div>

          <div className="container">
            <div className="online-booking__top">
              <div className="online-booking__count"></div>
              <div className="section-title">
                <span className="section-title__tagline">Choose Plan</span>
                <h2 className="section-title__title">Select Pricing Plan</h2>
              </div>
            </div>
            <div className="row online-booking__price-row">
              {/* <div
                className={`tab-box__content `}
              > */}
              <div className="row">
                {packets.length > 0 ? packets.map((val, idx) => (
                  <PackageCard data={val} key={val.UID} />
                )) : <p className='NoService'>No Services for this time</p>}
              </div>
              {/* </div> */}


            </div>
          </div>

          <div className="container">
            <div className="online-booking__top">
              <div className="online-booking__count"></div>
              <div className="section-title">
                <span className="section-title__tagline">Select Them Now</span>
                <h2 className="section-title__title">Choose Extra Features</h2>
              </div>
            </div>

            <div className="online-booking__extra">
              {subPackets.length > 0 ? subPackets.map((val, idx) => (
                <ExtraServiceCard data={val} key={val.UID} />
              )) : <p className='NoService'>No Services for this time</p>}
            </div>
          </div>

          <div className="container">
            <div className="online-booking__top">
              <div className="online-booking__count"></div>
              <div className="section-title">
                <span className="section-title__tagline">
                  Enter Your Details
                </span>
                <h2 className="section-title__title">Booking Details</h2>
              </div>
            </div>
            <form
              // action="assets/inc/sendemail.php"
              onSubmit={(e) => {
                e.preventDefault()
                PlaceOrder()
              }}
              className="contact-form-validated contact-one__form"
            >
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <input
                    onChange={(e) => setUser(e.target.value)}
                    type="text"
                    placeholder="Your Name"
                    name="name"
                  />
                </div>
                <div className="col-md-6 col-lg-4">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email Address"
                    name="email"
                  />
                </div>
                <div className="col-md-6 col-lg-4">
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    type="text"
                    placeholder="Phone Number"
                    name="phone"
                  />
                </div>
                <div className="col-md-6 col-lg-4">
                  <input
                    onChange={(e) => setBrand(e.target.value)}
                    type="text"
                    placeholder="Vehicle Brand"
                    name="Vehicle Brand"
                  />
                  {/* <select>
                                        <option value="">Vehicle Make</option>
                                        <option value="">Vehicle Make</option>
                                        <option value="">Vehicle Make</option>
                                        <option value="">Vehicle Make</option>
                                    </select> */}
                </div>
                <div className="col-md-6 col-lg-4">
                  <input
                    onChange={(e) => setModel(e.target.value)}
                    type="text"
                    placeholder="Vehicle Model"
                    name="Vehicle Model"
                  />
                  {/* <select>
                                        <option value="">Vehicle Model</option>
                                        <option value="">Vehicle Model</option>
                                        <option value="">Vehicle Model</option>
                                        <option value="">Vehicle Model</option>
                                    </select> */}
                </div>
                <div className="col-md-6 col-lg-4">
                  <select onChange={(e) => setTime(e.target.value)}>
                    {freeTimes.map((val) => (
                      <option key={val.UID} value={val.UID}>
                        {val.FREE_TIME}
                      </option>
                    ))}
                  </select>
                  {/* <input type="text" placeholder="Date" name="date" /> */}
                </div>
                <div className="col-md-12">
                  <input
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    placeholder="Address"
                    name="address"
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    onChange={(e) => setMesage(e.target.value)}
                    name="message"
                    placeholder="Write Comment"
                  ></textarea>
                </div>
                <div className="col-md-12">
                  <button type="submit" className="thm-btn">
                    Confirm Booking
                    <i className="far fa-arrow-alt-circle-right"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>

      {/* <Link to="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></Link> */}
    </>
  )
}

export default OnlineBooking