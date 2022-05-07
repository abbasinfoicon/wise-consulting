import React from 'react'

const About = () => {
    return (
        <div id="rs-about" className="rs-about style1 bg1 md-pt-80">
            <div className="container">
                <div className="row y-bottom">
                    <div className="col-lg-6 padding-0">
                        <img src="assets/images/about/about1.png" alt="" />
                    </div>
                    <div className="col-lg-6 pl-66 pt-75 pb-75 md-pt-42 md-pb-72">
                        <div className="sec-title mb-47 md-mb-42">

                            <h2 className="title mb-0">We are best in class consulting services.</h2>
                        </div>
                        <div className="services-part mb-30">
                            <div className="services-icon">
                                <img src="assets/images/about/icons/1.png" alt="image" />
                            </div>
                            <div className="services-text">
                                <h4 className="title">The ability to identify market-entry</h4>
                                <div className="desc"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. maxime, ipsum similique pariatur nisi.</div>
                            </div>
                        </div>
                        <div className="services-part">
                            <div className="services-icon">
                                <img src="assets/images/about/icons/2.png" alt="image" />
                            </div>
                            <div className="services-text">
                                <h4 className="title">Ensure to increase of expected sales</h4>
                                <div className="desc"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. maxime, ipsum similique pariatur nisi.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About