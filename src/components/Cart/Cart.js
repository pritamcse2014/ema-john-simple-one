import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    return (
        <div>
            <p>Selected Items : {cart.length}</p>
            <p>Total Price : $</p>
            <p>Total Shipping Charge : $</p>
            <p>Tax : $</p>
            <h2>Grand Total : $</h2>
        </div>
    );
};

export default Cart;