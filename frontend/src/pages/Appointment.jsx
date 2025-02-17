import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const Appointment = () => {
  const { therapistId } = useParams();
  const { therapists, currencySymbol } = useContext(AppContext);

  const [therapistInfo, setTherapistInfo] = useState(null);
  const [therapistSlots, setTherapistSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  //1st version had an error using 'async' it crashed and sometimes couldn't get the info.
  //Below is the 1st version I removed:

  // const fetchTherapistInfo = async () => {
  // const therapistInfo = therapists.find(therapist => therapist._id === therapistId)
  // setTherapistInfo(therapistInfo)
  // console.log(therapistInfo)  
  // }

  //Below is my updated version I added this instead of previous block.
  const fetchTherapistInfo = () => {
    if (therapists && therapists.length > 0) {
      const info = therapists.find(therapist => therapist._id === therapistId);
      setTherapistInfo(info || null);  // Explicitly set to null if not found
    }
  };


  const getAvailableSlots = async () => {
    setTherapistSlots([])

        // getting current date
        let today = new Date()

        for (let i = 0; i < 7; i++) {
            // getting date with index 
            let currentDate = new Date(today)
            currentDate.setDate(today.getDate() + i)

            // setting end time of the date with index
            let endTime = new Date()
            endTime.setDate(today.getDate() + i)
            endTime.setHours(21, 0, 0, 0)

            // setting hours 
            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
            } else {
                currentDate.setHours(10)
                currentDate.setMinutes(0)
            }

            let timeSlots = []


            while (currentDate < endTime) {
              let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

              // Add slot to array
              timeSlots.push({
                  datetime: new Date(currentDate),
                  time: formattedTime
              })

              // Increment current time by 30 minutes
              currentDate.setMinutes(currentDate.getMinutes() + 30)
          }


      setTherapistSlots(prev => ([...prev, timeSlots]))
    }
  }



  useEffect(() => {
    if (therapists && therapists.length > 0 && therapistId) {
      fetchTherapistInfo();
    }
  }, [therapists, therapistId]);


  useEffect(()=>{
    getAvailableSlots()
  },[therapistInfo])


  useEffect(()=>{
    console.log(therapistSlots);
  },[therapistSlots])


  return therapistInfo && (
    <div>
      {/* -----------Therapist Details----------- */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          {therapistInfo ? (
            <div>
              {therapistInfo.image ? (
                <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={therapistInfo.image} />
              ) : (
                <p>No image available for this therapist.</p>
              )}
            </div>
          ) : (
            <p>Loading therapist details...</p>
          )}
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0 '>
          {/* ----------------Therapist Info: name, degree, experience ---------------- */}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
             {therapistInfo.name}
            <img className='w-5' src={assets.verified_icon} />
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{therapistInfo.degree} - {therapistInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{therapistInfo.experience}</button>
          </div>

          {/* ---------------Therapist About ------------------- */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} /></p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{therapistInfo.about}</p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>Appointment fee: <span className='text-gray-600'>{currencySymbol}{therapistInfo.fees}</span></p>
        </div>

      </div>
    </div>
  );
};

export default Appointment;
