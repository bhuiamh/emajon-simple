import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {


    let total = 0;


    for (const product of cart) {
        total = total + parseFloat(product.price);

    }
    let shippingCost = Number((total * 15) / 100).toFixed(2);
    let tax = Number((total * 10) / 100).toFixed(2);
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: $ {total}</p>
            <p>Total Shipping: {shippingCost} <span>(15%)</span></p>
            <p>Tax: {tax} </p>
            <h6>Grand Total: { Number(parseFloat(total) + parseFloat(shippingCost) + parseFloat(tax)).toFixed(2)}</h6>
        </div>
    );
};

export default Cart;