import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { selectAbout } from '../../../Store/CarWash/CarWashSelector'
import BGPh1 from '../../../assets/images/backgrounds/page-header-bg-1-1.jpg'

const ShopDetails = () => {
  const CONTACT = useSelector(selectAbout)
  useEffect(() => {}, [CONTACT])

  const [count, setCount] = useState(1)
  const incrementCount = () => {
    setCount(count + 1)
  }
  const decrementCount = () => {
    if (count >= 1) {
      setCount(count - 1)
    }
  }

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
            <h2>Shop Details</h2>
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>/</li>
              <li>
                <span>Shop Details</span>
              </li>
            </ul>
          </div>
        </section>

        <div className="product-details">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img
                  src="assets/images/products/product-d-1-1.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-6">
                <div className="product-details__content">
                  <div className="product-details__content-top">
                    <h3 className="product-details__title">Engine Oil</h3>
                    <p className="product-details__amount">$18.00</p>
                    <div className="product-details__stars">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>2 Reviews
                    </div>
                  </div>
                  <p className="product-details__summery">
                    Aliquam hendrerit a augue insuscipit. Etiam aliquam massa
                    quis des mauris commodo venenatis ligula commodo leez sed
                    blandit convallis dignissim onec vel pellentesque neque.
                  </p>
                  <ul className="product-details__list list-unstyled">
                    <li>REF. 4231/406</li>
                    <li>Available in store</li>
                  </ul>

                  <div className="product-details__quantity">
                    <div className="quantity-box">
                      <button
                        type="button"
                        className="sub"
                        onClick={decrementCount}
                      >
                        -
                      </button>
                      <input type="number" id="product-2" value={count} />
                      <button
                        type="button"
                        className="add"
                        onClick={incrementCount}
                      >
                        +
                      </button>
                    </div>
                    <div className="addto-cart-box">
                      <Link to="#" className="thm-btn">
                        Add to Cart
                        <i className="far fa-arrow-alt-circle-right"></i>
                      </Link>
                    </div>
                    <div className="wishlist_btn">
                      <Link to="#" className="thm-btn">
                        Add to Wishlist
                        <i className="far fa-arrow-alt-circle-right"></i>
                      </Link>
                    </div>
                  </div>

                  <hr className="section-separator" />
                  <div className="product-details__share">
                    <p>Share with friends</p>
                    <div className="product-details__share-links">
                      {/* <Link to="#"><i className="fab fa-twitter"></i></Link> */}
                      <a target="_blank" href={`${CONTACT.FACEBOOK}`}>
                        <i className="fab fa-facebook-square"></i>
                      </a>
                      {/* <Link to="#"><i className="fab fa-linkedin"></i></Link>
                                            <Link to="#"><i className="fab fa-pinterest-p"></i></Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-details__description">
          <div className="container">
            <p>
              Lorem ipsum dolor sit amet sectetur adipiscin elit cras feuiat
              antesed ces condimentum viverra duis autue nim convallis id diam
              vitae duis egety dictum erosin dictum sem. Vivamus sed molestie
              sapien aliquam et facilisis arcu dut molestie augue suspendisse
              sodales tortor nunced quis cto ligula posuere cursus keuis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecated cupidatat non
              proident sunt in culpa qui officia deserunt mollit anim id est
              laborum ivamus sed molestie sapien.
            </p>
            <p>
              Aliquam et facilisis arcuut olestie augue. Suspendisse sodales
              tortor nunc quis auctor ligula posuere cursus duis aute irure
              dolor in reprehenderit in voluptate velit esse cill doloreeu
              fugiat nulla pariatur excepteur sint occaecat cupidatat non
              proident sunt in culpa qui officia deserunt mollit anim id est
              laborum. Vivaus sed delly molestie sapien. Aliquam et facilisis
              arcuut molestie augue.{' '}
            </p>
          </div>
        </div>

        <section className="review-one">
          <div className="container">
            <div className="blog-comment">
              <h2>2 Product Reviews</h2>
              <div className="blog-comment__box">
                <div className="blog-comment__image">
                  <img src="assets/images/blog/blog-comment-1-1.jpg" alt="" />
                </div>
                <div className="blog-comment__content">
                  <div className="blog-comment__content-top">
                    <h3>Kevin Martin</h3>
                    <span>
                      <i className="far fa-clock"></i>28 Nov, 2020
                    </span>
                  </div>
                  <p>
                    Lorem ipsum is simply free text used by copytyping
                    refreshing. Neque porro est qui dolorem ipsum quia quaed
                    inventore veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo. officia deserunt mollit anim id est laborum.
                    Vivaus sed delly molestie sapien. Aliquam et facilisis
                    arcuut molestie augue.{' '}
                  </p>
                  <div className="review-stars">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="blog-comment__box">
                <div className="blog-comment__image">
                  <img src="assets/images/blog/blog-comment-1-2.jpg" alt="" />
                </div>
                <div className="blog-comment__content">
                  <div className="blog-comment__content-top">
                    <h3>Sarah Albert</h3>
                    <span>
                      <i className="far fa-clock"></i>28 Nov, 2020
                    </span>
                  </div>
                  <p>
                    Lorem ipsum is simply free text used by copytyping
                    refreshing. Neque porro est qui dolorem ipsum quia quaed
                    inventore veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo. officia deserunt mollit anim id est laborum.
                    Vivaus sed delly molestie sapien. Aliquam et facilisis
                    arcuut molestie augue.{' '}
                  </p>

                  <div className="review-stars">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="review-form">
          <div className="container">
            <h3 className="review-form__title">Add a Review</h3>
            <div className="review-form__add-stars">
              <p>Rate this Product?</p>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <form
              action="assets/inc/sendemail.php"
              className="contact-form-validated contact-one__form"
            >
              <div className="row">
                <div className="col-md-12">
                  <textarea
                    name="message"
                    placeholder="Write Comment"
                  ></textarea>
                </div>
                <div className="col-md-6">
                  <input type="text" placeholder="Your Name" name="name" />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                  />
                </div>

                <div className="col-md-12">
                  <button type="submit" className="thm-btn">
                    Submit Review
                    <i className="far fa-arrow-alt-circle-right"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>

        <section className="similar-products">
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">More Products</span>
              <h2 className="section-title__title">
                Checkout Our Similar <br />
                Products
              </h2>
            </div>
            <Swiper
              className="thm-swiper__slider swiper-container"
              modules={[Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{ delay: 5000 }}
              breakpoints={{
                '576': {
                  spaceBetween: 30,
                  slidesPerView: 2,
                },
                '768': {
                  spaceBetween: 30,
                  slidesPerView: 3,
                },
                '992': {
                  spaceBetween: 30,
                  slidesPerView: 4,
                },
              }}
            >
              <div className="swiper-wrapper">
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="product-card">
                      <div className="product-card__image">
                        <img
                          src="assets/images/products/product-1-1.jpg"
                          alt=""
                        />
                        <div className="product-card__image-content">
                          <Link to="#">
                            <i className="crsine-heart"></i>
                          </Link>
                          <Link to="#">
                            <i className="crsine-shopping-cart"></i>
                          </Link>
                        </div>
                      </div>
                      <div className="product-card__content">
                        <div className="product-card__left">
                          <h3>
                            <Link to="shop-details.html">Tire with Wheel</Link>
                          </h3>
                          <p>$120.99</p>
                        </div>
                        <div className="product-card__stars">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="product-card">
                      <div className="product-card__image">
                        <img
                          src="assets/images/products/product-1-2.jpg"
                          alt=""
                        />
                        <div className="product-card__image-content">
                          <Link to="#">
                            <i className="crsine-heart"></i>
                          </Link>
                          <Link to="#">
                            <i className="crsine-shopping-cart"></i>
                          </Link>
                        </div>
                      </div>
                      <div className="product-card__content">
                        <div className="product-card__left">
                          <h3>
                            <Link to="shop-details.html">Engine Oil</Link>
                          </h3>
                          <p>$18.00</p>
                        </div>
                        <div className="product-card__stars">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="product-card">
                      <div className="product-card__image">
                        <img
                          src="assets/images/products/product-1-3.jpg"
                          alt=""
                        />
                        <div className="product-card__image-content">
                          <Link to="#">
                            <i className="crsine-heart"></i>
                          </Link>
                          <Link to="#">
                            <i className="crsine-shopping-cart"></i>
                          </Link>
                        </div>
                      </div>
                      <div className="product-card__content">
                        <div className="product-card__left">
                          <h3>
                            <Link to="shop-details.html">Car Breaks</Link>
                          </h3>
                          <p>$39.00</p>
                        </div>
                        <div className="product-card__stars">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="product-card">
                      <div className="product-card__image">
                        <img
                          src="assets/images/products/product-1-4.jpg"
                          alt=""
                        />
                        <div className="product-card__image-content">
                          <Link to="#">
                            <i className="crsine-heart"></i>
                          </Link>
                          <Link to="#">
                            <i className="crsine-shopping-cart"></i>
                          </Link>
                        </div>
                      </div>
                      <div className="product-card__content">
                        <div className="product-card__left">
                          <h3>
                            <Link to="shop-details.html">Car Engine</Link>
                          </h3>
                          <p>$189.99</p>
                        </div>
                        <div className="product-card__stars">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="product-card">
                      <div className="product-card__image">
                        <img
                          src="assets/images/products/product-1-5.jpg"
                          alt=""
                        />
                        <div className="product-card__image-content">
                          <Link to="#">
                            <i className="crsine-heart"></i>
                          </Link>
                          <Link to="#">
                            <i className="crsine-shopping-cart"></i>
                          </Link>
                        </div>
                      </div>
                      <div className="product-card__content">
                        <div className="product-card__left">
                          <h3>
                            <Link to="shop-details.html">Alloy Wheels</Link>
                          </h3>
                          <p>$59.90</p>
                        </div>
                        <div className="product-card__stars">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="product-card">
                      <div className="product-card__image">
                        <img
                          src="assets/images/products/product-1-6.jpg"
                          alt=""
                        />
                        <div className="product-card__image-content">
                          <Link to="#">
                            <i className="crsine-heart"></i>
                          </Link>
                          <Link to="#">
                            <i className="crsine-shopping-cart"></i>
                          </Link>
                        </div>
                      </div>
                      <div className="product-card__content">
                        <div className="product-card__left">
                          <h3>
                            <Link to="shop-details.html">Oil Filter</Link>
                          </h3>
                          <p>$3.00</p>
                        </div>
                        <div className="product-card__stars">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </section>
      </div>

      {/* <Link to="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></Link> */}
    </>
  )
}

export default ShopDetails
