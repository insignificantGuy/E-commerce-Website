
import ShopActionTypes from "./shop.types";

const INITAL_STATE = {
    collections:null,
    isfetching: false,
    errorMessage: undefined
};

const shopReducer = (state=INITAL_STATE, action) => {
    switch(action.type){
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return{
                ...state,
                isfetching:true,
            }
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isfetching:false,
                collections: action.payload,
            };
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return{
                ...state,
                isfetching:false,
                errorMessage: action.payload
            }          
        default: 
        return state;
    }
}

export default shopReducer;