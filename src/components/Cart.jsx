import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Cart() {
    const state = useSelector((state) => state.handleCart);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        state.map((item) =>
            setCartTotal((prevCartTotal) => (prevCartTotal += item.price))
        );
    }, [state]);

    console.log(cartTotal);
    return (
        <div>
            <div className="container vh-80  mt-5 p-3 rounded cart">
                <div className="row no-gutters">
                    <div className="col-md-8">
                        <div className="product-details me-2">
                            <div className="d-flex flex-row align-items-center">
                                <NavLink
                                    className="navbar-brand fw-bold fs-4"
                                    to="/products"
                                >
                                    <i className="fa fa-long-arrow-left"></i>
                                    <span className="mx-2">
                                        Continue Shopping
                                    </span>
                                </NavLink>
                            </div>
                            <hr />
                            <h6 className="mb-0">Shopping cart</h6>
                            <div className="d-flex justify-content-between">
                                <span>
                                    You have {state.length} items in your cart
                                </span>
                            </div>

                            {/* <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                                <div className="d-flex flex-row">
                                    <img
                                        className="rounded"
                                        src="https://i.imgur.com/Tja5H1c.jpg"
                                        width="40"
                                        alt="...."
                                    />
                                    <div className="ms-2">
                                        <span className="font-weight-bold d-block">
                                            Samsung galaxy Note 10&nbsp;
                                        </span>
                                        <span className="spec">
                                            256GB, Navy Blue
                                        </span>
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center">
                                    <span className="d-block mx-5">1</span>
                                    <span className="d-block ms-5 font-weight-bold">
                                        $999
                                    </span>
                                    <i className="fa fa-trash-o ms-3 text-black-50"></i>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-md-4 rounded-4">
                        <div className="payment-info p-5  rounded-0">
                            <div className="d-flex justify-content-between align-items-center">
                                <span>Card details</span>
                                <img
                                    className="rounded"
                                    src="https://imgur.com/user/emmazoe10/avatar"
                                    width="30"
                                    alt="...."
                                />
                            </div>
                            <span className="type d-block mt-3 mb-1">
                                Card type
                            </span>
                            <label className="radio me-2">
                                <input
                                    type="radio"
                                    name="card"
                                    value="payment"
                                    checked
                                />
                                <span>
                                    <img
                                        width="30"
                                        src="https://img.icons8.com/color/48/000000/mastercard.png"
                                        alt="...."
                                    />
                                </span>
                            </label>

                            <label className="radio me-2">
                                <input
                                    type="radio"
                                    name="card"
                                    value="payment"
                                />
                                <span>
                                    <img
                                        width="30"
                                        src="https://img.icons8.com/officel/48/000000/visa.png"
                                        alt="...."
                                    />
                                </span>
                            </label>

                            <label className="radio me-2">
                                <input
                                    type="radio"
                                    name="card"
                                    value="payment"
                                />
                                <span>
                                    <img
                                        width="30"
                                        src="https://img.icons8.com/ultraviolet/48/000000/amex.png"
                                        alt="...."
                                    />
                                </span>
                            </label>

                            <label className="radio me-2">
                                <input
                                    type="radio"
                                    name="card"
                                    value="payment"
                                />
                                <span>
                                    <img
                                        width="30"
                                        src="https://img.icons8.com/officel/48/000000/paypal.png"
                                        alt="...."
                                    />
                                </span>
                            </label>
                            <div>
                                <label className="credit-card-label">
                                    Name on card
                                </label>
                                <input
                                    type="text"
                                    className="form-control credit-inputs"
                                    placeholder="Name"
                                />
                            </div>
                            <div>
                                <label className="credit-card-label">
                                    Card number
                                </label>
                                <input
                                    type="text"
                                    className="form-control credit-inputs"
                                    placeholder="0000 0000 0000 0000"
                                />
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label className="credit-card-label">
                                        Date
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control credit-inputs"
                                        placeholder="12/24"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="credit-card-label">
                                        CVV
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control credit-inputs"
                                        placeholder="342"
                                    />
                                </div>
                            </div>
                            <hr className="line" />

                            <button
                                className="btn btn-primary btn-block d-flex justify-content-between mt-3 w-100 py-3"
                                type="button"
                            >
                                <span>${cartTotal}</span>
                                <span>
                                    Checkout
                                    <i className="fa fa-long-arrow-right ms-1"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
