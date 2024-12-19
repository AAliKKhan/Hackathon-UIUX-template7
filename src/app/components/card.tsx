


"use client"
import Link from "next/link";
import Rentnow from "./rentBtn";
import Image from "next/image";
import HeartButton from "./heart";

interface CardProps {
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

export default function Card({
  id,
  title,
  type,
  fuel,
  transmission,
  image,
  seats,
  price,
  description,
}: CardProps) {
  return (
    <div className="w-[280px] h-[388x] radius-[10px] mr-4 p-3 gap-2 relative bg-bg1">
      <Link href={`/cars/${id}`}>
        <div className="flex justify-between">
          <div>
            <h1 className="text-lg font-semibold">{title}</h1>
            <p className="text-sm">{type}</p>
          </div>
          <div className="absolute top-0 right-0 p-2">
            <HeartButton />
          </div>
        </div>

        {/* Centering the Image */}
        <div className="flex justify-center items-center mt-[100px]">
          <Image
            src={image} // Path to the image in the 'public' folder
            alt="Car image" // Alternative text for accessibility
            width={204} // Width of the image (in pixels)
            height={64} // Height of the image (in pixels)
            blurDataURL="/image/blur-placeholder.jpg" // Optional low-quality image for placeholder
            placeholder="blur" // Enable blur placeholder
          />
        </div>

        {/* Fuel, Transmission, Capacity - Positioned Horizontally */}
        <div className="flex gap-4 justify-center text-sm mt-[50px]">
          <p className="flex items-center">
            <Image
              src="/fuel.png" // Path to the image in the 'public' folder
              alt="Fuel icon" // Alternative text for accessibility
              width={24} // Width of the image (in pixels)
              height={24}
            />{" "}
            {fuel}
          </p>
          <p className="flex items-center">
            <Image
              src="/transmission.png" // Path to the image in the 'public' folder
              alt="Transmission icon" // Alternative text for accessibility
              width={24} // Width of the image (in pixels)
              height={24}
            />{" "}
            {transmission}
          </p>
          <p className="flex items-center">
            <Image
              src="/Capacity.png" // Path to the image in the 'public' folder
              alt="Capacity icon" // Alternative text for accessibility
              width={24} // Width of the image (in pixels)
              height={24}
            />{" "}
            {seats}
          </p>
        </div>

        {/* Price and Rent Now */}
        <div className="flex justify-between items-center mt-[30px]">
          <h1 className="text-lg">{price}</h1>
          <Rentnow />
        </div>
      </Link>
    </div>
  );
}

