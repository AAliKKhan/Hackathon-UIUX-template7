// import React from 'react'
// import Sidebar from '../components/sidebar'
// import Image from 'next/image'
// import Card from '../components/card'

// const ShowMore = () => {
//   return (
//     <div className='wrapper flex'>
//       <div><Sidebar></Sidebar></div>
//       <div> {/* Cards and Switch Button */}
//             <div className="flex justify-center items-center space-x-6 mx-auto mt-8">
//         {/* First Card (Pick-Up) */}
//         <div className="bg-bg1 p-6 rounded-xl shadow-lg space-y-6 w-[486px] h-[132px]">
//           {/* Header Section */}
//           <div className="flex items-center space-x-2">
//             <Image src="/mark.png" alt="point" width={16} height={16} />
//             <h1 className="text-xl font-semibold">Pick-Up</h1>
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

//         {/* Switch Button */}
//         <div className="flex items-center justify-center ">
//           <button>
//             <Image src="/Switch.png" alt="Switch" width={60} height={60} />
//           </button>
//         </div>

//         {/* Second Card (Drop-Off) */}
//         <div className="bg-bg1 p-6 rounded-xl shadow-lg space-y-6 w-[486px] h-[132px]">
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
//       </div></div>
//       <div>
//         <Card
//         id={1}
//         title='Honda'
//         type='Crossover'
//         fuel='40l'
//         transmission='Automatic'
//         image=''
//         seats={5}
//         price='456789'
//         description='lorem ipsum dolor'></Card>
//       </div>
//     </div>
//   )
// }

// export default ShowMore


import React from 'react';
import Sidebar from '../components/sidebar';
import Image from 'next/image';
import Card from '../components/card';

const ShowMore = () => {
  return (
    <div className='wrapper flex'>
      <div><Sidebar></Sidebar></div>
      <div> {/* Cards and Switch Button */}
        <div className="flex justify-center items-center space-x-6 mx-auto mt-8">
          {/* First Card (Pick-Up) */}
          <div className="bg-bg1 p-6 rounded-xl shadow-lg space-y-6 w-[400px] h-[132px]">
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
          <div className="bg-bg1 p-6 rounded-xl shadow-lg space-y-6 w-[400px] h-[132px]">
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

        {/* Cards Section */}
        <div className="grid grid-cols-3 gap-5 mt-8 p-4">
         
            <Card
              key=""
              id= {1}
              title="Rolls Royce"
              type='Crossover'
              fuel='40l'
              transmission='Automatic'
              image='/Rolls-Royce.png'
              seats={5}
              price='$569.000'
              description='lorem ipsum dolor'
            />
            <Card
              key=""
              id= {1}
              title="Rolls Royce"
              type='Crossover'
              fuel='40l'
              transmission='Automatic'
              image='/Rolls-Royce.png'
              seats={5}
              price='$569.000'
              description='lorem ipsum dolor'
            />
            <Card
              key=""
              id= {1}
              title="Rolls Royce"
              type='Crossover'
              fuel='40l'
              transmission='Automatic'
              image='/Rolls-Royce.png'
              seats={5}
              price='$569.000'
              description='lorem ipsum dolor'
            />
            <Card
              key=""
              id= {1}
              title="Rolls Royce"
              type='Crossover'
              fuel='40l'
              transmission='Automatic'
              image='/Rolls-Royce.png'
              seats={5}
              price='$569.000'
              description='lorem ipsum dolor'
            />
            <Card
              key=""
              id= {1}
              title="Rolls Royce"
              type='Crossover'
              fuel='40l'
              transmission='Automatic'
              image='/Rolls-Royce.png'
              seats={5}
              price='$569.000'
              description='lorem ipsum dolor'
            />
            <Card
              key=""
              id= {1}
              title="Rolls Royce"
              type='Crossover'
              fuel='40l'
              transmission='Automatic'
              image='/Rolls-Royce.png'
              seats={5}
              price='$569.000'
              description='lorem ipsum dolor'
            />
            <Card
              key=""
              id= {1}
              title="Rolls Royce"
              type='Crossover'
              fuel='40l'
              transmission='Automatic'
              image='/Rolls-Royce.png'
              seats={5}
              price='$569.000'
              description='lorem ipsum dolor'
            />
            <Card
              key=""
              id= {1}
              title="Rolls Royce"
              type='Crossover'
              fuel='40l'
              transmission='Automatic'
              image='/Rolls-Royce.png'
              seats={5}
              price='$569.000'
              description='lorem ipsum dolor'
            />
            <Card
              key=""
              id= {1}
              title="Rolls Royce"
              type='Crossover'
              fuel='40l'
              transmission='Automatic'
              image='/Rolls-Royce.png'
              seats={5}
              price='$569.000'
              description='lorem ipsum dolor'
            />
           <Card
              key=""
              id= {1}
              title="Rolls Royce"
              type='Crossover'
              fuel='40l'
              transmission='Automatic'
              image='/Rolls-Royce.png'
              seats={5}
              price='$569.000'
              description='lorem ipsum dolor'
            />
            <Card
              key=""
              id= {1}
              title="Rolls Royce"
              type='Crossover'
              fuel='40l'
              transmission='Automatic'
              image='/Rolls-Royce.png'
              seats={5}
              price='$569.000'
              description='lorem ipsum dolor'
            />
            <Card
              key=""
              id= {1}
              title="Rolls Royce"
              type='Crossover'
              fuel='40l'
              transmission='Automatic'
              image='/Rolls-Royce.png'
              seats={5}
              price='$569.000'
              description='lorem ipsum dolor'
            />
        </div>
      </div>
    </div>
  );
};

export default ShowMore;
