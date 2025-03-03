import React from 'react'
import './sidebar.css'
const Sidebar = () => {
  return (
    <>
      <div className='search'>
        <label htmlFor="search">Search</label>
        <input type="text" placeholder='search' />
      </div>
    </>
  )
}

export default Sidebar