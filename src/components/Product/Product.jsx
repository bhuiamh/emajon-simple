import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'


const Product = (props) => {
    const { image_link, brand, category, description, name, price, website_link } = props.product;
    const [displayProduct, setDisplayProduct] = useState(true);
    
    const handelAddToCart = props.handelAddToCart

    const handleImageLoadError = () => {
        setDisplayProduct(false);
    }

    return (
        displayProduct &&
        <div className='product'>
            <img src={image_link} onError={handleImageLoadError}></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-category'>{category}</p>
                <p className='product-price'> ${price}</p>
                <a href={website_link}>Details</a>

            </div>
            <button onClick={ () => handelAddToCart(props.product)} className='btn-cart'>Add to Cart  <FontAwesomeIcon icon={faShoppingCart}/></button>
        </div>
    );
};


export default Product;