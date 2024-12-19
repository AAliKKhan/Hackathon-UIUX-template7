import React from 'react'

const Sidebar = () => {
  return (
    <div>
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

    </div>
  )
}

export default Sidebar
