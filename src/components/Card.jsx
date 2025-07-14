import { motion } from "motion/react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({width, start, para, hover="false"}) {
    
  return (
    <motion.div whileHover={{backgroundColor: hover===true && "#7443ff", paddingLeft:"25px", paddingRight:"25px"}} className={`bg-zinc-800 p-5 rounded-xl ${hover} min-h-[28rem] ${width} flex flex-col justify-between`}>
        <div className='w-full'>
            <div className='w-full flex items-center justify-between items-center'>
                <h3>One Heading</h3>
                <IoIosArrowRoundForward />
            </div>
            <div>
                <h1 className='text-3xl font-medium mt-5'>Whatever Heading</h1>
            </div>
        </div>
        
        <div className='w-full'>
            {start &&(
                <>
                    <h1 className='text-6xl font-medium tracking-tight leading-none whitespace-nowrap'>Start a Project</h1>
                    <button className='mt-5 rounded-full py-2 px-5 border-[1px] border-zinc-300'>Contact</button>
                </>
            )}
            {para && (<p className='text-sm text-zinc-500 font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>)}
            
        </div>
    </motion.div>
  )
}

export default Card