const state0 = {
    currentBasketId : -1,
    productsToBuy : [] ,
    productsCount : []
}

const Basket = (state = state0, action) => {
    switch ( action.type ) {
        case "ADD_PRODUCT" :
            return {
                ...state,
                    currentBasketId : action.basketId,
                    productsToBuy : [ ...state.productsToBuy, action.prodId ],
                    productsCount : [ ...state.productsCount, action.prodCount ]
                    }
        case "CREATE_BASKET" :
            return {
                ...state,
                currentBasketId : action.basketId
            }
        default :
            return state        
    }    
}

export default Basket;