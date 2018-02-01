const productStore = {
    products : [],
    prodCount : [],
    prodPrice : []
}

const prodStore = ( state = productStore, action) => {
    switch ( action.type ) {
        case "LOAD_FROM_BASE" :
            return {

            }
        case "ADD_PROD" :    
            return {
                ...state,
                products : [...state.products, {
                    id: action.prodId,
                    name : action.prodName,
                    pic : action.prodPic,
                    info : action.prodInfo
                }],
                prodCount : [...state.prodCount, action.prodCount],
                prodPrice : [...state.prodPrice, action.prodPrice]
            }          
        default : 
            return state    
    }
}

export default prodStore;