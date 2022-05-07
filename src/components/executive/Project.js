import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import { useGetAllServiceQuery } from '../../services/service'

const options = {
    margin: 0,
    nav: false,
    loop: true,
    dots: false,
    mouseDrag: true,
    autoplay: true,
    autoplayTimeout: 10000,
    smartSpeed: 250,
    autoplayHoverPause: false,
    responsiveClass: true,
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
        900: {
            items: 4,
        }
    },
}

const Project = () => {
    const { data, isLoading, isError } = useGetAllServiceQuery();
    // console.log("Data ", data);

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>An error occured {data.error.error}</div>


    return (
        <OwlCarousel id="rs-project-style4" className="rs-carousel" {...options}>
            {
                data.map(({ id, slug, img, name, title }) => {
                    return (
                        <div className="project-item" key={id}>
                            <div className="project-img">
                                <Link to={`/${slug}`}><img src={img} alt="images" /></Link>
                            </div>
                            <div className="project-inner">
                                <h4 className="title"><Link to={`/${slug}`}>{name} Service</Link></h4>
                                <span className="category"><Link to={`/${slug}`}>{title}</Link></span>
                            </div>
                        </div>
                    )
                })
            }
        </OwlCarousel>
    )
}

export default Project