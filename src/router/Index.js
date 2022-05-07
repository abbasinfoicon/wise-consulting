import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from "../view/Home"
import About from "../view/About"
import Account from "../view/Account"
import Services from '../view/Services';
import ServiceDetails from '../view/ServiceDetails';
import ExecutiveLeadership from '../view/ExecutiveLeadership';
import Blog from '../view/Blog';
import BlogDetails from '../view/BlogDetails';
import Shop from '../view/Shop';
import Contact from '../view/Contact';
import ShopDetails from '../view/ShopDetails';
import Cart from '../view/Cart';
import Checkout from '../view/Checkout';
import NotFound from '../view/NotFound';
import ScrollToTop from '../lib/ScrollTop';
import Carrer from '../view/Carrer';
import Login from '../view/Login';

const Index = () => {
    return (
        <ScrollToTop>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/account" element={<Account />} />

                <Route path='/service' element={<Services />} />
                <Route path='/:slug' element={<ServiceDetails />} />

                <Route path='/executive' element={<ExecutiveLeadership />} />

                <Route path='/blog' element={<Blog />} />
                <Route path='/blog/:slug' element={<BlogDetails />} />

                <Route path='/shop' element={<Shop />} />
                <Route path='/shop/:id' element={<ShopDetails />} />
                <Route path='/shop/cart' element={<Cart />} />
                <Route path='/shop/checkout' element={<Checkout />} />

                <Route path='/contact' element={<Contact />} />
                <Route path='/carrer' element={<Carrer />} />
                <Route path='/login' element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </ScrollToTop>
    )
}

export default Index