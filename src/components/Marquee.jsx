import React from 'react'

function Marquee({imagesURL}) {
  return (
    <div className='flex w-full py-8 gap-10 whitespace-nowrap overflow-hidden'>
        {imagesURL.map((url, index)=><img className='w-5vw flex-shrink-0' key={index} src={url}></img>)}
        {imagesURL.map((url, index)=><img className='w-5vw flex-shrink-0' key={index} src={url}></img>)}
    </div>
  )
}

export default Marquee