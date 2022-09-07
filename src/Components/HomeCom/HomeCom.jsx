import React from 'react'

export default function HomeCom() {
  return (
    <React.Fragment>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <img
                className="h-96 w-96 animate-bounce transition-all"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
            />
            <h1 className='flex flex-col text-gray-800 text-6xl font-medium'>Store Redux</h1>
        </div>
    </React.Fragment>
  )
}