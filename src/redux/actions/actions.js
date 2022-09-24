import { Types } from "./types"

export const CLOSE_CART = () =>
{
    return {
        type : Types.CLOSE_CART,
    }
}

export const OPEN_CART = () =>
{
    return {
        type : Types.OPEN_CART
    }
}

export const SET_PRODUCTS = (items) =>
{
    return {
        type : Types.SET_PRODUCTS,
        payload : items
    }
}

export const SELETED_PRODUCT = (item) =>
{
    return {
        type : Types.SELETED_PRODUCT,
        payload : item
    }
}
export const RMV_SELETED_PRODUCT = () =>
{
    return {
        type : Types.RMV_SELETED_PRODUCT,
    }
}

export const ADD_TO_CART = (item) =>
{
    return {
        type : Types.ADD_TO_CART,
        payload : item
    }
}

export const REMOVE_FROM_CART = (id) =>
{
    return {
        type : Types.REMOVE_FROM_CART,
        payload : id
    }
}
export const REMOVE_ALL_CART = () =>
{
    return {
        type : Types.REMOVE_ALL_CART,
    }
}

export const CHANGE_COUNT_CART = () =>
{
    return {
        type : Types.CHANGE_COUNT_CART,
    }
}