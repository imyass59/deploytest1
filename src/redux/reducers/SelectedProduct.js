import { Types } from "../actions/types"

const initialState = {
    product : {}
} 

const SelectedProduct = (state = initialState,action) =>
{
    switch(action.type)
    {
        case Types.SELETED_PRODUCT :
            return {
                ...state,
                product : action.payload,

            };
        case Types.RMV_SELETED_PRODUCT:
            return {}
        default : 
            return state;
    }
}


export default SelectedProduct;