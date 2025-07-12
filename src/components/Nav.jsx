import React from 'react'
import Button from './Button';

function Nav() {
    const id=1;
return (
    <div className='max-w-screen-lg mx-auto py-5 flex items-center justify-between border-b-[1px] border-zinc-700'>
        <div className='n-left flex items-center'>
            <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
            <div className='links flex gap-14 ml-25'>
                {["Home","Work","Culture", "", "News"].map((i, index)=>{
                    return i.length ==0 ?<span key={index} className='w-0.5 h-6 bg-zinc-600'></span>:<a key={index} href='#' className='text-md flex items-center gap-1'>
                        {index === id ?(<span style={{boxShadow:"0 0 0.45em #00FF19"}} className='inline-block w-1.5 h-1.5 bg-green-400 rounded-full'></span>): <></>}
                        {i}
                    </a>
                }
                )}
            </div>
        </div>
        <Button/>
    </div>
)
}

export default Nav