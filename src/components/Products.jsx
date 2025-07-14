import { motion } from 'motion/react';
import { useState } from 'react';
import Product from './Product';

function Products() {
    var products=[
        {
            title: "Arqitel",
            description:
                "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            live: true,
            case: false,
        },
        {
            title: "TTR",
            description:
                "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
            live: true,
            case: false,
        },
        {
            title: "YIR 2022",
            description:
                "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
            live: true,
            case: false,
        },
        {
            title: "Yahoo!",
            description:
                "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
            live: true,
            case: true,
        },
        {
            title: "Rainfall",
            description:
                "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
            live: true,
            case: true,
        },
    ]
    const [position, setposition] = useState(0);
    const mover=(val)=>{
        setposition(val*300);
        console.log(val*23)
    }
return (
    <div className='mt-20 relative'>
        {products.map((elem, index)=><Product key={index} val={elem} mover={mover} index={index}/>)}
        <div className='absolute top-0 w-full h-full pointer-events-none'>
            <motion.div
                initial={{y: position, x:"-50%"}}
                animate={{y: position +`px`}}
                transition={{ease:[0.45, 0, 0.55, 1],duration:.5}}
                className='window absolute w-[25rem] h-[300px] left-[43%] bg-white overflow-hidden'>
                <motion.div animate={{y:-position+`px`}} transition={{ease:[0.45, 0, 0.55, 1],duration:.6}} className='w-full h-full bg-sky-300 '></motion.div>
                <motion.div animate={{y:-position+`px`}} transition={{ease:[0.45, 0, 0.55, 1],duration:.6}} className='w-full h-full bg-green-700 '></motion.div>
                <motion.div animate={{y:-position+`px`}} transition={{ease:[0.45, 0, 0.55, 1],duration:.6}} className='w-full h-full bg-red-400 '></motion.div>
                <motion.div animate={{y:-position+`px`}} transition={{ease:[0.45, 0, 0.55, 1],duration:.6}} className='w-full h-full bg-violet-500 '></motion.div>
                <motion.div animate={{y:-position+`px`}} transition={{ease:[0.45, 0, 0.55, 1],duration:.6}} className='w-full h-full bg-orange-600 '></motion.div>
            </motion.div>
        </div>
    </div>
)
}

export default Products