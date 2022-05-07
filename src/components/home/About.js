import React from 'react'
import CounterUp from '../../lib/CounterUp'


const About = () => {
    return (
        <div id="rs-about" className="rs-about style5">
            <div className="container">
                <div className="wraping pt-120 pb-50 md-pt-72">
                    <div className="row y-middle">
                        <div className="col-lg-5 pr-20 lg-pr-15 md-mb-30">
                            <div className="sec-title mb-45 md-mb-52 sm-mb-32">
                                <div className="sub-title red-color2">Welcome to Wise Consulting & Investments</div>
                                <h2 className="title mb-18"> We are best in class consulting services. </h2>
                                <div className="desc">
                                    The investment aspect is my own investments I make. I do not invest for others.
                                </div>
                            </div>


                            <div className="counter-wrap">
                                <div className="content-part mb-30">
                                    <div className="counter-part">
                                        <div className="rs-count thousand"><CounterUp end={25} timer={100}/></div>
                                        <h4 className="title mb-0">Projects</h4>
                                    </div>
                                    <div className="desc-text">
                                        <div className="desc"> Number of projects and customers isn’t as key as value of projects, over $1.5B, and extent of the projects which are worldwide.</div>
                                    </div>
                                </div>
                                <div className="content-part">
                                    <div className="counter-part">
                                        <div className="rs-count thousand"><CounterUp end={15} timer={100}/></div>
                                        <h4 className="title mb-0">Customer</h4>
                                    </div>
                                    <div className="desc-text">
                                        <div className="desc"> Number of projects and customers isn’t as key as value of projects, over $1.5B, and extent of the projects which are worldwide.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 pl-32 lg-pl-15">
                            <div className="img-part">
                                <img src="assets/images/about/about11-1.png" alt="" />
                                <div className="morphin"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About