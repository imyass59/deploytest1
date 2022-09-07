import {Fragment, React} from 'react'
import {Transition } from '@headlessui/react'
import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import RingCartCom from './RingCartCom';
import CartCom from '../CartCom/CartCom';


export default function NavBarCom() {
    const [isOpen, setIsOpen] = useState(false);
    const [isToggle, setIsToggle] = useState(false);
    const ActiveNavLink = 'text-gray-300 px-3 py-2 rounded-md text-sm font-medium bg-gray-700 text-white';
    const NotActiveNavLink = 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium';
    function HandleToggle()
    {
      !isToggle ? setIsToggle(false) : setIsToggle(true)
    }
    return (
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0">
                 <a href='/'>
                  <img
                      className="h-8 w-8"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    />
                 </a>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4 space-x-reverse">
                  <ul className='flex justify-center gap-5'>
                    <NavLink className={({ isActive }) => isActive ? ActiveNavLink : NotActiveNavLink} to=""><li>Home</li></NavLink>
                    <NavLink className={({ isActive }) => isActive ? ActiveNavLink : NotActiveNavLink} to="products"><li>Products</li></NavLink>
                  </ul>
                  </div>
                </div>
              </div>
              <div className='flex flex-row justify-center items-center gap-5'>
                <div className="flex flex-cols justify-center items-center text-white text-sm font-medium">
                  <div className="ml-10 flex items-baseline space-x-4 space-x-reverse">
                    <button className="text-2xl relative" onClick={HandleToggle}>
                        <RingCartCom />
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                    </button>
                  </div>
                      <CartCom toggle={isToggle} />
                </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
              </div>
            </div>
          </div>
  
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="md:hidden" id="mobile-menu">
                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <ul className='flex justify-center flex-col gap-2'>
                    <NavLink className={({ isActive }) => isActive ? ActiveNavLink : NotActiveNavLink} to=""><li>Home</li></NavLink>
                    <NavLink className={({ isActive }) => isActive ? ActiveNavLink : NotActiveNavLink} to="products"><li>Products</li></NavLink>
                  </ul>
                </div>
              </div>
            )}
          </Transition>
        </nav>
  )
}
