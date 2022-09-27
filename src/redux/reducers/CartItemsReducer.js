import { Types } from "../actions/types"

const local = JSON.parse(window.localStorage.getItem("Cart-items"));
const foundData = (local)?local:[];

const initialState = {
    CartItems : foundData,
    CountItems : 0
}
const CartItemsReducer = (state = initialState,action) =>
{
    switch(action.type)
    {
        case Types.ADD_TO_CART:
            //const exist = state.CartItems.find((x)=> x.product.id === action.payload.product.id);
            const exist = state.CartItems.findIndex((item) => item.product.id === action.payload.product.id);
            if(exist>=0){
                //state.CartItems.map((item)=> item.product.id === action.payload.product.id ? {...item,qty : item.qty + action.payload.qty}: item);
                //state.CartItems.map((item)=> item.product.id === action.payload.product.id ? {...item,qty : item.qty + action.payload.qty} : item);
                state.CartItems[exist].qty += action.payload.qty;
                window.localStorage.setItem("Cart-items",JSON.stringify(state.CartItems));
            }
            else{
                state.CartItems.push(action.payload);
                window.localStorage.setItem("Cart-items",JSON.stringify(state.CartItems));
            }
            return {
                ...state
            }
        case Types.REMOVE_FROM_CART:
            const newCart = state.CartItems.filter((item) => item.product.id !== action.payload);
            state.CartItems = newCart;
            window.localStorage.setItem("Cart-items",JSON.stringify(state.CartItems));
            return {
                ...state
            }
        case Types.CHANGE_COUNT_CART :
            var count = 0;
            if(state.CartItems)state.CartItems.map((item)=>
            {
                count +=item.qty;
            });
            return {
                ...state,
                CountItems : count
            }
        case Types.REMOVE_ALL_CART:
            window.localStorage.removeItem("Cart-items");
            return {
                ...state,
                CartItems : []
            }
        case Types.CHANGE_QTY_ITEM:
            const item = state.CartItems.findIndex((item) => item.product.id === action.payload.id);
            if(item>=0){state.CartItems[exist].qty += action.payload.qty;}
            window.localStorage.setItem("Cart-items",JSON.stringify(state.CartItems));
            return {
                ...state
            }
        default:
            return state;
    }
}

export default CartItemsReducer;