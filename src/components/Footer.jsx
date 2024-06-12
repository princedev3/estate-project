import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {

  return (
    <div className='h-20 ' >
        <div className="flex flex-col  md:flex-row md:items-center md:justify-between md:mx-10 lg:mx-24 gap-4 mx-4 lg:mt-8">
        <Link href={"/"} className="flex items-center group flex-3 ">
          <Image src={"/home.svg"} width={40} height={40} className="" />
          <p className="   text-2xl">
            <b className="font-semibold text-3xl uppercase">w</b>ales
          </p>
        </Link>
        <div className="flex gap-7 capitalize">
            <p className="text-xl">Home</p>
            <p className="text-xl">contact</p>
            <p className="text-xl">about</p>
        </div>
        </div>
        <div className="flex md:mx-10 lg:mx-24 gap-4 mx-4 my-3 items-center ">
            <p>&copy;</p> work produced with <span className="text-2xl text-red-600"> &#10084;</span>
        </div>
    </div>
  )
}

export default Footer