import React from 'react'
import './Sidebar.css'
import { adminAssets } from '../../assets/admin_assets/assets'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar-options'>
            <div className='sidebar-option'>
                <img src={adminAssets.add_icon} alt="" />
                <p>Add Items</p>
            </div>
            <div className='sidebar-option'>
                <img src={adminAssets.order_icon} alt="" />
                <p>List Items</p>
            </div>
            <div className='sidebar-option'>
                <img src={adminAssets.order_icon} alt="" />
                <p>Orders</p>
            </div>
        </div>

    </div>
  )
}

export default Sidebar