import React from 'react'
import Button from './Button'

function Product({val}) {
  return (
    <div className='w-full py-20 text-white'>
        <div className='max-w-screen px-[10%] mx-auto flex items-center justify-between hover:bg-violet-500'>
            <h1 className='text-6xl'>{val.title}</h1>
            <div className='dets w-1/3'>
                <p className='mb-7'>{val.description}</p>
                <div className='flex items-center justify gap-5'>
                    {val.live && <Button/>}
                    {val.case && <Button val={"Case Study"}/>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product