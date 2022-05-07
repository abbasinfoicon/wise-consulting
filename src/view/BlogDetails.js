import React from 'react'
import PopularPost from '../components/blog/PopularPost'
import Category from '../components/shop/Category'
import Breadcrumbs from '../lib/Breadcrumbs'
import Search from '../lib/Search'
import { useParams } from "react-router-dom"
import { useGetSingleBlogQuery } from '../services/service'
import NextPost from '../components/blog/NextPost'

const BlogDetails = () => {
    const params = useParams();
    // console.log(params);
    const { data, isError, isLoading } = useGetSingleBlogQuery(params.slug);
    // console.log("BlogDetails Data: ", data);
    // console.log("BlogDetails id: ", data.id);

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>An error occured {data.error.error}</div>



    return (
        <>
            {
                data.map(({ id, title, img, decs, author, author_img, category, slug, comment }) => {
                    return (
                        <div className="main-content" key={id}>
                            <Breadcrumbs title={title} classbg="bg-9" bg_img={'/assets/images/breadcrumbs/9.jpg'} />

                            <div className="rs-blog inner single pt-100 pb-100 md-pt-80 md-pb-80">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="blog-part">
                                                <div className="blog-img">
                                                    <img src={"/" + img} alt={title} />
                                                </div>
                                                <div className="article-content shadow mb-60">
                                                    <ul className="blog-meta mb-22">
                                                        <li><i className="fa fa-calendar-check-o"></i> April 6, 2020</li>
                                                        <li><i className="fa fa-user-o"></i> {author}</li>
                                                        <li><i className="fa fa-book"></i> <a href="#">{category}</a></li>
                                                        <li><i className="fa fa-comments-o"></i> {comment}</li>
                                                    </ul>
                                                    <p className="desc mb-35">{decs}</p>
                                                    <h2>{title}</h2>

                                                    <p className="desc">{decs}</p>

                                                    <div className="mb-26"><img src={"/assets/images/blog/4.jpg"} alt="Single Articles" /></div>

                                                    <p className="desc">{decs}</p>

                                                    <ul className="listing-style2 modify ml-20 mb-28">
                                                        <li>New Construction Benefit of Service</li>
                                                        <li>Renovations Benefit of Service</li>
                                                        <li>Historic Renovations and Restorations</li>
                                                        <li>Additions Benefit of Service</li>
                                                        <li>Rebuilding from fire or water damage</li>
                                                    </ul>

                                                    <h3 className="mb-17">Experts Always Ready to Maximizing Products</h3>

                                                    <p className="desc">Proactively fabricate one-to-one materials via effective e-business. Completely synergize scalable e-commerce rather than high standards in e-services. Assertively iterate resource maximizing products after leading-edge intellectual capital. Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>

                                                    <h4 className="mb-17">Get Start Your Next Project</h4>

                                                    <p className="desc mb-0">Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes and tactical architectures. Completely iterate covalent strategic theme areas via accurate e-markets. Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled applications. Quickly drive clicks-and-mortar catalysts for change before vertical architectures.</p>
                                                </div>

                                                <NextPost nextid={id} />

                                                <div className="bs-contact-form pt-45">
                                                    <h3 className="title">Leave a Reply</h3>
                                                    <p>Your email address will not be published. Required fields are marked *</p>
                                                    <div id="form-messages"></div>
                                                    <form id="contact-form" method="post" action="https://rstheme.com/products/html/reobiz/mailer.php">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="form-field">
                                                                    <label>Name *</label>
                                                                    <input type="text" id="name" name="name" required="" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-field">
                                                                    <label>Email *</label>
                                                                    <input type="email" id="email" name="email" required="" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className="form-field mb-30">
                                                                    <label>Comment</label>
                                                                    <textarea rows="7" id="message" name="message"></textarea>
                                                                </div>
                                                                <div className="form-button mt-30">
                                                                    <button type="submit" className="readon radius">Post Comment</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 md-mb-50 pl-35 lg-pl-15 md-order-first">
                                            <div id="sticky-sidebar" className="blog-sidebar">
                                                <Search />

                                                <PopularPost id={id} />

                                                <Category />
                                            </div>
                                        </div>
                                    </div>
                                    <div id="sticky-end"></div>
                                </div>
                            </div>

                        </div>
                    )
                })
            }
        </>
    )
}

export default BlogDetails