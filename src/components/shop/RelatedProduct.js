import React from 'react'
import { Link } from 'react-router-dom';
import { useGetLimitProductQuery } from '../../services/service'


const RelatedProduct = () => {
    const { data, isLoading, isError } = useGetLimitProductQuery(3);
    // console.log("Related Prodect Data: ", data);

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>An error occured {data.error.error}</div>

    return (
        <div className="related-products pt-64">
            <h3 className="mb-33">Related products</h3>
            <div className="row">
                {
                    data.map((item) => {
                        return (
                            <div className="col-lg-4 col-sm-6 mb-73 md-mb-43" key={item.id}>
                                <div className="product-list">
                                    <div className="image-product">
                                        <img src={"/"+ item.img} alt="" />
                                        <div className="overley">
                                            <Link to={`/shop/${item.id}`}><i className="flaticon-shopping-bag"></i></Link>
                                        </div>
                                    </div>
                                    <div className="content-desc text-center">
                                        <h2 className="loop-product-title pt-19"><Link to={`/shop/${item.id}`}>{item.title}</Link></h2>
                                        <span className="price">${item.price}.00</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RelatedProduct