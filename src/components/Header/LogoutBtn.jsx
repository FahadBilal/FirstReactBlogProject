import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn({setIsOpen}) {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
            setIsOpen(false)
        })
    }
  return (
    <button
    className='inline-bock px-6 py-2 text-white duration-200  hover:bg-white hover:text-blue-600  rounded-full font-semibold'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn