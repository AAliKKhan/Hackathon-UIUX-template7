
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // For dynamic route parameters
import Image from "next/image";
import HeartButton from "@/app/components/heart";
import Rentnow from "@/app/components/rentBtn";


interface Car {
  id: number;
  title: string;
  type: string;
  fuel: string;
  transmission: string;
  image: string;
  seats: number;
  price: string;
  description: string;
}

const CarDetails = () => {
  const { id } = useParams(); // Dynamic ID from the URL
  const [car, setCar] = useState<Car | null>(null);

  // Fetch car data based on dynamic ID
  useEffect(() => {
    if (id) {
      fetch("/CarData.json")
        .then((response) => response.json())
        .then((data) => {
          const carData = data.find(
            (car: Car) => car.id === parseInt(id as string)
          );
          setCar(carData);
        })
        .catch((error) => console.error("Error fetching car data:", error));
    }
  }, [id]);

  if (!car) return <p>Loading car details...</p>;

  return (
    <div className="grid grid-rows-10 grid-cols-10 wrapper gap-0"> {/* Remove gap between grid items */}
      <div className="row-span-5 col-start-1 col-end-3 bg-slate- w-[360px] h-[2016px]">
        <div className="w-[330px] h-[2016px] bg-bg2 p-6">
          {/* Type Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-black mb-4">Type</h2>
            <div className="space-y-2">
              <label className="flex items-center text-Black">
                <input type="checkbox" className="mr-2" /> Sport
              </label>
              <label className="flex items-center text-">
                <input type="checkbox" className="mr-2" /> Sedan
              </label>
              <label className="flex items-center text">
                <input type="checkbox" className="mr-2" /> SUV
              </label>
              <label className="flex items-center text-">
                <input type="checkbox" className="mr-2" /> Coupe
              </label>
              <label className="flex items-center text-">
                <input type="checkbox" className="mr-2" /> Hatchback
              </label>
            </div>
          </div>

          {/* Capacities Section */}
          <div>
            <h2 className="text-xl font-semibold text- mb-4">Capacities</h2>
            <div className="space-y-2">
              <label className="flex items-center text-">
                <input type="checkbox" className="mr-2" /> 2 person
              </label>
              <label className="flex items-center text-">
                <input type="checkbox" className="mr-2" /> 4 person
              </label>
            </div>
          </div>

          {/* Price Slider Section */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text- mb-4">Price</h2>
            <div>
              <input
                type="range"
                min="100"
                max="1000"
                value="500"
                className="w-full"
                disabled
              />
              <div className="flex justify-between text- mt-2">
                <span>$100</span>
                <span>$1000</span>
              </div>
            </div>
            <div className="mt-2">
              <h3 className="text-lg text-">Selected Price: $500</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="row-start-1 row-end-1 col-start-4 col-end-7 w-[492px] h-[360px]">
        <div className="bg-[url('/blue.png')] bg-cover bg-center w-[492px] h-[360px] flex flex-col border rounded-md items-start justify-center p-6">
          <h1 className="text-2xl font-semibold mb-2 text-left">Welcome to Our Site!</h1>
          <p className="text-sm mb-4 text-left">
            Discover the best cars available for rent, with a variety of options tailored to your needs.
          </p>
          <div className="w-full flex justify-center items-center">
            <Image src={car.image} alt="Car view" width={380} height={120} />
          </div>
        </div>
      </div>

      <div className="row-start-2 row-end-2 col-start-4 col-end-7 w-[492px] h-[124px]">
        <div className="w-[492px] h-[124px] flex justify-between">
          <div style={{ backgroundImage: "url(/blue.png)" }} className="flex items-center border rounded-md">
            <Image src={car.image} alt="Car view" width={148} height={124} />
          </div>
          <div>
            <Image
              src="/interior1.png"
              alt="Interior 1"
              width={148}
              height={124}
              className="border rounded-md"
            />
          </div>
          <div className="border rounded-md">
            <Image
              src="/interior2.png"
              alt="Interior 2"
              width={148}
              height={124}
            />
          </div>
        </div>
      </div>

      <div className="row-start-1 row-end-3 col-start-8 col-end-10 bg w-[492px] h-[508px]  ">
        <div className="w-[492px] h-[508px] flex flex-col justify-between p-6 mr-[60px]">
          <div className="relative flex flex-col gap-4">
            {/* Title and Reviews */}
            <div className="flex justify-between">
              <div>
                <h1 className="text-lg font-semibold mb-2">{car.title}</h1>
                <Image
                  src="/reviews.png"
                  alt="review"
                  width={220}
                  height={24}
                />
              </div>
              <div className="absolute top-0 right-0 p-2">
                <HeartButton />
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-sm text-gray-700">{car.description}</p>
            </div>

            {/* Specifications */}
            <div className="flex justify-between text-sm mt-4">
              <div className="flex items-center">
                <h1 className="text-base font-medium mr-2">Car Type</h1>
                <p className="text-gray-600">{car.type}</p>
              </div>
              <div className="flex items-center">
                <h1 className="text-base font-medium mr-2">Capacity</h1>
                <p className="text-gray-600">{car.seats} person</p>
              </div>
            </div>

            <div className="flex justify-between text-sm mt-2">
              <div className="flex items-center">
                <h1 className="text-base font-medium mr-2">Steering</h1>
                <p className="text-gray-600">{car.transmission}</p>
              </div>
              <div className="flex items-center">
                <h1 className="text-base font-medium mr-2">Gasoline</h1>
                <p className="text-gray-600">{car.fuel}</p>
              </div>
            </div>

            {/* Price and Rent Now Button */}
            <div className="flex justify-between items-center mt-6">
              <h1 className="text-lg font-semibold">{car.price}</h1>
              <Rentnow />
            </div>
          </div>
        </div>
      </div>

      {/* Remove margin between images */}
      <div className="row-start-3 row-end-5 col-start-4 col-end-4 w-[1016px] h-[452px]">
        <Image
          src="/UReviews.png"
          alt="review"
          width={1016}
          height={452}
        />
      </div>

      <div className="row-start-5 row-end-7 col-start-4 col-end-4 w-[1016px] h-[448px] ">
        <Image
          src="/Recent Car.png"
          alt="review"
          width={1016}
          height={452}
        />
      </div>

      <div className="row-start-7 row-end-10 col-start-4 col-end-4 w-[1016px] h-[448px]">
        <Image
          src="/Recomendation Car.png"
          alt="review"
          width={1016}
          height={452}
        />
      </div>
    </div>
  );
};

export default CarDetails;
