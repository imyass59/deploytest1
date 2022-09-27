import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CHANGE_COUNT_CART } from '../../redux/actions/actions';

export default function CartCount() {
    //const CartItems = useSelector(state => state.CartItemsReducer.CartItems);
    const CountCart = useSelector(state => state.CartItemsReducer.CountItems);
    const dispatch = useDispatch();
    /*const Count = () =>
    {
        if(CartItems.length>=10) return "+10"
        else return CartItems.length
    }*/
  return (
    <>
        <span className='flex justify-center items-center absolute top-0 right-0'>
                <span className='w-5 h-5 bg-indigo-400 rounded-full absolute text-xs flex justify-center items-center font-bold'>
                    {CountCart}
                </span>
        </span>
    </>
  )
}
