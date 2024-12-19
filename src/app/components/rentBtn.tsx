import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Rentnow = () => {
  return (
    <div>
      
       <Link href="/RENTNOW" className='w-[116px] h-[44px] border rounded-md'> <Image src="/Button Rental.png" alt="point" width={116} height={44} /></Link>
    </div>
  )
}

export default Rentnow

