import {React,Fragment} from 'react'
import { useDispatch } from 'react-redux';
import { REMOVE_FROM_CART } from '../../redux/actions/actions';

export default function ProductItem(props) {
    const product = props.product;
    const dispatch = useDispatch();
    const RemoveItem = () =>{
      dispatch(REMOVE_FROM_CART(parseInt(product.product.id)))
    }
  return (
    <Fragment>
        <li className="flex py-6 flex-col gap-2">
                    <div className="flex flex-row">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={product.product.thumbnail}
                        alt={product.product.title}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href={product.product.href}> {product.product.title} </a>
                          </h3>
                          <p className="ml-4">${product.product.price}</p>
                        </div>
                        <p className="text-sm text-gray-500">{product.product.category}</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">Qty {product.qty}</p>
                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => RemoveItem()}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                    </div>
                     {/*
                    <span className='flex flex-row w-full gap-2'>
                            <div className="flex flex-row w-full rounded-lg bg-transparent">
                                <button data-action="decrement" className="bg-gray-300 w-full flex justify-center items-center text-gray-600 hover:text-gray-700 hover:bg-gray-400 rounded-l cursor-pointer outline-none" onClick={()=> Check()}>
                                    <span className="text-2xl font-thin text-center flex items-center justify-center">−</span>
                                </button>
                                <input type="number" className="focus:outline-none text-center bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value={`${count}`}></input>
                                <button data-action="increment" className="bg-gray-300 text-center w-full flex justify-center items-center  text-gray-600 hover:text-gray-700  rounded-r cursor-pointer" onClick={()=> setCount(count+1)}>
                                    <span className=" text-2xl font-thin flex items-center justify-center">+</span>
                                </button>
                            </div>
                            <button data-action="add" className="text-gray-100 text-center w-24 flex justify-center items-center  bg-indigo-500  hover:bg-indigo-700  rounded-r cursor-pointer" onClick={()=>AddCount()}>
                                    <span className=" text-2xl flex items-center justify-center">Add</span>
                            </button>
                        </span>*/}
            </li>
    </Fragment>
  )
}
