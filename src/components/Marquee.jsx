import { motion } from "motion/react"

function Marquee({imagesURL, direction}) {
  
  return (
    <div className='flex w-full py-8 whitespace-nowrap overflow-hidden'>
      <motion.div initial={{x: direction==="left"?"0":"-100%"}}
        animate={{x:direction==="left"?"-100%":"0"}}
        transition={{ease:"linear",duration:15, delay:0, repeat:Infinity}}
        className='flex flex-shrink-0 gap-40 py-10 pr-40'>
          {imagesURL.map((url, index)=><img className='w-5vw flex-shrink-0' key={index} src={url}></img>)}
      </motion.div>
      <motion.div initial={{x: direction==="left"?"0":"-100%"}}
        animate={{x:direction==="left"?"-100%":"0"}}
        transition={{ease:"linear",duration:15, delay:0, repeat:Infinity}}
        className='flex flex-shrink-0 gap-40 py-10 pr-40'>
          {imagesURL.map((url, index)=><img className='w-5vw flex-shrink-0' key={index} src={url}></img>)}
      </motion.div>

      
    </div>
  )
}

export default Marquee