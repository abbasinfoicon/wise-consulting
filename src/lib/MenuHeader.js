import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useGetAllServiceQuery } from '../services/service'
import Bucket from './Bucket';
import { useSelector } from "react-redux";



const MenuHeader = () => {
    const { cartTotalQuantity } = useSelector((state) => state.cart);
    const res = useGetAllServiceQuery();
    const data = res.data;
    // console.log("Data ", data);

    if (res.isLoading) return <div>Loading...</div>
    if (res.isError) return <div>An error occured {res.error.error}</div>


    return (
        <header id="rs-header" className="rs-header">
            <div className="menu-area menu-sticky">
                <div className="container">
                    <div className="row y-middle">
                        <div className="col-lg-2">
                            <div className="logo-area">
                                <Link to="/"><img src="assets/images/logo-2.png" alt="logo" /></Link>
                            </div>
                        </div>

                        <div className="col-lg-10 text-right">
                            <div className="rs-menu-area">
                                <div className="main-menu">
                                    <div className="mobile-menu">
                                        <a className="rs-menu-toggle" href='#'><i className="fa fa-bars"></i></a>
                                    </div>
                                    <nav className="rs-menu pl-40 md-pl-0">
                                        <ul className="nav-menu">
                                            <li><NavLink to="/">Home</NavLink></li>
                                            <li><NavLink to="/about">About</NavLink></li>
                                            <li className="menu-item-has-children">
                                                <NavLink to="/service">Services</NavLink>
                                                <ul className="sub-menu">
                                                    {
                                                        data.map((item) => {
                                                            return (
                                                                <li key={item.id}><NavLink to={"/" + item.slug}>{item.name}</NavLink></li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </li>
                                            <li><NavLink to="/executive">Executive</NavLink></li>
                                            <li><NavLink to="/shop">Shop</NavLink></li>
                                            <li><NavLink to="/blog">Blog</NavLink></li>
                                            <li><NavLink to="/contact">Contact</NavLink></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="expand-btn-inner">
                                    <ul>
                                        <li>
                                            <span className="hidden-xs rs-search" data-target=".search-modal" data-toggle="modal">
                                                <i className="fa fa-search"></i>
                                            </span>
                                        </li>
                                        <li className="icon-bar cart-inner mini-cart-active">
                                            <Link to="/shop/cart" className="cart-icon"><i className="flaticon-bag"></i>
                                            <span>{cartTotalQuantity}</span>
                                            </Link>
                                            <Bucket/>
                                        </li>

                                    </ul>
                                    <div className="head-btn pl-30">
                                        <Link to="/contact">Get Started</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default MenuHeader