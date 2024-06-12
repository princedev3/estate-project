import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center items-center w-[40%]   mx-auto mt-8 shadow-sm p-10 rounded-md'>
      <form action="" className='w-full'>
      <h2 className="text-center uppercase text-2xl mb-2">Login</h2>
        <input type="text " name='username' placeholder='username' className='outline-none border w-full  placeholder:uppercase text-gray-500 p-2 mb-8' />
        <input type="password" name='password' placeholder='password' className='outline-none border w-full  placeholder:uppercase text-gray-500 p-2 mb-8' />
        <button className='bg-blue-500 text-white text-xl capitalize px-3 py-2 mb-5 rounded-md hover:bg-blue-700'>Login</button>
        <div className="border w-[80%] mx-auto  my-8"></div>
         <p className='text-sm '>Don't have an Account ?<Link href={"/register"} className='underline text-base capitalize ml-3'>create account</Link></p>
      </form>
    </div>
  )
}

export default Login