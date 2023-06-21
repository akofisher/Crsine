import BGPh1 from '../../../assets/images/backgrounds/page-header-bg-1-1.jpg'
import { Link } from 'react-router-dom'
import React from 'react'
import RangeSlider from '../../../assets/js/RangeSlider'
import { useState } from 'react'

const Shops = () => {
    const [min, setmin] = useState()
    const [max, setmax] = useState()
    return (
        <>
            <div class="page-wrapper">

                <div class="stricky-header stricked-menu main-menu">
                    <div class="sticky-header__content"></div>
                </div>
                <section class="page-header">
                    <div class="page-header__bg" style={{ backgroundImage: `url(${BGPh1})` }}></div>

                    <div class="container">
                        <h2>Shop</h2>
                        <ul class="thm-breadcrumb list-unstyled">
                            <li><Link to="/">Home</Link></li>
                            <li>/</li>
                            <li><span>Shop</span></li>
                        </ul>
                    </div>
                </section>


                <section class="products-page">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-md-12 col-lg-3">
                                <div class="product-sidebar">
                                    <div class="product-sidebar__single product-sidebar__search-widget">
                                        <form action="#">
                                            <input type="text" placeholder="Search" />
                                            <button class="crsine-magnifying-glass" type="submit"></button>
                                        </form>
                                    </div>
                                    <div class="product-sidebar__single">
                                        <h3>Price</h3>
                                        <div class="product-sidebar__price-range">
                                            <div class="range-slider-price" id="range-slider-price">
                                                <RangeSlider
                                                    min={0}
                                                    max={1000}
                                                    onChange={({ min, max }) => {
                                                        setmin(min)
                                                        setmax(max)
                                                    }}
                                                />
                                            </div>
                                            <div class="form-group">
                                                <div class="left">

                                                    <p>$<span id="min-value-rangeslider" >{min}</span></p>
                                                    <span>-</span>
                                                    <p>$<span id="max-value-rangeslider">{max}</span></p>
                                                </div>
                                                <div class="right">
                                                    <input type="submit" class="thm-btn" value="Filter" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-sidebar__single">
                                        <h3>Categories</h3>
                                        <ul class="list-unstyled product-sidebar__links">
                                            <li><Link to="#">Rubber Mats <i class="fa fa-angle-right"></i></Link></li>
                                            <li><Link to="#">Tire Shine <i class="fa fa-angle-right"></i></Link></li>
                                            <li><Link to="#">Sprays <i class="fa fa-angle-right"></i></Link></li>
                                            <li><Link to="#">Engine Oil <i class="fa fa-angle-right"></i></Link></li>
                                            <li><Link to="#">Filters <i class="fa fa-angle-right"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div class="product-sidebar__single">
                                        <h3>Products</h3>
                                        <ul class="list-unstyled product-sidebar__posts">
                                            <li><Link to="/shopdetails">
                                                <img src="assets/images/products/product-s-1.jpg" alt="" />
                                                <span class="product-sidebar__posts-content">
                                                    <span class="product-sidebar__posts-title">
                                                        Tire with Wheel
                                                    </span>
                                                    <span class="product-sidebar__posts-amount">
                                                        $120.99
                                                    </span>
                                                    <span class="product-sidebar__posts-star">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </span>
                                                </span>
                                            </Link></li>
                                            <li><Link to="/shopdetails">
                                                <img src="assets/images/products/product-s-2.jpg" alt="" />
                                                <span class="product-sidebar__posts-content">
                                                    <span class="product-sidebar__posts-title">
                                                        Car Breaks
                                                    </span>
                                                    <span class="product-sidebar__posts-amount">
                                                        $120.99
                                                    </span>
                                                    <span class="product-sidebar__posts-star">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </span>
                                                </span>
                                            </Link></li>
                                            <li><Link to="/shopdetails">
                                                <img src="assets/images/products/product-s-3.jpg" alt="" />
                                                <span class="product-sidebar__posts-content">
                                                    <span class="product-sidebar__posts-title">
                                                        Oil Filters
                                                    </span>
                                                    <span class="product-sidebar__posts-amount">
                                                        $120.99
                                                    </span>
                                                    <span class="product-sidebar__posts-star">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </span>
                                                </span>
                                            </Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-9">
                                <div class="product-sorter">
                                    <p>Showing 1–9 of 12 results</p>
                                    <div class="product-sorter__select">
                                        <select>
                                            <option value="#">Sort by popular</option>
                                            <option value="#">Sort by date</option>
                                            <option value="#">Sort by rating</option>
                                            <option value="#">Sort by price</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 col-lg-4">
                                        <div class="product-card">
                                            <div class="product-card__image">
                                                <img src="assets/images/products/product-1-1.jpg" alt="" />
                                                <div class="product-card__image-content">
                                                    <Link to="#"><i class="crsine-heart"></i></Link>
                                                    <Link to="#"><i class="crsine-shopping-cart"></i></Link>
                                                </div>
                                            </div>
                                            <div class="product-card__content">
                                                <div class="product-card__left">
                                                    <h3><Link to="/shopdetails">Tire with Wheel</Link></h3>
                                                    <p>$120.99</p>
                                                </div>
                                                <div class="product-card__stars">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-4">
                                        <div class="product-card">
                                            <div class="product-card__image">
                                                <img src="assets/images/products/product-1-2.jpg" alt="" />
                                                <div class="product-card__image-content">
                                                    <Link to="#"><i class="crsine-heart"></i></Link>
                                                    <Link to="#"><i class="crsine-shopping-cart"></i></Link>
                                                </div>
                                            </div>
                                            <div class="product-card__content">
                                                <div class="product-card__left">
                                                    <h3><Link to="/shopdetails">Engine Oil</Link></h3>
                                                    <p>$18.00</p>
                                                </div>
                                                <div class="product-card__stars">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-4">
                                        <div class="product-card">
                                            <div class="product-card__image">
                                                <img src="assets/images/products/product-1-3.jpg" alt="" />
                                                <div class="product-card__image-content">
                                                    <Link to="#"><i class="crsine-heart"></i></Link>
                                                    <Link to="#"><i class="crsine-shopping-cart"></i></Link>
                                                </div>
                                            </div>
                                            <div class="product-card__content">
                                                <div class="product-card__left">
                                                    <h3><Link to="/shopdetails">Car Breaks</Link></h3>
                                                    <p>$39.00</p>
                                                </div>
                                                <div class="product-card__stars">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-4">
                                        <div class="product-card">
                                            <div class="product-card__image">
                                                <img src="assets/images/products/product-1-4.jpg" alt="" />
                                                <div class="product-card__image-content">
                                                    <Link to="#"><i class="crsine-heart"></i></Link>
                                                    <Link to="#"><i class="crsine-shopping-cart"></i></Link>
                                                </div>
                                            </div>
                                            <div class="product-card__content">
                                                <div class="product-card__left">
                                                    <h3><Link to="/shopdetails">Car Engine</Link></h3>
                                                    <p>$189.99</p>
                                                </div>
                                                <div class="product-card__stars">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-4">
                                        <div class="product-card">
                                            <div class="product-card__image">
                                                <img src="assets/images/products/product-1-5.jpg" alt="" />
                                                <div class="product-card__image-content">
                                                    <Link to="#"><i class="crsine-heart"></i></Link>
                                                    <Link to="#"><i class="crsine-shopping-cart"></i></Link>
                                                </div>
                                            </div>
                                            <div class="product-card__content">
                                                <div class="product-card__left">
                                                    <h3><Link to="/shopdetails">Alloy Wheels</Link></h3>
                                                    <p>$59.90</p>
                                                </div>
                                                <div class="product-card__stars">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-4">
                                        <div class="product-card">
                                            <div class="product-card__image">
                                                <img src="assets/images/products/product-1-6.jpg" alt="" />
                                                <div class="product-card__image-content">
                                                    <Link to="#"><i class="crsine-heart"></i></Link>
                                                    <Link to="#"><i class="crsine-shopping-cart"></i></Link>
                                                </div>
                                            </div>
                                            <div class="product-card__content">
                                                <div class="product-card__left">
                                                    <h3><Link to="/shopdetails">Oil Filter</Link></h3>
                                                    <p>$3.00</p>
                                                </div>
                                                <div class="product-card__stars">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <ul class="list-unstyled post-pagination d-flex justify-content-center align-items-center">
                                    <li><Link to="#"><i class="fa fa-angle-left"></i></Link></li>
                                    <li><Link to="#">01</Link></li>
                                    <li><Link to="#">02</Link></li>
                                    <li><Link to="#">03</Link></li>
                                    <li><Link to="#"><i class="fa fa-angle-right"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            {/* <Link to="#" data-target="html" class="scroll-to-target scroll-to-top"><i class="fa fa-angle-up"></i></Link> */}
        </>
    )
}

export default Shops