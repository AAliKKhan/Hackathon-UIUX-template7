import React from "react";
import Image from "next/image";
import Link from "next/link";


const rentPage = () => {
  return (
    <div className="wrapper flex gap-2 p-6">
      <div>
        <div className="w-[852px] h-[366px] bg-pink- p-6 ">
          <h1 className="font-bold text-lg">Billing Info</h1>
          <p className="font-extralight">Please enter your billing info</p>
          <form className=" rounded shadow-md ">
            <div className="grid grid-cols-2 gap-6 mb-4 mt-10">
              {/* Name and Phone Number */}
              <div>
                <label htmlFor="name" className="block font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-3 py-2 border rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block  font-medium">
                  Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full px-3 py-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your phone number"
                />
              </div>
              {/* Address and Town */}
              <div>
                <label htmlFor="address" className="block  font-medium">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="mt-1 block w-full px-3 py-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your address"
                />
              </div>
              <div>
                <label htmlFor="town" className="block  font-medium">
                  Town
                </label>
                <input
                  type="text"
                  id="town"
                  name="town"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your town"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="bg-yellow w-[852px] h-[650px] p-6">
          <h1 className="font-bold text-lg">Rental Info</h1>
          <p className="font-extralight">Please select your rental date</p>
          <form className=" mt-10 ">
            {/* Pickup Section */}
            <div className="flex items-center space-x-2">
              <Image src="/mark.png" alt="point" width={16} height={16} />
              <h1 className=" font-semibold">Pick-Up</h1>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4 mt-4">
              <div>
                <label
                  htmlFor="pickup-location"
                  className="block text-gray-700 font-medium"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="pickup-location"
                  name="pickup-location"
                  className="mt-1 block w-[370px] px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Pickup location"
                />
              </div>
              <div>
                <label
                  htmlFor="pickup-date"
                  className="block text-gray-700 font-medium"
                >
                  Date
                </label>
                <input
                  type="date"
                  id="pickup-date"
                  name="pickup-date"
                  className="mt-1 block w-[370px] px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="pickup-time"
                className="block text-gray-700 font-medium"
              >
                Time
              </label>
              <input
                type="time"
                id="pickup-time"
                name="pickup-time"
                className="mt-1 block w-[370px] px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* DropOff Section */}
            <div className="flex items-center space-x-2 mt-10">
              <Image src="/mark.png" alt="point" width={16} height={16} />
              <h1 className=" font-semibold">Drop-of</h1>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4 mt-4">
              <div>
                <label
                  htmlFor="dropoff-location"
                  className="block text-gray-700 font-medium"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="dropoff-location"
                  name="dropoff-location"
                  className="mt-1 block w-[370px] px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="DropOff location"
                />
              </div>
              <div>
                <label
                  htmlFor="dropoff-date"
                  className="block text-gray-700 font-medium"
                >
                  Date
                </label>
                <input
                  type="date"
                  id="dropoff-date"
                  name="dropoff-date"
                  className="mt-1 block w-[370px] px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="dropoff-time"
                className="block text-gray-700 font-medium"
              >
                Time
              </label>
              <input
                type="time"
                id="dropoff-time"
                name="dropoff-time"
                className="mt-1 block w-[370px] px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </form>
        </div>
        <div className="w-[852px] h-[596px] bg-green p-6">
          <h1 className="font-bold">Payment Method</h1>
          <p className="font-extralight">Please enter your payment method</p>
          <form className="rounded shadow-md">
            <div className="flex items-center  justify-between ">
              <div className="flex mt-6 ">
                <Image src="/mark.png" alt="point" width={16} height={16} />
                <h1 className=" font-semibold">Drop-of</h1>
              </div>
              <Image src="/Visa.png" alt="point" width={92} height={20} />
            </div>
            <div className="grid grid-cols-2 gap-6 mb-4 mt-7 p-2">
              {/* Name and Phone Number */}

              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium"
                >
                  Expiration Date
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your phone number"
                />
              </div>
              {/* Address and Town */}
              <div>
                <label
                  htmlFor="address"
                  className="block text-gray-700 font-medium"
                >
                  Card Holder
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your address"
                />
              </div>
              <div>
                <label
                  htmlFor="town"
                  className="block text-gray-700 font-medium"
                >
                  CVC
                </label>
                <input
                  type="text"
                  id="town"
                  name="town"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your town"
                />
              </div>
            </div>

            {/* Radio Buttons for Payment Options */}
            <div className="mt-6"></div>
          </form>
          {/* <div>
          <div className=" items-cetre  ">
              <div className="w-[804px] h-[56px] border rounded-md bg-slate-300">
                <input
                  type="radio"
                  id="paypal"
                  name="payment"
                  value="paypal"
                  className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="paypal" className=" text-gray-700 ">
                  PayPal
                </label>
              </div>
              <div className="w-[804px] h-[56px] border rounded-md bg-slate-300">
                <input
                  type="radio"
                  id="bitcoin"
                  name="payment"
                  value="bitcoin"
                  className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="bitcoin" className=" text-gray-700">
                  Bitcoin
                </label>
              </div>
            </div>
          </div> */}
          <div className="items-center flex flex-col gap-4">
  <div className="flex items-center w-[804px] h-[56px] border rounded-md bg-slate px-4">
    <input
      type="radio"
      id="paypal"
      name="payment"
      value="paypal"
      className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
    />
    <label
      htmlFor="paypal"
      className="ml-2 text-gray-700 flex-grow"
    >
      PayPal
    </label>
    <Image src="/Paypal.png" alt="point" width={100} height={24} />
  </div>
  <div className="flex items-center w-[804px] h-[56px] border rounded-md bg-slate px-4">
    <input
      type="radio"
      id="bitcoin"
      name="payment"
      value="bitcoin"
      className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
    />
    <label
      htmlFor="bitcoin"
      className="ml-2 text-gray-700 flex-grow"
    >
      Bitcoin
    </label>
    <Image src="/Bitcoin.png" alt="point" width={100} height={24} />
  </div>
</div>

        </div>
        <div>
          <div className="w-[852px] h-[484px] bg-orange p-6 ">
            <h1 className="font-bold">Confirmation</h1>
            <p className="font-extralight mb-4">
              Please confirm your preferences by checking the boxes below.
            </p>
            <form className="rounded shadow-md w-[804px] h-[56px] flex ml-2">
              {/* Confirmation Checkboxes */}
              <div className="mt-6 space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="agree-emails"
                    name="agree-emails"
                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="agree-emails" className="ml-2 text-gray-700">
                    I agree with emails
                  </label>
                </div>
                <div></div>
              </div>
            </form>
            <form className="rounded shadow-md w-[804px] h-[56px] flex ml-2">
              {/* Confirmation Checkboxes */}
              <div className="mt-6 space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="agree-emails"
                    name="agree-emails"
                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="agree-emails" className="ml-2 text-gray-700">
                    I agree with terms and condition
                  </label>
                </div>
                <div></div>
              </div>
            </form>
            <div>
              {" "}
              <Link href="/Dashboard" className="w-[116px] h-[44px] border rounded-md ">
                {" "}
                <Image
                  src="/Button Rental.png"
                  alt="point"
                  width={116}
                  height={44}
                />
              </Link>
            </div>
            <div className="w-[548px] h-[44px] mt-6">
              <Image
                src="/Safe Data.png"
                alt="point"
                width={548}
                height={100}
              />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lime w-[492px] h-[560px] p-6 border rounded-md">
        <div>
          <h1 className="font-bold xl">Rental Summary</h1>
          <p className="font-extralight">
            Prices may change depending the lengthof rental and the price of
            your rental car.{" "}
          </p>
        </div>
        <div className="flex mt-6 justify-between">
          <div className="bg-[url('/blue.png')] bg-cover bg-center w-[120px] h-[100px] flex flex-col border rounded-md items-start justify-center p-6">
            <Image src="/Rolls-Royce.png" alt="Car view" width={105} height={32} />
          </div>
          <div>
            <h1 className="font-bold l">Rolls Royce</h1>
            <Image src="/reviews.png" alt="" width={190} height={20} />
          </div>
        </div>
        <div className="mt-9">
          <div className="flex justify-between p-3">
            <p className="font-extralight">Subtotal</p>
            <p className="font-bold">$80.00</p>
          </div>
          <div className="flex justify-between p-3">
            <p className="font-extralight">Tax</p>
            <p className="font-bold">$0</p>
          </div>
        </div>
        <div className="mt-4">
          <Image src="/Apply now.png" alt="promo" width={444} height={36} />
        </div>
        <div className="flex justify-between p-3 mt-4">
          <div>
            <h1 className="font-bold">Total Rental Price</h1>
            <p className="font-extralight">
              Overall price and includes rental discount
            </p>
          </div>
          <p className="font-bold text-3xl">$80.00</p>
        </div>
      </div>
    </div>
  );
};

export default rentPage;
