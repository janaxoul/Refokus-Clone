import { IoIosReturnRight } from "react-icons/io";

function Button({val ="Get Started"}) {
  return (
    <div className='min-w-40 max-w-41 px-3 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-evenly'>
        <span className='text-sm font-small'>{val}</span>
        <IoIosReturnRight />
    </div>
  )
}

export default Button