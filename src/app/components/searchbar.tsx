import Image from "next/image";
const SimpleSearchBar = () => {
    return (

        <div className="w-[492px] h-[44px] ml-[212px]">
          <div className="flex items-center border rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200">
            <button
              className="px-4 py-2  text-gray-600 hover:bg-gray-200 rounded-full"
            >
              <Image
            src="/Search.png"
            width={32}
            height={32}
            alt="Search"
          />
            </button>
            <input
              type="text"
              placeholder="Search"
              className="flex-1 px-4 py-2 outline-none text-gray-800 rounded-full"
            />
          </div>
        </div>

    );
  };
  
  export default SimpleSearchBar;
  