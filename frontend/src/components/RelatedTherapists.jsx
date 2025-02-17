import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


const RelatedTherapists = ({ speciality, therapistId }) => {

    const navigate = useNavigate()
    const { therapists } = useContext(AppContext)

    const [relTherapist, setRelTherapist] = useState([])

    useEffect(() => {
        if (therapists.length > 0 && speciality) {
            const therapistsData = therapists.filter((therapist) => therapist.speciality === speciality && therapist._id !== therapistId)
            setRelTherapist(therapistsData)
        }
    }, [therapists, speciality, therapistId])

    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900'>
            <h1 className='text-3xl font-medium'>Related Therapists</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted therapists.</p>
            <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {relTherapist.map((item, index) => (
                    <div onClick={() => { navigate(`/appointment/${item._id}`); window.scrollTo(0, 0) }} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                        <img className='bg-blue-100' src={item.image} alt="" />
                        <div className='p-4'>
                            <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                            </div>
                            <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                            <p className='text-gray-600 text-sm'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RelatedTherapists