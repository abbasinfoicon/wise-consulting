import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import { useGetAllPtnrQuery } from '../../services/service'

const options = {
    loop: true,
    margin: 70,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: true,
    navText: ["Prev", "Next"],
    smartSpeed: 800,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 2,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 5,
        }
    },
}

const Partner = () => {
    const partner = useGetAllPtnrQuery();
    // console.log("Data ", partner.data);

    if (partner.isLoading) return <div>Loading...</div>
    if (partner.isError) return <div>An error occured {partner.error.error}</div>

    return (
        <div className="rs-partner modify6 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <OwlCarousel className="rs-carousel" {...options}>
                    {
                        partner.data.map((item) => {
                            return (
                                <div className="partner-item" key={item.id}>
                                    <Link to="/"><img src={item.img} alt={item.name} /></Link>
                                </div>
                            )
                        })
                    }

                </OwlCarousel>
            </div>
        </div>
    )
}

export default Partner