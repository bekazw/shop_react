import React from 'react';
import './Main.css';

const ProductCard = (props) => {
    return (
        <div className = "main_product">
            {props.productId}
        </div>
    )
}

const Main = (props) => {
    let arr = [1,2,3];
    return (
        <div id = "main"> 
            {arr.map(item => <ProductCard productId = {item} />)}
        </div>
    )
}

export default Main;