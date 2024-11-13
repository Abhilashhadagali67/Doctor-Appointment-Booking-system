import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* Left Scetion */}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full text-xs md:w-2/3 text-gray-600 leading-6'>"Prescripto" is a comprehensive healthcare platform designed to connect patients with top doctors and manage prescriptions seamlessly. With Prescripto, users can schedule appointments, receive digital prescriptions, and access personalized health insights all in one place..</p>
        </div>

        {/* Mid Scetion */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li className='cursor-pointer hover:text-primary' onClick={()=>{navigate('/'); scrollTo(0,0)}} >Home</li>
                <li className='cursor-pointer hover:text-primary' onClick={()=>{navigate('/about'); scrollTo(0,0)}} >About us</li>
                <li className='cursor-pointer hover:text-primary' onClick={()=>{navigate('contact'); scrollTo(0,0)} }>Contact us</li>
                <li className='cursor-pointer hover:text-primary' onClick={()=>{navigate('/doctors'); scrollTo(0,0)} }>Privacy policy</li>
            </ul>
        </div>

        {/* Right Scetion */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+1-212-456-7890</li>
                <li>abhilashhadagali67@gmail.com</li>
            </ul>
        </div>
      </div>
      <div>
        {/* Copyright Section */}
        <hr />
        <p className='py-5 text-sm text-center'>Copyright © 2024 GreatStack - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
