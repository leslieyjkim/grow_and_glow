import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <div>
      {/* -------Left Side-------- */}
        <div>
            <img src={assets.appointment_img} alt="" />
        </div>

      {/* -------Right Side-------- */}
        <div>
            <div>
                <p>Book Appointment</p>
                <p>With 50+ Trusted Therapists</p>
            </div>
            <button>Create Account</button>
        </div>

    </div>
  )
}

export default Banner
