import React from 'react'
import Freequote from '../components/about/Freequote'
import Map from '../components/contact/Map'
import Breadcrumbs from '../lib/Breadcrumbs'

const Contact = () => {
  return (
    <div className="main-content">
             <Breadcrumbs title="Contact" classbg="bg-6" bg_img={ 'assets/images/breadcrumbs/6.jpg' } />
            
            
            <div id="rs-contact" className="rs-contact inner pt-100 md-pt-80">
                <div className="container">
                    <div className="content-info-part mb-60">
                        <div className="row gutter-16">
                            <div className="col-lg-4 md-mb-30">
                                <div className="info-item">
                                    <div className="icon-part">
                                        <i className="fa fa-at"></i>
                                    </div>
                                    <div className="content-part">
                                        <h4 className="title">Phone Number</h4>
                                        <a href="tel:702-513-3882">702-513-3882</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 md-mb-30">
                                <div className="info-item">
                                    <div className="icon-part">
                                        <i className="fa fa-envelope-o"></i>
                                    </div>
                                    <div className="content-part">
                                        <h4 className="title">Email Address</h4>
                                        <a href="mailto:DrWise@wiseconsultingandinvestments.com">DrWise@wiseconsultingandinvestments.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="info-item">
                                    <div className="icon-part">
                                        <i className="fa fa-map-o"></i>
                                    </div>
                                    <div className="content-part">
                                        <h4 className="title">Office Address</h4>
                                        <p> Las Vegas, Nevada, United States</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Freequote bg="style1"/>

                <Map />
            </div>
            
            
        </div> 
  )
}

export default Contact