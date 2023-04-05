import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Swal from 'sweetalert2'


const Product = (props) => {
    const { img, brand, category, description, name, price, website_link } = props.product;

    const handelAddToCart = props.handelAddToCart

    const noPrice = () => price == 0;

    const addToCart = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Product successfully added to your cart!',
            showConfirmButton: false,
            timer: 1500,
        })
    }


    return (
        <div className='product'>
            <img src={img} ></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-category'>{category}</p>
                <p className='product-price'> {noPrice() ? 'FREE' : `$${price}`}</p>
                <a href={website_link}>Details</a>

            </div>

            <button onClick={() => {
                if (noPrice()) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: "Sorry, It's not for sale. Try latter",
                    })
                }
                else {
                    handelAddToCart(props.product);
                    addToCart();
                }
            }} className='btn-cart'>
                Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
            </button>



        </div>
    );
};


export default Product;