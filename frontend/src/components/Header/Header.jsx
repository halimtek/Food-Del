/* eslint-disable no-unused-vars */
import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
import badgeFood from '../../assets/food_8.png'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-text">
        <p className="eyebrow">Fresh &amp; fast, every day</p>
        <h1 className="header-heading">
          <svg className="header-sunburst" viewBox="0 0 220 220" aria-hidden="true">
            {Array.from({ length: 20 }).map((_, i) => (
              <rect
                key={i}
                x="107"
                y="6"
                width="6"
                height={i % 2 === 0 ? 44 : 26}
                rx="3"
                transform={`rotate(${i * 18} 110 110)`}
              />
            ))}
          </svg>
          Cravings,
          <span className="header-highlight"><em>delivered hot.</em></span>
        </h1>
        <p className="header-sub">Real plates, real ingredients, dropped at your door in under 30 minutes. Pick a craving and we&apos;ll handle the rest.</p>
        <div className="header-cta-row">
          <a href='#explore-menu' className="btn btn-primary">View Menu</a>
          <div className="header-stats">
            <div className="header-stat"><strong>30 min</strong><span>avg. delivery</span></div>
            <div className="header-stat"><strong>500+</strong><span>dishes</span></div>
            <div className="header-stat"><strong>4.8</strong><span>kitchen rating</span></div>
          </div>
        </div>
      </div>

      <div className="header-art">
        <div className="header-art-frame">
          <img src={assets.header_img} alt="A freshly plated dish" />
        </div>
        <div className="header-badge">
          <img src={badgeFood} alt="" />
          <div>
            <p className="header-badge-label">Today&apos;s pick</p>
            <p className="header-badge-name">Veg Rolls</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
