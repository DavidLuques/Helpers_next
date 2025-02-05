import React from 'react'
import Link from 'next/link'
import './navbar.css'

function Navbar() {
  return (
    <nav className='NavBar py-5'>

      <Link href='/'><h2 className='text-3xl font-bold px-4 '>Panchufleto</h2></Link>

      <ul className='px-8'>
        <li><Link href="./">Home</Link></li>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/tienda'>Tienda</Link></li>
        <li><Link href='/posts'>Posts</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar