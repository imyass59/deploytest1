import { Types } from "../actions/types"

const initialState = {
    products : []
} 

const AllProductReducer = (state = initialState,action) =>
{
    switch(action.type)
    {
        case Types.SET_PRODUCTS :
            return {
                ...state,
                products : action.payload
            };
        default : 
            return state;
    }
}


export default AllProductReducer;