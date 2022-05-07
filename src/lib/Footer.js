import React from 'react'
import { Link } from 'react-router-dom'
import CopyRight from './CopyRight'
import Modal from './Modal'
import Newsletter from './Newsletter'
import ScrollBar from './ScrollBar'

const Footer = () => {
  return (
    <>
        <footer id="rs-footer" className="rs-footer">
            <Newsletter />
            
            <div className="bg-wrap">
                <div className="container">
                    <div className="footer-content pt-62 pb-79 md-pb-64 sm-pt-48">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12 footer-widget md-mb-39">
                                <div className="about-widget pr-15">
                                    <div className="logo-part">
                                       <Link to="/"><img src="assets/images/logo.png" alt="Footer Logo"/></Link>
                                    </div>
                                    <p className="desc">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nisi earum repellat quidem deserunt. Itaque,p  repellat mollitia vel atque eligendi, culpa ab, exercitationem aliquam!
                                    </p>
                                    <div className="btn-part">
                                        <Link className="readon" to="/contact">Discover More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 footer-widget md-mb-39">
                                <h4 className="widget-title pl-50">Quick links</h4>
                                <ul className="address-widget pl-50">
                                    <li>                               
                                        <div className="desc">
                                           <Link to="/">Home</Link>
                                        </div>
                                    </li>
                                    <li>
                                       
                                        <div className="desc">
                                           <Link to="/service">Services</Link>
                                        </div>
                                    </li>
                                    <li>
                                        
                                        <div className="desc">
                                           <Link to="/about">About Us</Link>
                                        </div>
                                    </li>
                                    <li>
                                        
                                        <div className="desc">
                                           <Link to="/carrer">Careers</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 md-mb-32 footer-widget">
                                <h4 className="widget-title">Contact Info</h4>
                                <ul className="address-widget pr-40">
                                    <li>
                                        <i className="flaticon-location"></i>
                                        <div className="desc">Las Vegas, Nevada, United States</div>
                                    </li>
                                    <li>
                                        <i className="flaticon-call"></i>
                                        <div className="desc">
                                            <a href="tel:702-513-3882">702-513-3882</a>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="flaticon-email"></i>
                                        <div className="desc">
                                            <a href="mailto:DrWise@wiseconsultingandinvestments.com">DrWise@wiseconsultingandinvestments.com</a>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="flaticon-clock"></i>
                                        <div className="desc">
                                            10:00 - 17:00
                                        </div>
                                    </li>
                                </ul>
                            </div>
                           
                        </div>
                    </div>
                    <CopyRight />
                </div>
            </div>
        </footer>

        <ScrollBar />

        <Modal/>
    </>
  )
}

export default Footer