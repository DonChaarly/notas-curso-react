import React from 'react'

export const PruebaTailwind = () => {
  return (
    <>
    <div className="grid grid-cols-7 md:grid-cols-8 grid-rows-3 gap-1 auto-rows-auto relative">
        <div className="bg-rose-600 row-start-1 row-end-4 col-start-1 col-end-8 h-96">dfd</div>
        <div className="bg-rose-600 col-start-1 col-end-8 h-32">dfd</div>
        <div className="bg-rose-600 col-start-1 col-end-8 h-32">dfd</div>
        <div className="bg-rose-600 col-start-1 col-end-8 h-32">dfd</div>
        <div className="bg-rose-600 col-start-1 col-end-8 h-32">dfd</div>
        <div className="bg-rose-600 col-start-1 col-end-8 h-32">dfd</div>
    </div>
    <div className='absolute top-16 right-9'>
        <div className=" bg-red-800 h-fit w-2/12 -right-80 md:right-2
                fixed top-16
                flex flex-col justify-evenly">
            <div className='bg-green-400'>a</div>
            <div className='bg-green-400'>d</div>
            <div className='bg-green-400'>d</div>
        </div>
    </div>
    
    </>
    
  )
}
