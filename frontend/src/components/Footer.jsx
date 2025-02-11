import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div>
                {/* ---------Left Section--------- */}
                <div>
                    <img src={assets.logo} alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum turpis lacus, mattis at mi a, aliquet suscipit metus. Praesent et ipsum ex. Phasellus tortor neque, egestas id mattis vitae, posuere ac odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac lacus ac nibh cursus aliquet at non quam. Nullam eget sollicitudin diam. Quisque massa dolor, pellentesque sed tortor et, porta varius tellus. Pellentesque pretium nulla sit amet cursus dictum.</p>
                </div>
                {/* ---------Center Section--------- */}
                <div>
                    <p>COMPANY</p>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                {/* ---------Right Section--------- */}
                <div>
                     <p>GET IN TOUCH </p>
                     <ul>
                        <li>+1-222-333-4444</li>
                        <li>growandglow@gmail.com</li>
                     </ul>
                                        
                </div>
            </div>

            {/* ----------Copyright Text---------- */}
            <div>
                <hr />
                <p>Copyright 2025@ Growandglow - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
