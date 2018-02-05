import React from 'react';
import './ProductInfo.css';

const ProductInfo = (props) => {
    return (
        <div id = "product_info">
            Product Info
            <p> {props.prodName} </p>
            <img src="../../../src/axe.png"/> 
        </div>
    )
}

export default ProductInfo;