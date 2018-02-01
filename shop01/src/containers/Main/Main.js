import React from 'react';
import './Main.css';
import products from '../../reducers/products';

import { connect } from 'react-redux';

import { addProduct } from '../../actions/AddProd';
import { bindActionCreators } from 'redux';

const ProductCard = (props) => {
    return (
        <div className = "main_product">
            {props.productId}
        </div>
    )
}

const Main = (props) => {
    let arr = [1,2,3];  
    console.log(props);  
    return (
        <div id = "main"> 
            {arr.map(item => <ProductCard productId = {props.prod.products.name} />)}
        </div>
    )
}

const MapStoreToProps = (state) => {
    return {
        prod : state.prodStore        
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        prodAdd : bindActionCreators(addProduct, dispatch)
    }
}

export default  connect(MapStoreToProps, MapDispatchToProps)(Main);