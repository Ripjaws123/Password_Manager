import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-evenly bg-blue-300 p-1 mlm:justify-center'>
        <div className='logo flex gap-4' >
            <img src="./src/assets/react.svg" alt="logo"className='invert' />
            <h2 className='font-bold text-xl'>
                <span className='text-blue-800 text-xl'> &lt; </span>
                <span>Pass</span>
                <span className='text-green-800'>-Man</span>
                <span className='text-blue-800 text-xl'> /&gt; </span></h2>
        </div>
      <ul className="mlm:hidden">
        <li className='flex gap-8'>
        <a className='font-semibold' href="/">Home</a>
        <a className='font-semibold' href="/">Contact</a>
        <a className='font-semibold' href="/">About Us</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar