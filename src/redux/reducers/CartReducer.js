import { CLOSE_CART, OPEN_CART } from "../actions/actions"
import { Types } from "../actions/types";

const initialState = {
    CartIsOpen : false
}

const CartReducer = (state = initialState , action) =>
{
    switch(action.type)
    {
        case Types.OPEN_CART:
            return {
                CartIsOpen : true
            };
        case Types.CLOSE_CART:
            return {
                CartIsOpen : false
            };
        default:
            return state;
    }
}

export default CartReducer;