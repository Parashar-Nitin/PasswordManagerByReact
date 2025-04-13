import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
      <footer className='w-full text-center bottom-0 bg-black p-2 text-white'>
        <h1 className='text-3xl font-bold'><span className='text-red-500 font-bold text-3xl'>P</span><span className='text-yellow-500 font-bold text-3xl'>a</span><span className=' font-bold text-3xl'>ss</span><span className='text-purple-600 font-bold text-3xl'>P</span><span className='text-green-400 font-bold text-3xl'>r</span><span className='text-amber-300 font-bold text-3xl'>o</span></h1>
        <div className="disc flex items-center justify-center">created with <img src="icons/heart.png" alt="love" /> by Nitin Parashar</div>
      </footer>
    </div>
  )
}

export default Footer
