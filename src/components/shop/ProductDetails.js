import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from '../../services/service'

const options = {
    margin: 0,
    nav: false,
    loop: true,
    dots: false,
    mouseDrag: true,
    items: 1,
    autoplay: true,
    animateOut: 'fadeOut',
    autoplayTimeout: 10000,
    autoplayHoverPause: false,
    responsiveClass: true,
}

const ProductDetails = () => {
    let params = useParams();
    // console.log(params);
    const { data, isError, isLoading } = useGetProductByIdQuery(params.id);
    // console.log("ProductDetails Data: ", data);

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>An error occured </div>

    return (
        <>
            <div className="row">
                <div className="col-lg-6 md-mb-30">
                    <div className="single-product-slider">
                        <OwlCarousel className="slider single-product-image" {...options}>
                            <div className="images-single">
                                <img src={"/" + data.img} alt="Single Product" />
                            </div>
                            <div className="images-single">
                                <img src={"/" + data.img} alt="Single Product" />
                            </div>
                        </OwlCarousel>

                        <OwlCarousel className="slider single-product-nav" {...options} items={3}>
                            <div className="images-slide-single">
                                <img src={"/" + data.img} alt="Single Product Nav" />
                            </div>
                            <div className="images-slide-single">
                                <img src={"/" + data.img} alt="Single Product Nav" />
                            </div>
                        </OwlCarousel>
                    </div>
                </div>

                <div className="col-lg-6 pl-35 md-pl-15">
                    <div className="single-price-info">
                        <h4 className="product-title">{data.title}</h4>
                        <span className="single-price">${data.price}.00</span>
                        <p className="some-text">{data.desc}</p>
                        <form>
                            <input type="number" className="input-text" step="1" min="1" defaultValue="1" />
                            <button className="readon" type="submit">Add To cart</button>
                        </form>
                        <p className="category mb-0"><span>Category:</span><a href="#"> {data.category}</a></p>
                        <p className="tag mb-0"><span>Tag:</span><a href="#"> {data.title}</a></p>
                    </div>
                </div>
            </div>

            <div className="tab-area">
                <ul className="nav nav-tabs">
                    <li><a className="active" href="#one" data-toggle="tab">Description</a></li>
                    <li><a href="#two" data-toggle="tab">Additional information</a></li>
                    <li><a href="#three" data-toggle="tab">Reviews (0)</a></li>
                </ul>

                <div className="tab-content">
                    <div className="tab-pane active" id="one">
                        <p className="dsc-p">{data.desc}</p>
                    </div>

                    <div className="tab-pane" id="two">
                        <h4 className="tab-title">Additional information</h4>
                        <table>
                            <tbody className="table-box">
                                <tr>
                                    <th>color</th>
                                    <td>{data.color}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="tab-pane" id="three">
                        <div className="row">
                            <div className="col-lg-6 col-md-8">
                                <div className="reviews-grid">
                                    <div className="top-area">
                                        <p>There are no reviews yet.</p>
                                        <h4 className="mb-0">Be the first to review “Air Freshener Electric”</h4>
                                    </div>

                                    <form className="comment-form" id="commentform">
                                        <p className="comment-notes">Your email address will not be published. Required fields are marked *</p>

                                        <div className="placeholder-cntrl">
                                            <label>Name *</label>
                                            <input type="text" name="name" size="30" required />
                                        </div>
                                        <div className="placeholder-cntrl">
                                            <label>Email *</label>
                                            <input type="Email" name="email" size="30" required />
                                        </div>
                                        <div className="ratings mt-30">Your rating
                                            <ul>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                        <div className="placeholder-cntrl">
                                            <label>Your review *</label>
                                            <textarea required></textarea>
                                        </div>
                                        <button className="readon" type="submit">submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails