import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;
    const {handleAddToCart, product} = props;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price : ${price}</p>
                <p><small>Manufacturer : {seller}</small></p>
                <p><small>Ratings : {ratings} stars</small></p>
            </div>
            <button onClick={ () => handleAddToCart(product) } className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;