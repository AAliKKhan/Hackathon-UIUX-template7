
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="wrapper w-[1440px] h-[480px]">
      {/* Main Content */}
      <div className="flex w-[1440px] h-[370px]">
        {/* "MORENT" Section */}
        <div className="h-[120px] w-auto mt-[80px] ml-[60px]">
        <Image 
          src="/Logo.png" 
          alt="logo" 
          width={148} 
          height={44} 
        />
          <div className=" w-[250px] mt-[30px]">
            <p className="text-xs mt-2">Our vision is to provide convenience</p>
            <p className="text-xs">and help increase your sales business.</p>
          </div>
        </div>

        {/* 3 Divs Right of "MORENT" */}
        <div className="h-[250px] w-auto mt-[80px] ml-[504px] flex gap-[18px]">
          {/* First Div */}
          <div className="w-auto h-[244px]">
            <h1 className="text-xl">About</h1>
            <p className="mt-[20px] text-gray-500">How it works</p>
            <p className="mt-[20px] text-gray-500">Featured</p>
            <p className="mt-[20px] text-gray-500">Partnership</p>
            <p className="mt-[20px] text-gray-500">Business Relation</p>
          </div>
          {/* Second Div */}
          <div className="w-[152px] h-[244px]">
            <h1 className="text-xl">Community</h1>
            <p className="mt-[20px] text-gray-500">Events</p>
            <p className="mt-[20px] text-gray-500">Blog</p>
            <p className="mt-[20px] text-gray-500">Podcast</p>
            <p className="mt-[20px] text-gray-500">Invite a friend</p>
          </div>
          {/* Third Div */}
          <div className="w-[152px] h-[244px]">
            <h1 className="text-xl">Socials</h1>
            <p className="mt-[20px] text-gray-500">Discord</p>
            <p className="mt-[20px] text-gray-500">Instagram</p>
            <p className="mt-[20px] text-gray-500">Twitter</p>
            <p className="mt-[20px] text-gray-500">Facebook</p>
          </div>
        </div>
      </div>
      <div className=" h-[5px]">
      <hr className="ml-[55px] w-[1220px] border-1 border-gray-200"></hr>
      </div>
      <div className=" flex ">
       
        <div className="mt-[30px] h-[60px] w-[250px] ">
          <p className="text-sm font-bold ml-[55px]">
            © 2022MORENT. All rights reserved.
          </p>
        </div>
          <div className="justify-end ml-[800px] h-[60px] w-[240px] mt-[30px]">
          <p className="text-sm font-bold ">
           Privacy & Policy | Terms & Conditions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;