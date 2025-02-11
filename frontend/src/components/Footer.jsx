import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                {/* ---------Left Section--------- */}
                <div>
                    <img className='mb-5 w-40' src={assets.logo} alt=""/>
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum turpis lacus, mattis at mi a, aliquet suscipit metus. Praesent et ipsum ex. Phasellus tortor neque, egestas id mattis vitae, posuere ac odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac lacus ac nibh cursus aliquet at non quam. Nullam eget sollicitudin diam. Quisque massa dolor, pellentesque sed tortor et, porta varius tellus. Pellentesque pretium nulla sit amet cursus dictum.</p>
                </div>
                {/* ---------Center Section--------- */}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                {/* ---------Right Section--------- */}
                <div>
                     <p className='text-xl font-medium mb-5'>GET IN TOUCH </p>
                     <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+1-222-333-4444</li>
                        <li>growandglow@gmail.com</li>
                     </ul>
                                        
                </div>
            </div>

            {/* ----------Copyright Text---------- */}
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2025@ Growandglow - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
