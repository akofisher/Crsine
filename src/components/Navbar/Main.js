import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { selectAbout } from '../../Store/CarWash/CarWashSelector'

const Navbar = () => {
  const location = useLocation()
  const path = location.pathname
  const [menu, setmenu] = useState({})
  const [search, setsearch] = useState(false)
  const [cart, setcart] = useState(false)
  const [mobile, setmobile] = useState(false)
  const [homeDrop, sethomeDrop] = useState(false)
  const [headerDrop, setheaderDrop] = useState(false)
  const [servicesDrop, setservicesDrop] = useState(false)
  const [shopDrop, setshopDrop] = useState(false)
  const [newsDrop, setnewsDrop] = useState(false)
  const [pagesDrop, setpagesDrop] = useState(false)
  const CONTACT = useSelector(selectAbout)

  useEffect(() => {}, [CONTACT])

  const activeMenu = () => {
    if (path === '/' || path === '/home2') {
      setmenu({ home: true })
    } else if (path === '/about') {
      setmenu({ about: true })
    } else if (path === '/services' || path === '/servicedetails') {
      setmenu({ service: true })
    } else if (path === '/onlinebooking') {
      setmenu({ booking: true })
    } else if (path === '/newsmain' || path === '/newsdetails') {
      setmenu({ news: true })
    } else if (path === '/contact') {
      setmenu({ contact: true })
    } else {
      setmenu({ home: true })
    }
  }
  const [sticky, setSticky] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', isSticky)
    return () => {
      window.removeEventListener('scroll', isSticky)
    }
  }, [])

  useEffect(() => {
    window.scroll(0, 0)
    activeMenu()
  }, [path])
  const isSticky = () => {
    const scrollTop = window.scrollY
    scrollTop >= 141 ? setSticky(true) : setSticky(false)
  }
  return (
    <>
      <header className="main-header">
        <div className="topbar">
          <div className="container">
            <div className="topbar__inner">
              <ul className="list-unstyled topbar__infos">
                <li className="topbar__infos-item">
                  <Link to="#" className="topbar__infos-link">
                    <i className="far fa-clock"></i> Monday to Saturday 9:00 to
                    6:00
                  </Link>
                </li>
                <li className="topbar__infos-item">
                  <Link to="tel:92-666-888-0000" className="topbar__infos-link">
                    <i className="fa fa-phone-alt"></i> 92 666 888 000
                  </Link>
                </li>
              </ul>
              <div className="topbar__social">
                {/* <Link to="#" className="fab fa-twitter"></Link> */}
                <a
                  target="_blank"
                  href={`${CONTACT.FACEBOOK}`}
                  className="fab fa-facebook-square"
                ></a>
                {/* <Link to="#" className="fab fa-pinterest-p"></Link> */}
                <a
                  target="_blank"
                  href={`${CONTACT.INSTAGRAM}`}
                  className="fab fa-instagram"
                ></a>
              </div>
            </div>
          </div>
        </div>
        <nav
          className={`main-menu ${
            sticky && 'stricky-header stricked-menu stricky-fixed'
          }`}
        >
          <div className="container">
            <div className="main-menu__inner">
              <div className="main-menu__logo">
                <Link to="/">
                  <img
                    src="assets/images/logo-light.png"
                    width="137"
                    alt="Crsine - Car services react template"
                  />
                </Link>
              </div>
              <ul className="main-menu__list">
                <li className={`dropdown ${menu.home && 'current'}`}>
                  <Link to="/">Home</Link>
                  {/* <ul>
                                        <li>
                                            <Link to="/">Home One</Link>
                                        </li>
                                        <li><Link to="/home2">Home Two</Link></li>
                                        <li className={`dropdown ${menu.Home && "current"}`}>
                                            <Link to="#">Header Styles</Link>
                                            <ul>
                                                <li><Link to="/">Header One</Link></li>
                                                <li><Link to="/home2">Header Two</Link></li>
                                            </ul>
                                        </li>
                                    </ul> */}
                </li>
                <li className={`dropdown ${menu.about && 'current'}`}>
                  <Link to="/about">About</Link>
                </li>
                <li className={`dropdown ${menu.service && 'current'}`}>
                  <Link to="/services">Services</Link>
                  {/* <ul>
                                        <li><Link to="/services">All Services</Link></li>
                                        <li><Link to="/servicedetails">Service Details</Link></li>
                                    </ul> */}
                </li>
                <li className={`dropdown ${menu.news && 'current'}`}>
                  <Link to="/newsmain">News</Link>
                  {/* <ul>
                                        <li><Link to="/newsmain">News</Link></li>
                                        <li><Link to="/newsdetails">News Details</Link></li>
                                    </ul> */}
                </li>
                <li className={`dropdown ${menu.booking && 'current'}`}>
                  <Link to="/onlinebooking">Online Booking</Link>
                  {/* <ul>
                                        <li><Link to="/newsmain">News</Link></li>
                                        <li><Link to="/newsdetails">News Details</Link></li>
                                    </ul> */}
                </li>
                <li className={`dropdown ${menu.contact && 'current'}`}>
                  <Link to="/contact">Contact</Link>
                  {/* <ul>
                                        <li><Link to="/newsmain">News</Link></li>
                                        <li><Link to="/newsdetails">News Details</Link></li>
                                    </ul> */}
                </li>
                {/* <li className={`dropdown ${menu.pages && 'current'}`}>
                  <Link to="#">Pages</Link>
                  <ul>
                    <li>
                      <Link to="/onlinebooking">Online Booking</Link>
                    </li>
                    <li>
                      <Link to="/pricing">Pricing</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li><Link to="/faqs">Faqs</Link></li>
                                        <li><Link to="/gallery">Gallery</Link></li> 
                     <li><Link to="/help">Help</Link></li> 
                     <li><Link to="/error">Error Page</Link></li>
                  </ul>
                </li> */}
                {/* <li className={`dropdown ${menu.shop && "current"}`}>
                                    <Link to="/shops">Shop</Link>
                                    <ul>
                                        <li><Link to="/shops">Shop</Link></li>
                                        <li><Link to="/shopdetails">Shop Details</Link></li>
                                    </ul>
                                </li> */}
              </ul>
              <div className="main-menu__right">
                <Link
                  to="#"
                  onClick={() => setmobile(true)}
                  className="mobile-nav__toggler"
                >
                  <i className="fa fa-bars"></i>
                </Link>
                <Link to="onlinebooking" className="thm-btn">
                  Online Booking
                  <i className="far fa-arrow-alt-circle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className={`search-popup ${search && 'active'}`}>
        <div
          className="search-popup__overlay search-toggler"
          onClick={() => setsearch(false)}
        ></div>
        <div className="search-popup__content">
          <form action="#">
            <label htmlFor="search" className="sr-only">
              search here
            </label>
            <input type="text" id="search" placeholder="Search Here..." />
            <button
              type="submit"
              aria-label="search submit"
              className="thm-btn"
            >
              <i className="crsine-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </div>

      <div className={`mini-cart ${cart ? 'expanded' : ''}`}>
        <div
          className="mini-cart__overlay mini-cart__toggler"
          onClick={() => setcart(false)}
        ></div>
        <div className="mini-cart__content">
          <div className="mini-cart__top">
            <h3 className="mini-cart__title">Shopping Cart</h3>
            <span className="mini-cart__close mini-cart__toggler">
              <i className="organik-icon-close"></i>
            </span>
          </div>
          <div className="mini-cart__item">
            <img src="assets/images/products/product-s-1.jpg" alt="" />
            <div className="mini-cart__item-content">
              <div className="mini-cart__item-top">
                <h3>
                  <Link to="/shopdetails">Tire with Wheel </Link>
                </h3>
                <p>$3.99</p>
              </div>
              <div className="quantity-box">
                <button type="button" className="sub">
                  -
                </button>
                <input type="number" id="1" defaultValue="1" />
                <button type="button" className="add">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="mini-cart__item">
            <img src="assets/images/products/product-s-2.jpg" alt="" />
            <div className="mini-cart__item-content">
              <div className="mini-cart__item-top">
                <h3>
                  <Link to="/shopdetails">Car Breaks </Link>
                </h3>
                <p>$120.99</p>
              </div>
              <div className="quantity-box">
                <button type="button" className="sub">
                  -
                </button>
                <input type="number" id="2" defaultValue="1" />
                <button type="button" className="add">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="mini-cart__item">
            <img src="assets/images/products/product-s-3.jpg" alt="" />
            <div className="mini-cart__item-content">
              <div className="mini-cart__item-top">
                <h3>
                  <Link to="/shopdetails">Oil Filters </Link>
                </h3>
                <p>$9.99</p>
              </div>
              <div className="quantity-box">
                <button type="button" className="sub">
                  -
                </button>
                <input type="number" id="3" defaultValue="1" />
                <button type="button" className="add">
                  +
                </button>
              </div>
            </div>
          </div>
          <Link to="#" className="thm-btn mini-cart__checkout">
            Proceed To Checkout{' '}
            <i className="far fa-arrow-alt-circle-right"></i>
          </Link>
        </div>
      </div>

      <div className={`mobile-nav__wrapper ${mobile ? 'expanded' : ''}`}>
        <div
          className="mobile-nav__overlay mobile-nav__toggler"
          onClick={() => setmobile(false)}
        ></div>
        <div className="mobile-nav__content">
          <span
            className="mobile-nav__close mobile-nav__toggler"
            onClick={() => setmobile(false)}
          >
            <i className="fa fa-times"></i>
          </span>

          <div className="logo-box">
            <Link to="/" aria-label="logo image">
              <img src="assets/images/logo-light.png" width="155" alt="" />
            </Link>
          </div>
          <div className="mobile-nav__container">
            <ul className="main-menu__list">
              <li>
                <Link to="/" onClick={() => setmobile(false)}>
                  Home
                </Link>
              </li>
              {/* <li className="dropdown current">
                                <Link to="/" className={homeDrop ? "expanded" : ""}>Home<button aria-label="dropdown toggler" className={homeDrop ? "expanded" : ""} onClick={() => sethomeDrop(homeDrop ? false : true)} ><i className="fa fa-angle-down"></i></button></Link>
                                {homeDrop &&
                                    <ul style={{ display: "block" }}>
                                        <li className="current">
                                            <Link to="/" onClick={() => setmobile(false)}>Home One</Link>
                                        </li>
                                        <li><Link to="/home2" onClick={() => setmobile(false)}>Home Two</Link></li>
                                        <li className="dropdown">
                                            <Link to="#" className={headerDrop ? "expanded" : ""}>Header Styles
                                                <button aria-label="dropdown toggler" className={headerDrop ? "expanded" : ""} onClick={() => setheaderDrop(headerDrop ? false : true)}>
                                                    <i className="fa fa-angle-down"></i>
                                                </button>
                                            </Link>
                                            {headerDrop &&
                                                <ul style={{ display: "block" }}>
                                                    <li className="current"><Link to="/" onClick={() => setmobile(false)}>Header One</Link></li>
                                                    <li><Link to="/home2" onClick={() => setmobile(false)}>Header Two</Link></li>
                                                </ul>}
                                        </li>
                                    </ul>}
                            </li> */}
              <li>
                <Link to="/newsmain" onClick={() => setmobile(false)}>
                  News
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setmobile(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={() => setmobile(false)}>
                  Services
                </Link>
              </li>
              {/* 
                            <li className="dropdown">
                                <Link to="/" className={servicesDrop ? "expanded" : ""}>Services
                                    <button aria-label="dropdown toggler" className={servicesDrop ? "expanded" : ""} onClick={() => setservicesDrop(servicesDrop ? false : true)}>
                                        <i className="fa fa-angle-down"></i>
                                    </button>
                                </Link>
                                {servicesDrop &&
                                    <ul style={{ display: "block" }}>
                                        <li><Link to="/services" onClick={() => setmobile(false)}>All Services</Link></li>
                                        <li><Link to="/servicedetails" onClick={() => setmobile(false)}>Service Details</Link></li>
                                    </ul>}
                            </li> */}
              <li>
                <Link to="/onlinebooking" onClick={() => setmobile(false)}>
                  Online Booking
                </Link>
              </li>
              {/* <li>
                <Link to="/pricing" onClick={() => setmobile(false)}>
                  Pricing
                </Link>
              </li> */}
              <li>
                <Link to="/contact" onClick={() => setmobile(false)}>
                  Contact
                </Link>
              </li>
              {/* <li>
                                <Link to="/help" onClick={() => setmobile(false)}>Help</Link>
                            </li> */}
              {/* <li className="dropdown">
                                <Link to="#" className={pagesDrop ? "expanded" : ""}>Pages
                                    <button aria-label="dropdown toggler" className={pagesDrop ? "expanded" : ""} onClick={() => setpagesDrop(pagesDrop ? false : true)}>
                                        <i className="fa fa-angle-down"></i>
                                    </button>
                                </Link>
                                {pagesDrop &&
                                    <ul style={{ display: "block" }}>
                                        <li><Link to="/onlinebooking" onClick={() => setmobile(false)}>Online Booking</Link></li>
                                        <li><Link to="/pricing" onClick={() => setmobile(false)}>Pricing</Link></li>
                                        <li><Link to="/contact" onClick={() => setmobile(false)}>Contact</Link></li>
                                        <li><Link to="/faqs" onClick={() => setmobile(false)}>Faqs</Link></li>
                                        <li><Link to="/gallery" onClick={() => setmobile(false)}>Gallery</Link></li>
                                        <li><Link to="/help" onClick={() => setmobile(false)}>Help</Link></li>
                                        <li><Link to="/error" onClick={() => setmobile(false)}>Error Page</Link></li>
                                    </ul>}
                            </li> */}
              {/* <li className="dropdown">
                                <Link to="#" className={shopDrop ? "expanded" : ""}>Shop
                                    <button aria-label="dropdown toggler" className={shopDrop ? "expanded" : ""} onClick={() => setshopDrop(shopDrop ? false : true)}>
                                        <i className="fa fa-angle-down"></i>
                                    </button>
                                </Link>
                                {shopDrop &&
                                    <ul style={{ display: "block" }}>
                                        <li><Link to="/shops" onClick={() => setmobile(false)}>Shop</Link></li>
                                        <li><Link to="/shopdetails" onClick={() => setmobile(false)}>Shop Details</Link></li>
                                    </ul>}
                            </li> */}
              {/* <li className="dropdown">
                                <Link to="#" className={newsDrop ? "expanded" : ""}>News
                                    <button aria-label="dropdown toggler" className={newsDrop ? "expanded" : ""} onClick={() => setnewsDrop(newsDrop ? false : true)}>
                                        <i className="fa fa-angle-down"></i>
                                    </button>
                                </Link>
                                {newsDrop &&
                                    <ul style={{ display: "block" }}>
                                        <li><Link to="/newsmain" onClick={() => setmobile(false)}>News</Link></li>
                                        <li><Link to="/newsdetails" onClick={() => setmobile(false)}>News Details</Link></li>
                                    </ul>}
                            </li> */}
            </ul>
          </div>

          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <Link to={`mailto:${CONTACT.EMAIL}`}>{CONTACT.EMAIL}m</Link>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <Link to={`tel:${CONTACT.PHONE}`}>{CONTACT.PHONE}</Link>
            </li>
          </ul>
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              {/* <Link to="#" className="fab fa-twitter"></Link> */}
              <a
                target="_blank"
                href={`${CONTACT.FACEBOOK}`}
                className="fab fa-facebook-square"
              ></a>
              {/* <Link to="#" className="fab fa-pinterest-p"></Link> */}
              <a
                target="_blank"
                href={`${CONTACT.INSTAGRAM}`}
                className="fab fa-instagram"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Navbar
