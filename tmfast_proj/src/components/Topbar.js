import React, { useState } from 'react'

const Topbar = () => {
  const [dropdown, setDropdown] = useState(false)

  return (
    <nav>
      <div className='nav'>
        {/* <h2 className="logo">LOGO</h2> */}
        <img className='logo' src='./assets/Logo-70x230.jpg'></img>
        <img className='small-logo' src='./assets/Logo-70X70.jpg'></img>
        <div className='nav-items'>
          <div className='search-box'>
            <input
              type='text'
              className='search-input'
              placeholder='Search Proposal...'
            />
            <div className='search-icon'>
              <i className='fa-solid fa-magnifying-glass '></i>
            </div>
          </div>
          <div className='bell-icon'>
            <i className='fa-solid fa-bell'></i>
          </div>
          <div className='profile-name' onClick={() => setDropdown(!dropdown)}>
            <p className='profile-name-text'>John Smith</p>
            <i className='fa-solid fa-sort-down'></i>
            <div className={`dropdown-menu ${dropdown && `show-dropdown`}`}>
              <p className='dropdown-link'>Logout</p>
              <p className='dropdown-link'>Dropdown link</p>
              <p className='dropdown-link'>Dropdown link</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Topbar
