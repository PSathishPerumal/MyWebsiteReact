import React from 'react'

const Footer = () => {
  return (
   <footer className='bg-gray-900 text-white text-center py-6'>
    <p> My Webpage , All rights reserved @2025</p>
        <div className='flex justify-center space-x-2 mt-4'>  
        <a className='hover:text-blue-600' href="">Twitter</a>
            <a className='hover:text-blue-600' href="">Instagram</a>
            <a className='hover:text-blue-600' href="">Facebook</a>
        </div>
    
   </footer>
  )
}

export default Footer