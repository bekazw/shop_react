const productStore = {
    products : [],
    prodCount : []   
}

productStore.products[0] = {id: 111, name: "axe", pic: "axe.png", info: "asdasd", price : 1000};
productStore.products[1] = {id: 222, name: "axe2", pic: "axe2.png", info: "asdasd", price : 2000};
productStore.products[2] = {id: 333, name: "axe3", pic: "axe2.png", info: "asdasd", price : 2000};
productStore.products[3] = {id: 444, name: "axe4", pic: "axe2.png", info: "asdasd", price : 2000};
productStore.products[4] = {id: 555, name: "axe5", pic: "axe2.png", info: "asdasd", price : 2000};
productStore.products[5] = {id: 666, name: "axe6", pic: "axe2.png", info: "asdasd", price : 2000};
productStore.products[6] = {id: 777, name: "axe7", pic: "axe2.png", info: "asdasd", price : 2000};
productStore.products[7] = {id: 888, name: "axe8", pic: "axe2.png", info: "asdasd", price : 2000};

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
                    info : action.prodInfo,
                    price : action.prodPrice
                }],
                prodCount : [...state.prodCount, action.prodCount]               
            }          
        default : 
            return state    
    }
}

export default prodStore;