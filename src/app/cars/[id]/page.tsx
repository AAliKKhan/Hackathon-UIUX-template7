

"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // For dynamic route parameters
import Image from "next/image";
import HeartButton from "@/app/components/heart";
import Rentnow from "@/app/components/rentBtn";
import Card from "@/app/components/card";

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
    <div className="flex wrapper">



      <div>
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







      <div>
        <div>

        <div className="flex gap-6 p-6">
  {/* Left Section - Images */}
  <div className="flex flex-col gap-4">
    {/* Main Image Section */}
    <div className="bg-[url('/blue.png')] bg-cover bg-center w-[492px] h-[360px] flex flex-col border rounded-md items-start justify-center p-6">
      <h1 className="text-2xl font-semibold mb-2">Welcome to Our Site!</h1>
      <p className="text-sm mb-4">
        Discover the best cars available for rent, with a variety of options tailored to your needs.
      </p>
      <div className="w-full flex justify-center items-center">
        <Image src={car.image} alt="Car view" width={380} height={120} />
      </div>
    </div>

    {/* Thumbnail Images Section */}
    <div className="flex gap-6">
      <div className="flex items-center border rounded-md" style={{ backgroundImage: "url(/blue.png)" }}>
        <Image src={car.image} alt="Car view" width={148} height={124} />
      </div>
      <Image
        src="/interior1.png"
        alt="Interior 1"
        width={148}
        height={124}
        className="border rounded-md"
      />
      <Image
        src="/interior2.png"
        alt="Interior 2"
        width={148}
        height={124}
        className="border rounded-md"
      />
    </div>
  </div>

  {/* Right Section - Details */}
  <div className="flex flex-col justify-between w-[492px] h-[508px] border rounded-md p-6">
    {/* Title and Rating */}
    <div className="flex justify-between items-start mb-4">
      <div>
        <h1 className="text-xl font-semibold">{car.title}</h1>
        <Image src="/reviews.png" alt="Review" width={220} height={24} />
      </div>
      <HeartButton />
    </div>

    {/* Description */}
    <p className="text-sm text-gray-700 mb-4">{car.description}</p>

    {/* Specifications */}
    <div className="flex flex-wrap justify-between gap-4 text-sm mb-4">
      <div className="flex flex-col">
        <h1 className="text-base font-medium">Car Type:</h1>
        <p className="text-gray-600">{car.type}</p>
      </div>
      <div className="flex flex-col">
        <h1 className="text-base font-medium">Capacity:</h1>
        <p className="text-gray-600">{car.seats} person</p>
      </div>
      <div className="flex flex-col">
        <h1 className="text-base font-medium">Steering:</h1>
        <p className="text-gray-600">{car.transmission}</p>
      </div>
      <div className="flex flex-col">
        <h1 className="text-base font-medium">Gasoline:</h1>
        <p className="text-gray-600">{car.fuel}</p>
      </div>
    </div>

    {/* Price and Rent Now */}
    <div className="flex justify-between items-center mt-4">
      <h1 className="text-lg font-semibold">{car.price}</h1>
      <Rentnow />
    </div>
  </div>
</div>


        </div>




        <div>
        <div className="row-start-3 row-end-5 col-start-4 col-end-4 w-[1016px] h-[452px]">
        <Image
          src="/UReviews.png"
          alt="review"
          width={1016}
          height={452}
        />
      </div>

      <div className="flex p-7 gap-8 w-[1016px] h-[448px] ">
       
<Card
        id={car.id}
        title={car.title}
        type={car.type}
        fuel={car.fuel}
        transmission={car.transmission}
        image={car.image}
        seats={car.seats}
        price={car.price}
        description={car.description}
      />
      <Card
        id={car.id}
        title={car.title}
        type={car.type}
        fuel={car.fuel}
        transmission={car.transmission}
        image={car.image}
        seats={car.seats}
        price={car.price}
        description={car.description}
      />
      <Card
        id={car.id}
        title={car.title}
        type={car.type}
        fuel={car.fuel}
        transmission={car.transmission}
        image={car.image}
        seats={car.seats}
        price={car.price}
        description={car.description}
      />
      </div>

      <div className=" flex p-7  gap-8 w-[1016px] h-[448px]">
       
               <Card
        id={car.id}
        title={car.title}
        type={car.type}
        fuel={car.fuel}
        transmission={car.transmission}
        image={car.image}
        seats={car.seats}
        price={car.price}
        description={car.description}
      />

<Card
        id={car.id}
        title={car.title}
        type={car.type}
        fuel={car.fuel}
        transmission={car.transmission}
        image={car.image}
        seats={car.seats}
        price={car.price}
        description={car.description}
      />
      <Card
        id={car.id}
        title={car.title}
        type={car.type}
        fuel={car.fuel}
        transmission={car.transmission}
        image={car.image}
        seats={car.seats}
        price={car.price}
        description={car.description}
      />

      </div>
        </div>

 
      </div>
    </div>
  );
};

export default CarDetails;
