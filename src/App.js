import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { API } from './API'
import { setAbout } from './Store/CarWash/CarWashActCreat'
import './assets/css/crsine.css'
import './assets/vendors/animate/animate.min.css'
import './assets/vendors/bootstrap/css/bootstrap.min.css'
import './assets/vendors/crsine-icons/style.css'
import './assets/vendors/fontawesome/css/all.min.css'
import './assets/vendors/jarallax/jarallax.css'
import './assets/vendors/nouislider/nouislider.min.css'
import './assets/vendors/nouislider/nouislider.pips.css'
import './assets/vendors/odometer/odometer.min.css'
import './assets/vendors/swiper/swiper.min.css'
import './assets/vendors/tiny-slider/tiny-slider.min.css'
import './assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css'
import Routing from './routes'
import api from './useApiCall'

export default function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const url = API
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ApiMethod: 'GetContactInfo',
            controller: 'Services',
            pars: '',
          }),
        }
        const responseData = await api.fetchData(url, options)
        dispatch(setAbout(responseData.data))
      } catch (error) {
        setError(error.message)
      }
      setIsLoading(false)
    }

    fetchData()
  }, [])

  return (
    <Router>
      <Routing />
    </Router>
  )
}
