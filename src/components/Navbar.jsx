import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Link as ScrollLink} from 'react-scroll'
import { FaHome } from "react-icons/fa";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";

const Navbar = () => {
  const location = useLocation()

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const handleClose = () => {
    setNav(!nav)
  }

  return (
    <header>
        <nav className='flex justify-between items-center w-full px-20 tablet:h-16 h-12 z-20 shadow-md fixed bg-white'>
            <div>
              <Link to='/'>
                <p className='text-2xl font-semibold flex text-green-600 cursor-pointer'>CULINARY
                    <span className='text-orange-500'>PASSPORT</span>
                </p>
              </Link>
            </div>

            <div className='hidden tablet:flex gap-4 text-xl cursor-pointer'>
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
                  <ScrollLink to='categories' smooth={true} duration={500}>
                    <p className='text-green-500'>Categories</p>
                  </ScrollLink>
                    <p className='text-orange-500'>Countries</p>
                </>
              )}
            </div>

            <div className='tablet:hidden cursor-pointer ml-10'>
              {location.pathname !== '/' ? (
                  <Link to='/'>
                    <FaHome size={25} className='text-green-500'/>
                  </Link>
              ) : (
                <>
                  {nav ? (
                    <AiOutlineClose size={20} onClick={handleClose} className='text-orange-500'/>
                  ) : (
                    <AiOutlineMenu size={20} onClick={handleNav} className='text-green-500'/>
                  )}
                </>
              )}
            </div>
        </nav>

        {/* Mobile Menu */}
        <div className={nav ? 'fixed right-0 top-0 w-[60%] h-full z-10 border-l border-l-green-500 bg-white ease-in-out duration-500' : 'fixed right-[-100%]'}>
            <div className='flex flex-col justify-center items-center gap-4 text-xl cursor-pointer mt-16'>
                  <ScrollLink to='recipes' smooth={true} duration={500}>
                    <p className='text-green-500' onClick={handleClose}>Recipes</p>
                  </ScrollLink>
                  <ScrollLink to='ingredients' smooth={true} duration={500}>
                    <p className='text-orange-500' onClick={handleClose}>Ingredients</p>
                  </ScrollLink>
                  <ScrollLink to='categories' smooth={true} duration={500}>
                    <p className='text-green-500' onClick={handleClose}>Categories</p>
                  </ScrollLink>
                    <p className='text-orange-500' onClick={handleClose}>Countries</p>
            </div>
        </div>
    </header>
  )
}

export default Navbar