"use client"

import Map from '@/components/Map'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


const SinglePage = () => {
    const [singlePost,setSinglePost]=useState({
        id: 5,
        title: "Apartment 5",
        image: ["https://images.pexels.com/photos/276625/pexels-photo-276625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/276625/pexels-photo-276625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=600"],
        bedroom: 3,
        bathroom: 2,
        price: 1500,
        address: "567 Victoria Road, London",
        latitude: 53.4084,
        longitude: -2.9916,
      })
      const[imageIndex,setImageIndex]= useState(0)
  return (
    <div className='md:mx-10 lg:mx-24 gap-4 mx-4 mt-4 flex flex-col lg:flex-row -z-50  top-20   ' >
        <div className="flex-[2.5] w-full lg:max-h-[90vh] lg:overflow-y-scroll lg:no-scrollbar1 top-0 p-2 ">
            <div className="relative h-[40vh] ">
                <Image src={singlePost.image[imageIndex]} fill className='object-cover'/>
            </div>
            <div className="flex gap-2 flex-wrap mt-6">
               {
                singlePost.image.map((image,idx)=>(
                    <div className="relative w-[150px] h-[150px]  " onClick={()=>setImageIndex(idx)}>
                        <Image src={image} fill className='object-cover'/>
                    </div>
                ))
               }
            </div>
            <div className="my-5">
                <div className="flex justify-between">
                <p className="underline capitalize text-lg">basic home information</p>
                <button className='capitalize text-base bg-yellow-700 p-2 rounded-sm cursor-pointer  text-white'><Link href={"/chat"}>send message</Link></button>
                </div>
                <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minima officia est porro tenetur. Voluptatum, nemo. Rem, tenetur. Temporibus alias necessitatibus fugiat illo deleniti facere repellendus, numquam officia, a error cum repellat assumenda possimus consectetur provident. Perferendis inventore aliquam, itaque delectus quod est soluta voluptate impedit, placeat explicabo, molestiae iure?</p>
                <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minima officia est porro tenetur. Voluptatum, nemo. Rem, tenetur. Temporibus alias necessitatibus fugiat illo deleniti facere repellendus, numquam officia, a error cum repellat assumenda possimus consectetur provident. Perferendis inventore aliquam, itaque delectus quod est soluta voluptate impedit, placeat explicabo, molestiae iure?</p>
                <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minima officia est porro tenetur. Voluptatum, nemo. Rem, tenetur. Temporibus alias necessitatibus fugiat illo deleniti facere repellendus, numquam officia, a error cum repellat assumenda possimus consectetur provident. Perferendis inventore aliquam, itaque delectus quod est soluta voluptate impedit, placeat explicabo, molestiae iure?</p>
                <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minima officia est porro tenetur. Voluptatum, nemo. Rem, tenetur. Temporibus alias necessitatibus fugiat illo deleniti facere repellendus, numquam officia, a error cum repellat assumenda possimus consectetur provident. Perferendis inventore aliquam, itaque delectus quod est soluta voluptate impedit, placeat explicabo, molestiae iure?</p>
                <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minima officia est porro tenetur. Voluptatum, nemo. Rem, tenetur. Temporibus alias necessitatibus fugiat illo deleniti facere repellendus, numquam officia, a error cum repellat assumenda possimus consectetur provident. Perferendis inventore aliquam, itaque delectus quod est soluta voluptate impedit, placeat explicabo, molestiae iure?</p>
                <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minima officia est porro tenetur. Voluptatum, nemo. Rem, tenetur. Temporibus alias necessitatibus fugiat illo deleniti facere repellendus, numquam officia, a error cum repellat assumenda possimus consectetur provident. Perferendis inventore aliquam, itaque delectus quod est soluta voluptate impedit, placeat explicabo, molestiae iure?</p>
            </div>
        </div>
        <div className="flex-[1.5]   mb-3 lg:mb-0  h-full   ">
        < Map item={singlePost} />
        </div>
    </div>
  )
}

export default SinglePage