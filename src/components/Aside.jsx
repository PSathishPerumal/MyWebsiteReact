import React from 'react'
import {FaBook, FaReact, FaRocket} from "react-icons/fa"
const Aside = () => {
  return (
    <aside className='container bg-gray-200 rounded-lg shadow-lg p-6 mx-auto md: w-96'> 
        <h2 className='text-xl font-bold'>📌Related Links</h2>
        <ul className='space-y-2 mt-2'>
            <li>
                <a  href="" className='flex items-center text-blue-500 gap-1 hover:underline '> <FaBook /> Vite Documentation</a>
                </li>
                <li >
                <a  href="" className='flex items-center text-blue-500 gap-1 hover:underline '> <FaReact /> React Guide</a>
                </li>
                <li >
                <a  href="" className='flex items-center text-blue-500 gap-1 hover:underline'> <FaRocket /> React Trends</a>
                </li>
        </ul>
    </aside>
  )
}

export default Aside