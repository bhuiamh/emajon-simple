import React, { useState } from 'react';
import './Product.css'

import defaultImage from '../../../src/images/logo1-removebg-preview.png'

// const Product = (props) => {
//     const {image_link, brand, category, description, name, price, product_type, website_link} = props.product;
//     const fallbackImage = defaultImage;

//     return (
//         <div className='product'>

//     <img src={image_link} onError={(e) => { e.target.onerror = null; e.target.src = fallbackImage; }}></img>
//         </div>
//     );
// };

const Product = (props) => {
    const { image_link, brand, category, description, name, price, website_link } = props.product;
    const [displayProduct, setDisplayProduct] = useState(true);

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
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};


export default Product;