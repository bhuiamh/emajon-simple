import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {



    let total = 0;
    let quantity = 0;



    for (const product of cart) {
        // product.quantity = product.quantity || 1; This done by alternative way
        total = total + parseFloat(product.price);
        quantity = quantity + product.quantity;
    }

    let shippingCost = Number((total * 15) / 100).toFixed(2);
    let tax = Number((total * 10) / 100).toFixed(2);


    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: $ {total}</p>
            <p>Total Shipping: {shippingCost} <span>(15%)</span></p>
            <p>Tax: {tax} </p>
            <h6>Grand Total: { Number(parseFloat(total) + parseFloat(shippingCost) + parseFloat(tax)).toFixed(2)}</h6>
        </div>
    );
};

export default Cart;