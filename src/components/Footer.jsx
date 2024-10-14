import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-400 h-14 w-full'>
      <div className='logo flex gap-4 justify-center' >
        <img src="./src/assets/react.svg" alt="logo" className='invert ' />
        <div className='flex flex-col justify-center items-center '>
          <div className='text font-bold text-xl h-full'>
            <span className='text-blue-800 text-xl'> &lt; </span>
            <span>Pass</span>
            <span className='text-green-800'>-Man</span>
            <span className='text-blue-800 text-xl'> /&gt; </span>
          </div>
          <div className="cote">
            <p>Thank You</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
