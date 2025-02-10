import React from 'react'
import { therapists } from '../assets/assets'

const TopTherapists = () => {
  return (
    <div>
      <h1>Top Therapists to Book</h1>
      <p>Simply browse through our extensive list of trusted therapists.</p>
      <div>
        {therapists.slice(0,10).map((item,index)=>(
            <div>
                <img src={item.image} alt=""/>
                <div>
                    <div>
                        <p></p><p>Available</p>
                    </div>
                    <p>{item.name}</p>
                    <p>{item.speciality}</p>
                </div>
            </div>
        ))}
      </div>
      <button>more</button>
    </div>
  )
}

export default TopTherapists
