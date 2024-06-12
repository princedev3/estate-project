"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";


const Navbar = () => {
  const user = true;
  const [toggle, setToggle] = useState(false);
 
  return (
    <div className="shadow-sm sticky top-0 z-[999999] left-0 w-full bg-white  ">
      <div className="h-20 flex items-center justify-between md:mx-10 lg:mx-24 gap-4 mx-4 ">
        <Link href={"/"} className="flex items-center group flex-3 ">
          <Image src={"/home.svg"} width={40} height={40} className="" />
          <p className="  bg-gradient-to-r from-black to-black bg-[length:0px_3px] hover:bg-[length:100%_3px]  bg-left-bottom bg-no-repeat transition-[background-size] duration-500 text-2xl">
            <b className="font-semibold text-3xl uppercase">w</b>ales
          </p>
        </Link>
        <div className=" items-center flex-1 justify-around hidden md:flex">
          <div className="flex items-center gap-7">
            <p
              className="bg-gradient-to-r from-black to-black bg-[length:0px_3px] hover:bg-[length:100%_3px]  bg-left-bottom bg-no-repeat transition-[background-size] duration-500 text-2xl
"
            >
              Home
            </p>
            <p className="bg-gradient-to-r from-black to-black bg-[length:0px_3px] hover:bg-[length:100%_3px]  bg-left-bottom bg-no-repeat transition-[background-size] duration-500 text-2xl">
              Contact
            </p>
            <p className="bg-gradient-to-r from-black to-black bg-[length:0px_3px] hover:bg-[length:100%_3px]  bg-left-bottom bg-no-repeat transition-[background-size] duration-500 text-2xl">
              About
            </p>
          </div>
          <div className="flex items-center gap-7">
            <p className="bg-gradient-to-r from-black to-black bg-[length:0px_3px] hover:bg-[length:100%_3px]  bg-left-bottom bg-no-repeat transition-[background-size] duration-500 text-2xl capitalize">
              mr prince
            </p>
            {user ? (
              <div className="">
                <p className="bg-gradient-to-r from-black to-black bg-[length:0px_3px] hover:bg-[length:100%_3px]  bg-left-bottom bg-no-repeat transition-[background-size] duration-500 text-2xl capitalize">
                  logout
                </p>{" "}
              </div>
            ) : (
              <div className="">
                <Link
                  href={"/"}
                  className="bg-gradient-to-r from-black to-black bg-[length:0px_3px] hover:bg-[length:100%_3px]  bg-left-bottom bg-no-repeat transition-[background-size] duration-500 text-2xl capitalize"
                >
                  login
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="flex md:hidden">
          <FaBars
            className="text-3xl stroke-1  z-[99999] "
            onClick={() => setToggle(!toggle)}
          />
</div>

      
                <div className= {`${toggle?"right-0 absolute    top-20  bg-black h-[calc(100vh-80px)] w-full  flex flex-col items-center justify-center  gap-6":"-right-[100%] absolute    top-20 bg-black h-[calc(100vh-80px)] w-full  flex flex-col items-center justify-center  gap-6 "} transition-all  ease-in-out duration-600 md:hidden  `} >
              
                  <p
                    className="text-2xl text-white
      "
                  >
                    Home
                  </p>
                  <p className="text-white text-2xl">
                    Contact
                  </p>
                  <p className="text-white text-2xl">
                    About
                  </p>
                
            
                  <p className="text-white text-2xl capitalize">
                    mr prince
                  </p>
                  {user ? (
                    <div className="">
                      <p className="text-white text-2xl capitalize">
                        logout
                      </p>{" "}
                    </div>
                  ) : (
                    <div className="">
                      <Link
                        href={"/"}
                        className="text-white text-2xl capitalize"
                      >
                        login
                      </Link>
                    </div>
                  )}
                </div>
             
            
          
        
      </div>
    </div>
  );
};

export default Navbar;
