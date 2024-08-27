import React, { useState } from 'react'
import { Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)  // Toggle the menu open/close
  }

  const handleNavClick = (slug) => {
    navigate(slug)
    setIsOpen(false)  // Close the menu when a navigation item is clicked
  }

  return (
    <header className='shadow-lg shadow-gray-500/50 w-full sticky top-0 left-0 z-50 md:rounded-lg rounded-t-lg'>
      <nav className='md:flex md:items-center md:justify-between md:px-10 bg-blue-600 md:rounded-lg relative rounded-t-lg'>
        <div className='mr-4'>
          <Link to='/'>
            <Logo width='100px' />
          </Link>
        </div>

        {/* Navigation Items */}
        <ul className={`md:flex md:items-center md:static absolute bg-blue-600 w-full md:w-auto left-0 transition-all md:rounded-none rounded-b-lg duration-700 ease-in-out pl-2 
          ${isOpen ? "top-28" : "top-[-490px]"} md:top-auto`}>
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name} className={`md:my-0 my-7`}>
                <button
                  onClick={() => handleNavClick(item.slug)}
                  className='inline-block px-6 py-2 text-white duration-200 hover:bg-white hover:text-blue-600 rounded-full font-semibold'
                >
                  {item.name}
                </button>
              </li>
            ) : null
          )}
          {authStatus && (
            <li className='my-7 md:my-0'>
              {/* Pass setIsOpen to LogoutBtn to close menu after logout */}
              <LogoutBtn setIsOpen={setIsOpen} />
            </li>
          )}
        </ul>

        {/* Hamburger Menu Button */}
        <div className='md:hidden absolute top-8 right-6'>
          <button onClick={toggleMenu} className='text-white focus:outline-none'>
            {isOpen ? (
              <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
              </svg>
            ) : (
              <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
