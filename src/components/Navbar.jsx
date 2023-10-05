import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <nav className='flex justify-between items-center w-full px-20 h-20 z-10 absolute'>
          <div>
            <Link to='/'>
              <p className='text-2xl font-semibold flex text-green-600 cursor-pointer'>CULINARY
                  <span className='text-orange-500'>PASSPORT</span>
              </p>
            </Link>
          </div>
        </nav>
    </header>
  )
}

export default Navbar