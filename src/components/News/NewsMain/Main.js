import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { API } from '../../../API'
import { setNews } from '../../../Store/CarWash/CarWashActCreat'
import { selectNews } from '../../../Store/CarWash/CarWashSelector'
import BGPh1 from '../../../assets/images/backgrounds/page-header-bg-1-1.jpg'
import api from '../../../useApiCall'
import NewsCard from '../../Home2/NewsCard'

const NewsMain = () => {
  const NEWS = useSelector(selectNews)
  const dispatch = useDispatch()
  const [error, setError] = useState('')

  const fetchNewsList = async () => {
    try {
      const url = API
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ApiMethod: 'GetNewsList',
          controller: 'Services',
          pars: '',
        }),
      }
      const responseData = await api.fetchData(url, options)
      if (responseData.status == 'success') {
        dispatch(setNews(responseData.data))
      } else {
        alert('დაფიქსირდა შეცდომა')
      }
    } catch (error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchNewsList()
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
            <h2>All News</h2>
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

        <section className="service-one">
          <div className="container">
            <div className="row">
              {NEWS.length > 0
                ? NEWS.map((val, idx) => <NewsCard val={val} key={idx} />)
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
    </>
  )
}

export default NewsMain
