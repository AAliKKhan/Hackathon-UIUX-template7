
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Card from "../card";
import Link from "next/link";
interface Car {
  id: number;
  title: string;
  type: string;
  fuel: string;
  transmission: string;
  image: string;
  seats: number;
  price: string;
  description:string
}

export default function Hero() {
  const [cars, setCars] = useState<Car[]>([]);

  // Fetch data from CarData.json
  useEffect(() => {
    fetch("/CarData.json")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error loading car data:", error));
  }, []);

  // Get the first four cars for Popular section
  const popularCars = cars.slice(0, 4);

  // Get all eight cars for Recommended section
  const recommendedCars = cars.slice(0, 8);

  return (
    <div className="wrapper mt-[32px]">
      {/* Hero Images */}
      <div className="flex justify-evenly">
        <div>
          <Image src="/HeroImage1.png" alt="logo" width={540} height={340} />
        </div>
        <div>
          <Image src="/HeroImage2.png" alt="logo" width={540} height={340} />
        </div>
      </div>
            {/* Cards and Switch Button */}
            <div className="flex justify-center items-center space-x-6 mx-auto mt-8">
        {/* First Card (Pick-Up) */}
        <div className="bg-bg1 p-6 rounded-xl shadow-lg space-y-6 w-[520px] h-[132px]">
          {/* Header Section */}
          <div className="flex items-center space-x-2">
            <Image src="/mark.png" alt="point" width={16} height={16} />
            <h1 className="text-xl font-semibold">Pick-Up</h1>
          </div>

          {/* Details Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div>
                <h1 className="font-medium">Location</h1>
                <p className="text-gray-500">Select Country</p>
              </div>
              <div className="bg-gray-950 h-[48px] w-[1px]"></div>
              <div>
                <h1 className="font-medium">Date</h1>
                <p className="text-gray-500">Select Date</p>
              </div>
              <div className="bg-gray-950 h-[48px] w-[1px]"></div>
              <div>
                <h1 className="font-medium">Time</h1>
                <p className="text-gray-500">Select time</p>
              </div>
            </div>
          </div>
        </div>

        {/* Switch Button */}
        <div className="flex items-center justify-center ">
          <button>
            <Image src="/Switch.png" alt="Switch" width={60} height={60} />
          </button>
        </div>

        {/* Second Card (Drop-Off) */}
        <div className="bg-bg1 p-6 rounded-xl shadow-lg space-y-6 w-[520px] h-[132px]">
          {/* Header Section */}
          <div className="flex items-center space-x-2">
            <Image src="/mark.png" alt="point" width={16} height={16} />
            <h1 className="text-xl font-semibold">Drop-Off</h1>
          </div>

          {/* Details Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div>
                <h1 className="font-medium">Location</h1>
                <p className="text-gray-500">Select Country</p>
              </div>
              <div className="bg-gray-950 h-[48px] w-[1px]"></div>
              <div>
                <h1 className="font-medium">Date</h1>
                <p className="text-gray-500">Select Date</p>
              </div>
              <div className="bg-gray-950 h-[48px] w-[1px]"></div>
              <div>
                <h1 className="font-medium">Time</h1>
                <p className="text-gray-500">Select time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Popular Cars Section */}
      <div className="flex justify-between ml-[65px] mr-[65px] mt-[20px]">
        <p>Popular Cars</p>
        <h1>View All</h1>
      </div>
      <div className="grid grid-cols-4 gap- ml-[65px] mr-[65px] mt-[20px]">
        {popularCars.map((car) => (
          <Card key={car.id} {...car} />
        ))}
      </div>

      {/* Recommended Cars Section */}
      <div className="flex justify-between ml-[65px] mr-[65px] mt-[20px]">
        <p>Recommended Cars</p>
        <h1>View All</h1>
      </div>
      <div className="grid grid-cols-4 gap-6 ml-[65px] mr-[65px] mt-[20px]">
        {recommendedCars.map((car) => (
          <Card key={car.id} {...car} />
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-[30px]">
        <Link href="/ShowMore"><button className="bg-button1 w-[156px] h-[44px] mt-[50px] text-white border rounded-md">View More Cars</button></Link>
      </div>
    </div>
  );
}




