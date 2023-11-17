import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Link as ScrollLink} from 'react-scroll'
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation()

  return (
    <header>
        <nav className='flex justify-between items-center w-full px-20 tablet:h-16 h-12 z-10 shadow-md fixed bg-white'>
            <div>
              <Link to='/'>
                <p className='text-2xl font-semibold flex text-green-600 cursor-pointer'>CULINARY
                    <span className='text-orange-500'>PASSPORT</span>
                </p>
              </Link>
            </div>
            <div className='flex gap-4 text-xl cursor-pointer'>
              {location.pathname !== '/' ? (
                <>
                  <Link to='/'>
                    <FaHome size={25} className='text-green-500'/>
                  </Link>
                </>
              ) : (
                <>
                  <ScrollLink to='recipes' smooth={true} duration={500}>
                    <p className='text-green-500'>Recipes</p>
                  </ScrollLink>
                  <ScrollLink to='ingredients' smooth={true} duration={500}>
                    <p className='text-orange-500'>Ingredients</p>
                  </ScrollLink>
                    <p className='text-green-500'>Categories</p>
                    <p className='text-orange-500'>Countries</p>
                </>
              )}
            </div>
        </nav>
    </header>
  )
}

export default Navbar