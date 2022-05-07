import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotals, removeFromCart } from "../features/CartSlice";
import { Link } from 'react-router-dom'

const Bucket = () => {
    const cart = useSelector((state) => state.cart);
    // console.log(cart);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    };

    return (
        <div className="woocommerce-mini-cart text-left">
            {
                cart.cartItems.length === 0 ? (
                    <div className="cart-empty">
                        <p>Your cart is currently empty</p>
                    </div>
                ) : (

                    <>
                        <ul className="cart-icon-product-list">
                            {
                                cart.cartItems &&
                                cart.cartItems.map((cartItem) => (
                                    <li className="display-flex" key={cartItem.id}>
                                        <div className="icon-cart">
                                            <button onClick={() => handleRemoveFromCart(cartItem)}><i className="fa fa-times"></i></button>
                                        </div>
                                        <div className="product-info">
                                            <Link to="/shop/cart">{cartItem.title}</Link><br />
                                            <span className="quantity">{cartItem.cartQuantity} × ${cartItem.price}.00</span>
                                        </div>
                                        <div className="product-image">
                                            <Link to="/shop/cart"><img src={"/" + cartItem.img} alt={cartItem.title} /></Link>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>

                        <div className="total-price text-center">
                            <span className="subtotal">Subtotal:</span>
                            <span className="current-price">${cart.cartTotalAmount}.00</span>
                        </div>

                        <div className="cart-btn text-center">
                            <Link to="/shop/cart" className="crt-btn btn1">View Cart</Link>
                            <Link to="/shop/checkout" className="crt-btn btn2">Check Out</Link>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Bucket