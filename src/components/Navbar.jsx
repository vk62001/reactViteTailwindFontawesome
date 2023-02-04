import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='w-full bg-cyan-500 flex justify-center items-center'>
        <span className='text-white p-3'>
            <Link to="/" className='hover:text-cyan-100' >Inicio</Link>
        </span>
        <span className='text-white p-3'>
            <Link to="/about" className='hover:text-cyan-100' >Acerca</Link>
        </span>
    </div>
  )
}
