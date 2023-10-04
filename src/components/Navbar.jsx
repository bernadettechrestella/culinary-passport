import React from 'react'

const Navbar = () => {
  return (
    <header>
        <nav className='flex justify-between items-center w-full px-20 h-20 z-10 absolute'>
          <div>
            <p className='text-2xl font-semibold flex text-green-600'>CULINARY
                <span className='text-orange-500'>PASSPORT</span>
            </p>
          </div>
        </nav>
    </header>
  )
}

export default Navbar