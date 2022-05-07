import React from 'react'

const Collaboration = () => {
    return (
        <div className="rs-collaboration style1 bg4 mb-100">
            <div className="wrap-1400">
                <div className="row y-middle">
                    <div className="col-md-6 sm-mb-40">
                        <div className="img-part">
                            <img src="assets/images/collaboration/1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 pl-50 pt-100 pb-100">
                        <div className="video-btn text-center mb-50">
                            <a className="popup-videos" href="https://www.youtube.com/watch?v=YLN1Argi7ik">
                                <i className="fa fa-play"></i>
                            </a>
                        </div>
                        <div className="sec-title text-center mb-40 pr-20 pl-20">
                            <h2 className="title white-color mb-25">Creative Collaboration</h2>
                            <div className="desc white-color">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ipsa, amet accusantium, recusandae corrupti unde nulla minus praesentium nostrum ea dolorum reprehenderit est veritatis nemo!
                            </div>
                        </div>
                        <div className="dual-btn">
                            <div className="dual-btn-wrap">
                                <a className="btn-left" href="about.html"><span>More About</span></a>
                                <span className="connector"> Or </span>
                            </div>
                            <div className="dual-btn-wrap">
                                <a className="btn-right" href="contact.html"><span>Contact Us</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collaboration