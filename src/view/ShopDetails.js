import React from 'react'
import ProductDetails from '../components/shop/ProductDetails'
import RelatedProduct from '../components/shop/RelatedProduct'
import Breadcrumbs from '../lib/Breadcrumbs'

const ShopDetails = () => {

    return (
        <div className="main-content">
            <Breadcrumbs title="Shop Single" classbg="bg-9" bg_img={'/assets/images/breadcrumbs/9.jpg'} />

            <div className="rs-shop single-product shop-rp pt-100 pb-20 md-pt-80 md-pb-30">
                <div className="container">
                    <ProductDetails />

                    <RelatedProduct />
                </div>
            </div>
        </div>
    )
}

export default ShopDetails