import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { updateStatus } from '../../../Services/api';

const DatasBooking = ({data}) => {

  const[status,setStatus] = useState(data.status);

  const navigate = useNavigate();

  const changeStatus = async(newStatus)=>{
    const res = await updateStatus(data.id,newStatus);
    if(res.status){
      setStatus(newStatus);
    }
  }

  const formatDate = (date)=>{
    return (new Date(date)).toDateString();
  }


  return (
        <div className='datasbookings'>
         <div className='fstname' onClick={()=>{
              navigate(`/booking/${data.id}`)
            }}>{data.guestFirstName}</div>
            <div>{data.guestLastName}</div>
            <div>{data.room.roomNumber}</div>
            <div className='green'>{formatDate(data.checkInDate)}</div>
            <div className='red'>{formatDate(data.checkOutDate)}</div>
            <div className='orange'>
              {status === "Booked" &&
              <>
                {status}
                <button className='bttn3' onClick={()=>changeStatus("Check In")}>Checked In</button>
                <button className='bttn3' onClick={()=>changeStatus("Cancelled")}>Cancel</button>
              </>
              }
              {status === "Check In" &&
              <>
                {status}
                <button className='bttn3' onClick={()=>changeStatus("Check Out")}>Checked Out</button>
              </>
              }
              {(status === "Check Out" || status === "Cancelled") &&
              <>
                {status}
              </>
              }

            </div>
        </div>
  )
}
export default DatasBooking
