import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])


    useEffect(() => {
        fetch('myproduct.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const handelAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        return newCart;
    }


    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handelAddToCart={handelAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;