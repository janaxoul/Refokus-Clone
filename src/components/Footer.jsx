import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-lg mx-auto flex py-10 gap-25'>
            <div className='basis-1/2'>
                <h1 className='text-[9rem] font-semibold leading-none tracking-tight '>refokus.</h1>
            </div>
            <div className='basis-1/2 flex gap-7'>
                <div className='basis-1/3'>
                    <h4 className='mb-10'>Socials</h4>
                    {["Instagram", "Twitter (x?)", "LinkedIn"].map((elem, index)=><a className='block mt-3 text-zinc-500'>{elem}</a>)}
                </div>
                <div className='basis-1/3'>
                    <h4 className='mb-10'>Socials</h4>
                    {["Instagram", "Twitter (x?)", "LinkedIn"].map((elem, index)=><a className='block mt-3 text-zinc-500'>{elem}</a>)}
                </div>
                <div className='basis-1/2 flex flex-col items-end'>
                    <p className='text-right'>Refokus is pioneering digital agency driven by design and
              empowered by technology.</p>
                    <img className='w-32 mt-10' src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer