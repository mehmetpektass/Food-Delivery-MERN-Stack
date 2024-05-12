import React from 'react'
import './AppDownload.css'
import { frontendAssets } from '../../assets/frontend_assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>Daha iyi bir deneyim için indirin <br/>Fancy Mobil</p>
        <div className='app-download-platforms'>
            <img src={frontendAssets.play_store} alt="" />
            <img src={frontendAssets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload