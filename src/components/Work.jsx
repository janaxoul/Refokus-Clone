
import { motion, useMotionValueEvent, useScroll } from "motion/react"
import { useState } from "react";

function Work() {
    const [images, setImages] = useState([
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
            top:"50%", left:"50%", isActive:false},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
            top:"54%", left:"44%", isActive:false},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
            top:"45%", left:"56%", isActive:false},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
            top:"60%", left:"53%", isActive:false},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
            top:"43%", left:"50%", isActive:false},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
            top:"65%", left:"55%", isActive:false}
        ]);
    

    const {scrollYProgress}= useScroll();
    useMotionValueEvent(scrollYProgress, "change", (data) => {
        function imagesShow(arr){
            setImages(prev=>(
                prev.map((items, index)=>(
                    arr.indexOf(index)=== -1?{...items, isActive:false}:{...items, isActive:true}
                ))
            ))
        }
        switch(Math.floor(data*100)){
            case 0:
                imagesShow([])
            break
            case 1:
                imagesShow([0])
            break
            case 2:
                imagesShow([0,1])
            break
            case 3:
                imagesShow([0,1,2])
            break
            case 4:
                imagesShow([0,1,2,3])
            break
            case 6:
                imagesShow([0,1,2,3,4])
            break
            case 8:
                imagesShow([0,1,2,3,4,5])
            break
        }
    }) 
return (
    <div className="w-full">
        <div className=' relative max-w-screen-lg mx-auto text-center p-1'>
            <h1 className='text-[35vw] leading-none font-medium select-none tracking-tight'>work</h1>
            <div className=" absolute top-0 w-full h-full">
                {images.map((elem, index)=>(elem.isActive && (<img key={index} className="w-[20%] rounded-md absolute -translate-x-[50%] -translate-y-[50%]" style={{top: elem.top, left:elem.left}} src={elem.url}></img>)))}
            </div>
        </div>
    </div>
)
}

export default Work