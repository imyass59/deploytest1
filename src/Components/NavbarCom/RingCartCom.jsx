import React from 'react'

export default function RingCartCom() {
  return (
    <React.Fragment>
            <span className='flex justify-center items-center absolute top-0 right-0 -mt-2 -mr-5 px-4 py-1'>
                <span className='w-3 h-3 bg-indigo-400 rounded-full animate-ping absolute'>
                </span>
                <span className='w-3 h-3 relative bg-indigo-400 rounded-full'>
                </span>
            </span>
    </React.Fragment>
  )
}
