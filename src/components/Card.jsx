import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({item,key}) => {
  return (
    <Link href={"/singlepage/1"} key={key} className='p-2 shadow-sm rounded-md group hover:bg-slate-50 cursor-pointer '>
        <div className="relative h-[180px]  ">
            <Image src={item.img} fill className='object-cover group-hover:scale-105  transition-all duration-300 rounded-md'/>
        </div>
        <div className="mt-3 ">
            <p className="capitalize   text-sm">{item.title} </p>
            <div className="flex  my-2">
            <p className="capitalize flex-1 text-sm">${item.price} </p>
            <p className="capitalize flex-3 text-sm">{item.address} </p>
            </div>
            <div className="flex my-2">
            <p className="capitalize flex-1">Bedroom: {item.bedroom } </p>
            <p className="capitalize flex-3">bathroom: {item.bathroom } </p>
            </div>
        </div>
    </Link>
  )
}

export default Card