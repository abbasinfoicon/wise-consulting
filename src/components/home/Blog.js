import React from 'react'
import TitleSec from '../../lib/TitleSec'
import OwlCarousel from 'react-owl-carousel';
import { useGetAllBlogQuery } from '../../services/service'
import { Link } from 'react-router-dom';

const options = {
    margin: 0,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    navText: ["Prev", "Next"],
    smartSpeed: 800,
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

const Blog = () => {
    const blog = useGetAllBlogQuery();
    // console.log("Data ", blog.data);

    if (blog.isLoading) return <div>Loading...</div>
    if (blog.isError) return <div>An error occured {blog.error.error}</div>

    return (
        <div className="rs-blog style3 pt-104 pb-100 md-pt-72 md-pb-60 xs-pb-80">
            <div className="container">
                <TitleSec
                    title="News & Blog"
                    subtitle="Latest News & Blog"
                    desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere labore enim asperiores necessitatibus quia corrupti optio, exercitationem rem?" />

            </div>

            <div className="container custom-for-sl">
                <OwlCarousel className="rs-carousel" {...options}>

                    {
                        blog.data.map((item) => {
                            return (
                                <div className="blog-wrap" key={item.id}>
                                    <div className="img-part">
                                        <Link to={"/blog/" + item.slug}><img src={item.img} alt={item.title} /></Link>
                                        <div className="blog-meta"><i className="fa fa-clock-o"></i> 18 Jan 2022</div>
                                    </div>

                                    <div className="content-part">
                                        <h4 className="title"><Link to={"/blog/" + item.slug}>{item.title}</Link></h4>
                                        <div className="desc">{item.desc}</div>
                                        <div className="btn-part">
                                            <Link to={"/blog/" + item.slug}><i className="fa fa-plus"></i></Link>
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

export default Blog