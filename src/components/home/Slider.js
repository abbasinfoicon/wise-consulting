import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import { useGetAllSliderQuery } from '../../services/service'

const options = {
    margin: 0,
    nav: true,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    loop: true,
    dots: true,
    mouseDrag: true,
    items: 1,
    autoplay: true,
    animateOut: 'fadeOut',
    autoplayTimeout: 10000,
    autoplayHoverPause: false,
    responsiveClass: true
}

const Slider = () => {
    const slide = useGetAllSliderQuery();
    // console.log("Data ", slide.data);

    if (slide.isLoading) return <div>Loading...</div>
    if (slide.isError) return <div>An error occured {slide.error.error}</div>

    return (
        <div id="rs-slider" className="rs-slider slider11">
            <OwlCarousel className="slider-carousel3" {...options}>
                {
                    slide.data.map((item) => {
                        return (
                            <div className="slider slide1" key={item.id}>
                                <div className="container">
                                    <div className="row">
                                        <div className="offset-lg-5"></div>
                                        <div className="col-lg-7 pl-30 md-pl-15">
                                            <div className="content-part">
                                                <div className="slider-des">
                                                    <h1 className="sl-title mb-21">{item.title}</h1>
                                                    <p className="sl-desc mb-40">{item.desc}</p>
                                                </div>
                                                <div className="slider-bottom">
                                                    <ul>
                                                        <li><Link to="/contact" className="readon">Get In Touch</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image-part">
                                        <img src={item.img} alt="img" />
                                    </div>
                                    <div className="sl-shape">
                                        <img src={item.bg_img} alt="bg-img" />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </OwlCarousel >
        </div>
    )
}

export default Slider