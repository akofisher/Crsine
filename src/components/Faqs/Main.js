import BGPh1 from '../../assets/images/backgrounds/page-header-bg-1-1.jpg'
import BGFaq from '../../assets/images/backgrounds/faq-sidebar-b.jpg'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Faqs = () => {
    const [clicked, setClicked] = useState(0);
    const faqs = [
        {
            question: "Can I return the product after purchase?",
            answer: "There are many variations of passages of available but the majority have suffered alteration that some form by injected randomised words which don’t look even as slightly believable now. Phasellus mollis ac augue sed varius."
        },
        {
            question: "Where should I incorporate my business?",
            answer: "There are many variations of passages of available but the majority have suffered alteration that some form by injected randomised words which don’t look even as slightly believable now. Phasellus mollis ac augue sed varius."
        },
        {
            question: "What about our safety measures ?",
            answer: " There are many variations of passages of available but the majority have suffered alteration that some form by injected randomised words which don’t look even as slightly believable now. Phasellus mollis ac augue sed varius."
        },
        {
            question: "How there are many variations of passages",
            answer: "There are many variations of passages of available but the majority have suffered alteration that some form by injected randomised words which don’t look even as slightly believable now. Phasellus mollis ac augue sed varius."
        },
        {
            question: "What about our safety measures ?",
            answer: "There are many variations of passages of available but the majority have suffered alteration that some form by injected randomised words which don’t look even as slightly believable now. Phasellus mollis ac augue sed varius."
        }
    ]

    return (
        <>

            <div className="stricky-header stricked-menu main-menu">
                <div className="sticky-header__content"></div>
            </div>
            <section className="page-header">
                <div className="page-header__bg" style={{ backgroundImage: `url(${BGPh1})` }}></div>

                <div className="container">
                    <h2>Faqs</h2>
                    <ul className="thm-breadcrumb list-unstyled">
                        <li><Link to="/">Home</Link></li>
                        <li>/</li>
                        <li><span>Faqs</span></li>
                    </ul>
                </div>
            </section>

            <div className="faq-one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="thm-accordion" id="thm-accordion-one">
                                {faqs.map((item, index) => (
                                    <div className={`thm-accordion__item wow fadeInUp ${index === clicked && "active-item"}`} key={index} data-wow-delay="0ms">
                                        <div className="thm-accordion__title" onClick={() => setClicked(index)}>{item.question}

                                            <div className="thm-accordion__icon"></div>
                                        </div>
                                        {index === clicked && <div className="thm-accordion__content">
                                            <p>{item.answer}</p>
                                        </div>}
                                    </div>
                                ))}

                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="faq-one__call" style={{ backgroundImage: `url(${BGFaq})` }}>
                                <h3 className="faq-one__call-title">Get Our Help</h3>
                                <p className="faq-one__call-text">Speak with a human to filling out a form? call corporate office and we
                                    will connect you with a team member.</p>
                                <a className="faq-one__call-number" href="tel:92-666-888-000">92 666 888 000</a>
                                <Link to="/contact" className="thm-btn">
                                    Appointment
                                    <i className="far fa-arrow-alt-circle-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Link to="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></Link> */}

        </>
    )
}

export default Faqs