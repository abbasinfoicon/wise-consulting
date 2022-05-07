import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from "../features/CartSlice";
import Breadcrumbs from '../lib/Breadcrumbs'
import { Link } from 'react-router-dom'

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    // console.log("cartData: ", cart.cartItem);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    const handleDecreaseCart = (product) => {
        dispatch(decreaseCart(product));
    };
    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    };
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    return (
        <div className="main-content">
            <Breadcrumbs title="Cart" classbg="bg-5" bg_img={'/assets/images/breadcrumbs/5.jpg'} />

            {
                cart.cartItems.length === 0 ? (
                    <div className="cart-empty">
                        <p>Your cart is currently empty</p>
                        <div className="start-shopping">
                            <Link to="/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="bi bi-arrow-left"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                    />
                                </svg>
                                <span>Start Shopping</span>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="rs-cart pt-100 md-pt-80">
                        <div className="container">
                            <div className="cart-wrap pb-100 md-pb-80">
                                <form>
                                    <table className="cart-table">
                                        <thead>
                                            <tr>
                                                <th className="product-remove"></th>
                                                <th className="product-thumbnail"></th>
                                                <th className="product-name">Product</th>
                                                <th className="product-price">Price</th>
                                                <th className="product-quantity">Quantity</th>
                                                <th className="product-subtotal">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cart.cartItems &&
                                                cart.cartItems.map((cartItem) => (
                                                    <tr key={cartItem.id}>
                                                        <td className="product-remove"><button onClick={() => handleRemoveFromCart(cartItem)}>×</button></td>
                                                        <td className="product-thumbnail"><a href="#"><img src={"/" + cartItem.img} alt="" /></a></td>
                                                        <td className="product-name"><a href="#">{cartItem.title}</a></td>
                                                        <td className="product-price"><span>$</span>{cartItem.price}.00</td>
                                                        <td className="product-quantity">
                                                            <span className='increment-btn' onClick={() => handleDecreaseCart(cartItem)}>-</span>
                                                            <div className="count">{cartItem.cartQuantity}</div>
                                                            <span className='increment-btn' onClick={() => handleAddToCart(cartItem)}>+</span>
                                                        </td>
                                                        <td className="subtotal"><span className="amount"><span className="symbol">$</span>{cartItem.price * cartItem.cartQuantity}.00</span></td>
                                                    </tr>
                                                ))
                                            }

                                        </tbody>
                                    </table>
                                </form>


                                <div className="cart-collaterals pt-70 md-pt-50">
                                    <div className="cart-totals">
                                        <h5 className="title mb-25">Cart totals</h5>
                                        <table className="cart-total-table">
                                            <tbody>
                                                <tr className="cart-subtotal">
                                                    <th>Subtotal</th>
                                                    <td><span className="amount"><span>$</span>{cart.cartTotalAmount}.00</span></td>
                                                </tr>
                                                <tr className="order-total">
                                                    <th>Total</th>
                                                    <td><strong><span className="amount"><span>$</span>{cart.cartTotalAmount}.00</span></strong></td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <div className="wc-proceed-to-checkout">
                                            <Link to="/account" className="readon"> Proceed to checkout</Link>
                                            <button className="readon" onClick={() => handleClearCart()}>Clear Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }


        </div>
    )
}

export default Cart