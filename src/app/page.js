"use client"
import { IoMdSearch } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home = () => {
  const image = [
    "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/250659/pexels-photo-250659.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/772177/pexels-photo-772177.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];
  const[imgIndex,setImageIndex]= useState(0)
  useEffect(()=>{
   const interval =  setInterval(()=>{
    setImageIndex(prev=>prev==image.length-1?0:prev+1)
    },3000)

   return ()=>clearInterval(interval)
  },[])

  const [inputs,setInputs]=useState({
    type:"buy",
    location:"kuopio",
    minPrice:0,
    maxPrice:1000000
  })
 const handelChange= (e)=>{
  setInputs((prev)=>({...prev,[e.target.name]:e.target.value}))
  
 }

 
  return (
    <div className="min-h-[calc(100vh-160px)] flex  flex-col-reverse md:mx-10 lg:ml-20 gap-4 mx-4 my-4 lg:flex-row ">
      <div className="flex-[2.5] ">
        <div className="p-2">
        <h2 className="text-xl capitalize font-semibold mb-2">
            find real estates & get your dream place find real estate & get  yor dream place
            </h2>
            <p className="">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis illo rem modi repellat hic expedita esse nulla veniam quos nesciunt.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis illo rem modi repellat hic expedita esse nulla veniam quos nesciunt.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis illo rem modi repellat hic expedita esse nulla veniam quos nesciunt.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis illo rem modi repellat hic expedita esse nulla veniam quos nesciunt.
            </p>
        </div>
        <div className="my-5">
          <div className="flex gap-1">
            <button onClick={()=>setInputs(prev=>({...prev,type:"buy"}))} className={`${inputs.type ==="buy"?"bg-black text-white":"text-black bg-white border"} text-lg p-2  rounded-sm`} >Buy</button>
            <button onClick={()=>setInputs(prev=>({...prev,type:"rent"}))} className={`${inputs.type ==="rent"?"bg-black text-white":"text-black bg-white border"} text-lg p-2  rounded-sm`}>Rent</button>
          </div>
          <div className="flex gap-1">
            <div className="flex flex-col md:flex-row w-full gap-3">
           <input type="text" onChange={handelChange} placeholder="Location" name="location" className="border outline-none md:w-[160px]  w-full p-2 rounded-sm"/>
           <input type="number" placeholder="Min Price" onChange={handelChange}  name="maxPrice" className="border outline-none  md:w-[160px] w-full p-2 rounded-sm"/>
           <input type="number" placeholder="Max price" onChange={handelChange}  name="minPrice" className="border outline-none  md:w-[160px] w-full p-2 rounded-sm"/>
           <Link href={`/listpage?location=${inputs.location}&type=${inputs.type}&minPrice=${inputs.minPrice}&maxPrice=${inputs.maxPrice} `} className="bg-yellow-500 flex items-center justify-center w-[40%] p-2 md:w-[80px] ">
           <button>
           <IoMdSearch  className="text-3xl"/>
           </button>
           </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1.5] min-h-[50vh] w-full lg:h-[100vh-150px] relative  ">
      
         <Image src={image[imgIndex]} fill className="object-cover rounded-sm  " />
      </div>
    </div>
  );
};

export default Home;
