


import React from 'react';
import Image from 'next/image';
import SearchBar from '../searchbar';

const Header = () => {
  return (
    <div className="w-[1440px] h-[124px] flex items-center justify-between px-8 wrapper">

      <div className="flex items-center space-x-4 ml-[60px]">
        {/* Logo */}
        <Image 
          src="/Logo.png" 
          alt="logo" 
          width={148} 
          height={44} 
        />
        {/* Search Bar */}
        <SearchBar />
      </div>

      {/* Buttons Section */}
      <div className="flex items-center space-x-4">
        <button>
          <Image
            src="/Blue Heart.png"
            width={32}
            height={32}
            alt="Heart"
          />
        </button>
        <button>
          <Image
            src="/Notification.png"
            width={32}
            height={32}
            alt="Notification"
          />
        </button>
        <button>
          <Image
            src="/Setting.png"
            width={32}
            height={32}
            alt="Setting"
          />
        </button>
        <button>
          <Image
            src="/Notif.png"
            width={32}
            height={32}
            alt="Profile"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;


