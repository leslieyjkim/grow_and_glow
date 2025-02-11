import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Therapists = () => {

  const {speciality} = useParams()
  // console.log(speciality)

  const [filterTherapist, setFilterTherapist] = useState([])
  const navigate = useNavigate()
 
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
    <div className='text-gray-600'>
      <p>Browse through the therapists specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <p onClick={()=> speciality === 'ABA Therapy' ? navigate('/therapists') : navigate('/therapists/ABA Therapy')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer ${speciality === "ABA Therapy" ? "bg-indigo-100 text-black" : ""}`}>ABA Therapy</p> 
          <p onClick={()=> speciality === 'Art Therapy' ? navigate('/therapists') : navigate('/therapists/Art Therapy')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer ${speciality === "Art Therapy" ? "bg-indigo-100 text-black" : ""}`}>Art Therapy</p>
          <p onClick={()=> speciality === 'Animal Therapy' ? navigate('/therapists') : navigate('/therapists/Animal Therapy')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer ${speciality === "Animal Therapy" ? "bg-indigo-100 text-black" : ""}`}>Animal Therapy</p>
          <p onClick={()=> speciality === 'Music Therapy' ? navigate('/therapists') : navigate('/therapists/Music Therapy')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer ${speciality === "Music Therapy" ? "bg-indigo-100 text-black" : ""}`}>Music Therapy</p>
          <p onClick={()=> speciality === 'Occupational Therapy' ? navigate('/therapists') : navigate('/therapists/Occupational Therapy')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer ${speciality === "Occupational Therapy" ? "bg-indigo-100 text-black" : ""}`}>Occupational Therapy</p>
          <p onClick={()=> speciality === 'Language Therapy' ? navigate('/therapists') : navigate('/therapists/Language Therapy')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer ${speciality === "Language Therapy" ? "bg-indigo-100 text-black" : ""}`}>Language Therapy</p>
          <p onClick={()=> speciality === 'Psychological Therapy' ? navigate('/therapists') : navigate('/therapists/Psychological Therapy')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer ${speciality === "Psychological Therapy" ? "bg-indigo-100 text-black" : ""}`}>Psychological Therapy</p>
        </div> 
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
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
