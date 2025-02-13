import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Appointment = () => {
  const { therapistId } = useParams();
  const { therapists } = useContext(AppContext);

  const [therapistInfo, setTherapistInfo] = useState(null);

  const fetchTherapistInfo = () => {
    if (therapists && therapists.length > 0) {
      const info = therapists.find(therapist => therapist._id === therapistId);
      setTherapistInfo(info || null);  // Explicitly set to null if not found
    }
  };

  useEffect(() => {
    if (therapists && therapists.length > 0 && therapistId) {
      fetchTherapistInfo();
    }
  }, [therapists, therapistId]);

  return therapistInfo && (
    <div>
      {/* -----------Therapist Details----------- */}
      <div>
        <div>
          {therapistInfo ? (
            <div>
              {therapistInfo.image ? (
                <img src={therapistInfo.image} />
              ) : (
                <p>No image available for this therapist.</p>
              )}
            </div>
          ) : (
            <p>Loading therapist details...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
