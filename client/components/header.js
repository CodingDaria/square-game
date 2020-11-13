import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="flex flex-wrap justify-center bg-yellow-200 p-6">
      <Link
        className="bg-yellow-600 hover:bg-yellow-800 text-white font-bold py-2 px-2 rounded"
        to="/"
      >
        Home
      </Link>
    </nav>
  )
}

Header.propTypes = {}

export default Header
