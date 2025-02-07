import React from 'react'
import {specialityData} from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div id='speciality'>
      <h1>Find by Speciality</h1>
      <p>Quickly find trusted therapists perfectly suited to your needs and book your appointment with ease.</p>
      <div>
        {specialityData.map((item,index)=>(
            <Link key={index} to={`/therapists/${item.speciality}`}>
                <img src={item.image} alt="" />
                <p>{item.speciality}</p>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu
