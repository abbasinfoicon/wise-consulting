import React from 'react'
import PopularPost from '../components/blog/PopularPost'
import Breadcrumbs from '../lib/Breadcrumbs'
import Search from '../lib/Search'
import Category from '../components/shop/Category'
import { useGetAllBlogQuery } from '../services/service'
import { Link } from 'react-router-dom';

const Blog = () => {
    const blog = useGetAllBlogQuery();
    // console.log("Blog Data ", blog.data);

    if (blog.isLoading) return <div>Loading...</div>
    if (blog.isError) return <div>An error occured {blog.error.error}</div>
    if (!blog?.data) { return <div>No posts :(</div>; }


    return (
        <div className="main-content">
            <Breadcrumbs title="Blog" classbg="bg-8" bg_img={ 'assets/images/breadcrumbs/8.jpg' } />

            <div className="rs-blog inner pt-100 pb-100 md-pt-80 md-pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            {
                                blog.data.map((item) => {
                                    return (
                                        <div className="blog-wrap shadow mb-70 xs-mb-50" key={item.id}>
                                            <div className="image-part">
                                                <Link to={"/blog/" + item.slug}><img src={item.img} alt="{item.author}" /></Link>
                                            </div>

                                            <div className="content-part">
                                                <h3 className="title mb-10"><Link to={"/blog/" + item.slug}>{item.title}</Link></h3>
                                                <ul className="blog-meta mb-22">
                                                    <li><i className="fa fa-calendar-check-o"></i> April 6, 2020</li>
                                                    <li><i className="fa fa-user-o"></i> {item.author}</li>
                                                    <li><i className="fa fa-book"></i> <Link to={"/blog/" + item.slug}>{item.category}</Link></li>
                                                </ul>
                                                <p className="desc mb-20 lineNo2">{item.decs}</p>
                                                <div className="btn-part">
                                                    <Link to={"/blog/" + item.slug} className="readon-arrow">Continue Reading</Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>

                        <div className="col-lg-4 md-mb-50 pl-35 lg-pl-15 md-order-first">
                            <div id="sticky-sidebar" className="blog-sidebar">
                                <Search />

                                <PopularPost />

                                <Category />
                            </div>
                        </div>
                    </div>

                    <div id="sticky-end"></div>
                </div>
            </div>

        </div>
    )
}

export default Blog