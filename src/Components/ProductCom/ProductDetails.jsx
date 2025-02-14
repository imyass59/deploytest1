import {React,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, CHANGE_COUNT_CART } from '../../redux/actions/actions';
import PaypaleCheckOutButton from '../PaymentIntegration/PaypaleCheckOutButton';

export default function ProductDetails(props) {
    const [count, setCount] = useState(1);
    const item  = useSelector(state => state.SelectedProduct.product);
    const dispatch = useDispatch();
    const details = props.details;
    const Check = () => {
        if(count<=1) return;
        else setCount(count-1)
    };

    const product = {
        product : item,
        qty : count
    }
    const HandleAddToCart = () =>
    {
        const itemSelect = {
            product : item,
            qty : count
        }
        dispatch(ADD_TO_CART(itemSelect));
        dispatch(CHANGE_COUNT_CART());
    }
  return (
        <div data-id={`${details.id}`}>
            <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap ">
                <img alt="ecommerce" className="lg:w-1/2 md:w-1/2 w-3/2 h-3/2 object-cover object-center rounded border border-gray-200 " src={details.thumbnail} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">{details.category}</h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{details.title}</h1>
                <div className="flex mb-4">
                <span className="flex items-center">
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-gray-900" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-gray-900" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-gray-900" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-gray-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-gray-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                    <a className="text-gray-500"  href='#'>
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                    </a>
                    <a className="ml-2 text-gray-500" href='#'>
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                    </a>
                    <a className="ml-2 text-gray-500"  href='#'>
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    </a>
                </span>
                </div>
                <p className="leading-relaxed">{details.description}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex justify-center items-center">
                    <span className="mr-3">Quantity</span>
                    {/*
                    <span className='flex flex-row gap-5 justify-center items-center'>
                        <button className='flex justify-center items-center w-8 h-8 rounded-full bg-indigo-700 text-1xl text-gray-100' onClick={()=> Check()}>-</button>
                        <span className="text-2xl">{count}</span>
                        <button className='flex justify-center items-center w-8 h-8 rounded-full bg-indigo-700 text-1xl text-gray-100' onClick={()=> setCount(count+1)}>+</button>
                    </span>*/}
                    {
                    <span className='flex flex-row gap-5 justify-center items-center'>
                        <div className="flex flex-row h-10 w-24 rounded-lg relative bg-transparent mt-1">
                            <button data-action="decrement" className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none" onClick={()=> Check()}>
                                <span className="m-auto text-2xl font-thin">−</span>
                            </button>
                            <span type="number" className="focus:outline-none flex items-center justify-center text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default text-gray-700  outline-none" name="custom-input-number">{count}</span>
                            <button data-action="increment" className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer" onClick={()=> setCount(count+1)}>
                                <span className="m-auto text-2xl font-thin">+</span>
                            </button>
                        </div>
                    </span>
                    }
                </div>
                </div>
                <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">${details.price}</span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={() =>HandleAddToCart()}>Add To Cart</button>
                {
                    /*
                    <button className={`rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center ml-4`} onClick={()=>Likedtoggle()}>
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                    </button> 
                    */
                }
                </div>
                <div className="w-full mt-5 z-0 relative">
                    <PaypaleCheckOutButton product={product} className="absolute top-0 left-0"/>
                </div>
            </div>
            </div>
        </div>
        </section>
        </div>
  )
}
