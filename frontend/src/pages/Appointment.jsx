import React, { useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {AppContext} from '../context/AppContext'

const Appointment = () => {

  const {therapistId} = useParams()
  const {therapists} = useContext(AppContext)

  const [therapistInfo, setTherapistInfo] = useState(null)

  const fetchTherapistInfo = async () => {
    const therapistInfo = therapists.find(therapist => therapist._id === therapistId)
    setTherapistInfo(therapistInfo)
    console.log(therapistInfo);
  }

  useEffect(()=>{
    fetchTherapistInfo()
  },[therapists, therapistId])

  return (
    <div>
      
    </div>
  )
}

export default Appointment
