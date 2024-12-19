// import React from "react";
// import Image from "next/image";

// const Dashboard = () => {
//   return (
//     <div className="wrapper flex">
//       <div className=" w-[286px] h-[900px] bg-yellow-200">
//         <Image src="/Nav Bar.png" width={286} height={900} alt="" />
//       </div>
//       <div className="w-[534px] h-[836px]">
//         <h1>Details Rental</h1>
//         <Image src="/Maps.png" width={486} height={272} alt="" />
//         <div className="flex gap-3 items-center">
//           <div className="bg-[url('/blue.png')] bg-cover bg-center w-[132px] h-[72px] flex flex-col border rounded-md items-start justify-center p-6">
//             <Image src="/crv.png" alt="Car view" width={116} height={36} />
//           </div>
//           <div>
//             <h1 className="font-bold">Car Name</h1>
//             <p className="font-light">Car type</p>
//           </div>
//         </div>
//           <div className="bg-bg1 p-6 rounded-xl shadow-lg space-y-6 w-[520px] h-[132px]">
//           {/* Header Section */}
//           <div className="flex items-center space-x-2">
//             <Image src="/mark.png" alt="point" width={16} height={16} />
//             <h1 className="text-xl font-semibold">Drop-Off</h1>
//           </div>

//           {/* Details Section */}
//           <div className="space-y-4">
//             <div className="flex items-center space-x-4">
//               <div>
//                 <h1 className="font-medium">Location</h1>
//                 <p className="text-gray-500">Select Country</p>
//               </div>
//               <div className="bg-gray-950 h-[48px] w-[1px]"></div>
//               <div>
//                 <h1 className="font-medium">Date</h1>
//                 <p className="text-gray-500">Select Date</p>
//               </div>
//               <div className="bg-gray-950 h-[48px] w-[1px]"></div>
//               <div>
//                 <h1 className="font-medium">Time</h1>
//                 <p className="text-gray-500">Select time</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import Image from "next/image";

const Dashboard = () => {
  return (
    <div className="wrapper flex">
      <div className="w-[286px] h-[900px] ">
        <Image src="/Nav Bar.png" width={286} height={900} alt="" />
      </div>
      <div className="w-[534px] h-[836px]  mt-8 mb-8 ml-4 p-2">
        <h1 className="font-bold text-xl mb-3 p-2 ml-3 mt-3">Details Rental</h1>
        <Image src="/Maps.png" width={486} height={272} alt="" className="ml-4" />
        <div className="flex gap-3 items-center">
          <div className="bg-[url('/blue.png')] bg-cover bg-center w-[132px] h-[72px] flex flex-col border rounded-md items-start justify-center p-6 mt-3 mb-3 ml-3.5">
            <Image src="/crv.png" alt="Car view" width={116} height={36} />
          </div>
          <div>
            <h1 className="font-bold">Car Name</h1>
            <p className="font-light">Car type</p>
          </div>
        </div>
        {/* First Details Section */}
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

        {/* Second Details Section */}
        <div className="bg-bg1 p-6 rounded-xl shadow-lg space-y-6 w-[520px] h-[132px] mt-4">
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
        <div className="flex justify-between mt-10">
            <div>
                <h1 className="font-bold text-xl">Total rental price</h1>
                <p className="font-light">Overall price and rental discounts</p>
            </div>
            <div className="font-bold text-4xl"><h1>$70.00</h1></div>
        </div>
      </div>
      <div className="Flex gap-3 ml-3 bg-s0">
        <div className="w-[524px] h-[324] mt-8">  <Image src="/Top5.png" alt="" width={524} height={324} /></div>
        <div className="w-[524px] h-[480px] mt-9">  <Image src="/Transaction.png" alt="" width={524} height={324} /></div>
      </div>
    </div>
  );
};

export default Dashboard;

