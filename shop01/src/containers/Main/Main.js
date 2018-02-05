import React from 'react';
import './Main.css';
import products from '../../reducers/products';

import { connect } from 'react-redux';

import { addProduct } from '../../actions/AddProd';
import { bindActionCreators } from 'redux';

import ProductCard from '../ProductCard/ProductCard';

const Main = (props) => {  

    let arr = [];
    props.prods.forEach(element => {
        arr.push(
            <ProductCard 
                prodName = {element.name}
                prodPic  = {element.pic}
                prodInfo = {element.info}
                prodPrice = {element.price} />    
        )
    })

    console.log (arr);

    return (
        <div id = "main"> 
            {arr}        
        </div>
    )
}

const MapStoreToProps = (state) => {
    return {
       prods : state.prodStore.products      
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default  connect(MapStoreToProps, MapDispatchToProps)(Main);