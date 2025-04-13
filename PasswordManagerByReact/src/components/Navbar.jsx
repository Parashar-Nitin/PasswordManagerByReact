import React from 'react'

function Navbar() {
  return (
    <div>
      <nav>
        <ul className='flex justify-around bg-black text-white min-h-7'>
            <li className='list-none p-4 font-bold text-xl'><span className='text-red-500 font-bold text-3xl'>P</span><span className='text-yellow-500 font-bold text-3xl'>a</span><span className=' font-bold text-3xl'>ss</span><span className='text-purple-600 font-bold text-3xl'>P</span><span className='text-green-400 font-bold text-3xl'>r</span><span className='text-amber-300 font-bold text-3xl'>o</span></li>
            <li className='list-none p-4 font-bold text-xl'><a href="https://github.com/parashar-nitin" target='_blank'><button className='flex bg-green-900 px-2 py-1 rounded-full gap-3 border border-white'><img className='h-8 invert' src="icons/github.svg" alt="svg" /><span>GitHub</span></button></a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
