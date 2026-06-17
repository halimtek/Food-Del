/* eslint-disable no-unused-vars */
import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <svg className="app-download-sunburst" viewBox="0 0 220 220" aria-hidden="true">
          {Array.from({ length: 24 }).map((_, i) => (
            <rect
              key={i}
              x="107"
              y="4"
              width="6"
              height={i % 2 === 0 ? 50 : 28}
              rx="3"
              transform={`rotate(${i * 15} 110 110)`}
            />
          ))}
        </svg>
        <p className="eyebrow app-download-eyebrow">Take it with you</p>
        <p className="app-download-title">For a better experience,<br />download the InjeraGo app</p>
        <div className="app-download-tear"></div>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="Get it on Google Play" />
            <img src={assets.app_store} alt="Download on the App Store" />
        </div>


    </div>
  )
}

export default AppDownload
