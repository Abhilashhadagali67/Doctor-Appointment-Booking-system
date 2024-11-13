import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img className="w-full max-w-[360px] " src={assets.contact_image} alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">Our OFFICE</p>
          <p className="text-gray-500">27/11 Anjeneya Badavane 16th Cross, <br />Davangere , Karnataka
          </p>
          <p className="text-gray-500">Tel: 08375-222552 <br />Email : abhilashhadagali67@gmail.com</p>
          <p className="font-semibold text-lg text-gray-600">Careers at PRESCRIPTO</p>
          <p className="text-gray-500">Learn more about our teams and job openings.</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black transition-all duration-500 hover:text-white ">Explore Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;