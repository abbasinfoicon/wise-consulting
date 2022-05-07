import React from 'react'
import TitleSec from '../../lib/TitleSec'
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import { useGetAllServiceQuery } from '../../services/service'

const options = {
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: true,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 2,
        },
        600: {
            items: 3,
        }
    },
}

const Project = () => {
    const res = useGetAllServiceQuery();
    // console.log("Data ", res.data);

    if (res.isLoading) return <div>Loading...</div>
    if (res.isError) return <div>An error occured {res.error.error}</div>

    return (
        <div className="rs-project style2">
            <div className="top-part bg25 pt-112 md-pt-72">
                <div className="container">
                    <TitleSec
                        title="Latest Projects"
                        subtitle="Our Latest Projects"
                        desc="Number of projects and customers isn’t as key as value of projects, over $1.5B, and extent of the projects which are worldwide." />
                </div>
            </div>


            <div className="wrappin">
                <div className="container custom">
                    <OwlCarousel className="rs-carousel" {...options}>
                        {
                            res.data.map((ser) => {
                                return (
                                    <div className="project-wrap" key={ser.id}>
                                        <div className="img-part">
                                            <img src={ ser.img_2 } alt={ ser.name } />
                                        </div>
                                        <div className="content-part">
                                            <h4 className="title"><Link to={"/" + ser.slug}>{ ser.name }</Link></h4>
                                            <span className="category"><Link to={"/" + ser.slug}>{ ser.title }</Link></span>
                                        </div>
                                        <div className="btn-part">
                                            <Link to={"/" + ser.slug}><i className="flaticon-next"></i></Link>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </OwlCarousel>
                </div>
            </div>
        </div>
    )
}

export default Project