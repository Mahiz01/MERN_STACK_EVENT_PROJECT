import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className ="hero">
      <img src='restaurant.jpg' alt='restuarant'/>
      <div className="item">
        <h3>
          Dream Maker
        </h3>
        <div>
          <h2>Your personalised dream planner</h2>
        <p>
          Big dreams comes True by small Commitments..!
        </p>
        <Link to="contact"  duration={500}>
            BOOK NOW
          </Link>
          </div>
      </div>
    </section>
  )
}

export default HeroSection