import React from 'react'
import Image from 'next/image'

const Card = ({title,level,time}) => {
  return (
    <div className=' flex flex-col w-[20%] h-[70%] bg-white justify-center items-center border-b-4 border-r-4 border-black '>
    
      <Image className="flex w-[45%]"
       src="/Pose1.svg"
       alt="Vercel Logo"
       width={30}
       height={30}/>
       <h1 className="font-semibold text-xl py-2">{title}</h1>
       <p className="font-small text-md py-2">{level}</p>
       <div className='flex flex-row w-full justify-center items-center'>
       <Image className="flex w-4 h-4"
       src="/Time.svg"
       alt="Vercel Logo"
       width={2}
       height={2}/>
       <p>{time}</p>
       </div>
       <button className="w-[20%] h-[10%] bg-red-400 text-xl text-white my-2">Start</button>
    </div>
  )
}

export default Card