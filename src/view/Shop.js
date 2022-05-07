import React from 'react'
import Breadcrumb from '../lib/Breadcrumbs'
import Products from '../components/shop/Products'
import Filter from '../components/shop/Filter'
import Category from '../components/shop/Category'
import PriceFilter from '../components/shop/PriceFilter'
import Tags from '../components/shop/Tags'


const Shop = () => {
    return (
        <div className="main-content">
            <Breadcrumb title="Shop" classbg="bg-9" bg_img={ 'assets/images/breadcrumbs/9.jpg' } />

            <div className="rs-shop pt-100 pb-100 md-pt-80 md-pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <Filter />

                            <Products />
                        </div>

                        <div className="col-lg-4 pl-35 md-pl-15 md-mb-40 md-order-first">
                            <Category />

                            <PriceFilter />

                            <Tags />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Shop