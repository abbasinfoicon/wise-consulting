import React from 'react'
import TitleSec from '../../lib/TitleSec'
import OwlCarousel from 'react-owl-carousel';
import { useGetAllTtalQuery } from '../../services/service'

const options = {
    loop: true,
    margin: 0,
    responsiveClass: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: ["Prev", "Next"],
    smartSpeed: 800,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        }
    },
}

const Testimonial = () => {
    const ttal = useGetAllTtalQuery();
    // console.log("Data ", ttal.data);

    if (ttal.isLoading) return <div>Loading...</div>
    if (ttal.isError) return <div>An error occured {ttal.error.error}</div>

    return (
        <div className="rs-testimonial style9 gray-bg2 pt-112 pb-111 md-pt-72 md-pb-80">
            <div className="container pb-80">
                <TitleSec title="Testimonials" subtitle="Our Client Reviews" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere labore enim asperiores necessitatibus quia corrupti optio, exercitationem rem?" />
            </div>
            <div className="container custom-for-sl">
                <OwlCarousel className="rs-carousel dot-style1" {...options}>
                    {
                        ttal.data.map((item) => {
                            return (
                                <div className="testi-wrap mb-39 md-mb-0" key={item.id}>
                                    <div className="icon-part">
                                        <img src="assets/images/quote4.png" alt="quote" />
                                    </div>
                                    <div className="wraping">
                                        <p className="desc mb-32">{item.comment}</p>
                                        <div className="posted-by">
                                            <div className="avatar">
                                                <img src={item.img} alt="" />
                                            </div>

                                            <div className="info">
                                                <h4 className="name">{item.name}</h4>
                                                <span className="designation">{item.degination}</span>
                                                <ul className="ratings">
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star-half-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </OwlCarousel>
            </div>
        </div>
    )
}

export default Testimonial