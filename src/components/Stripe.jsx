import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[16.66%] px-5 py-3 border-b-1 border-t-1 border-r-1 border-l-1 border-zinc-700 flex items-center justify-between'>
        <img className='w-[55%]' src={val.url} alt="" />
        <span className='font-semibold text-md'>{val.number}</span>
    </div>
  )
}

export default Stripe