import React from 'react'
import './Navbar.css'
import { adminAssets } from '../../assets/admin_assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={adminAssets.logo} alt="" />
        <p>Admin Panel</p>
        <img className='profile-image' src={adminAssets.profile_image} alt="" />
    </div>
  )
}

export default Navbar