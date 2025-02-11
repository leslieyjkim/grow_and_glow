import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Therapists = () => {

  const {speciality} = useParams()
  // console.log(speciality)

  const [filterTherapist, setFilterTherapist] = useState([])

  const {therapists} = useContext(AppContext)

  const applyFilter = () => {
    if(speciality) {
      setFilterTherapist(therapists.filter(therapist => therapist.speciality === speciality))
    } else {
      setFilterTherapist(therapists)
    }
  }


  useEffect(() => {
    applyFilter()
  },[therapists,speciality])

  return (
    <div>
      <p>Browse through the therapists specialist.</p>
      <div>
        <div>
          <p>ABA Therapy</p> 
          <p>Art Therapy</p>
          <p>Animal Therapy</p>
          <p>Music Therapy</p>
          <p>Occupational Therapy</p>
          <p>Language Therapy</p>
          <p>Psychological Therapy</p>
        </div> 
        <div>
          {
            filterTherapist.map((item,index)=>(
              <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                  <img className='bg-gray-50' src={item.image} alt=""/>
                  <div className='p-4'>
                      <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                          <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                      </div>
                      <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                      <p className='text-gray-600 text-sm'>{item.speciality}</p>
                  </div>
              </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default Therapists
