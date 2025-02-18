import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {

  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>   

      <div>
        <img src={assets.contact_image} alt="" />

        <div>
          <p>OUR OFFICE</p>
          <p>54709 Williams Station <br/> Suite 170, Washington, USA</p>
          <p>Tel: (111) 222-3333 <br/> Email: growandglow@gmail.com </p>
          <p>Careers at Grow and Glow</p>
          <p>Learn more about ou r teams and job openings.</p>
          <button>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
