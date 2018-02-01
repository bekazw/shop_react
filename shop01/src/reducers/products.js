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
        default : 
            return state    
    }
}

export default prodStore;