import React from 'react'
import {assets} from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='bg-primary w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Grow and Glow, your trusted partner in connecting you with experienced therapists who understand your unique needs. We are committed to making therapy accessible, convenient, and tailored to support your well-being.</p>
          <p>At Grow and Glow, we recognize that finding the right therapist can be a challenge. Our platform simplifies the process, allowing you to explore available professionals, schedule sessions effortlessly, and manage your therapy journey with ease. Whether you're seeking support for mental health, stress management, or personal growth, we are here to help.</p>
          <b className='text-gray-800'>Our Commitment</b>
          <p>We believe that everyone deserves compassionate and professional mental health care. Our mission is to bridge the gap between therapists and clients, ensuring you have access to the care you need, when you need it. With a focus on confidentiality, flexibility, and quality service, we empower you to take control of your mental wellness.</p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-black transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-black transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE: </b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-black transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p >Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  )
}

export default About
