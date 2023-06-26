import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../components/About/Main'
import Contact from '../components/Contact/Main'
import Error from '../components/Error/Main'
import Footer from '../components/Footer/Main'
import Navbar from '../components/Navbar/Main'
// import Home from '../components/Home/Main'
import Home2 from '../components/Home2/Main'
import NewsDetails from '../components/News/NewsDetails/Main'
import NewsMain from '../components/News/NewsMain/Main'
import OnlineBooking from '../components/OnlineBooking/Main'
import ServiceDetails from '../components/Service/ServiceDetails/Main'
import Services from '../components/Service/Services/Main'

const Routing = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home2 />} />
        {/* <Route path="/home2" element={<Home />} /> */}
        <Route path="/error" element={<Error />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/faqs" element={<Faqs />} /> */}
        {/* <Route path="/gallery" element={<Gallery />} /> */}
        {/* <Route path="/help" element={<Help />} /> */}
        <Route path="/newsmain" element={<NewsMain />} />
        <Route path="/newsdetails" element={<NewsDetails />} />
        <Route path="/onlinebooking" element={<OnlineBooking />} />
        {/* <Route path="/pricing" element={<Pricing />} /> */}
        <Route path="/services" element={<Services />} />
        <Route path="/servicedetails" element={<ServiceDetails />} />
        {/* <Route path="/shops" element={<Shops />} />
                <Route path="/shopdetails" element={<ShopDetails />} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default Routing
