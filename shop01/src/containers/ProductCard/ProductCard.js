import React from 'react';

const ProductCard = (props) => {
    return (
        <div className = "main_product">
            <p>{props.prodName}</p>
            <p>{props.prodPic}</p>
            <p>{props.prodInfo}</p>
            <p>{props.prodPrice}</p>
            <button> Order! </button>
        </div>
    )
}

export default ProductCard;