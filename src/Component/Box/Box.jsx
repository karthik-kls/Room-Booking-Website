import React from 'react'
import { useNavigate } from 'react-router-dom';
const Box = ({data,inorout}) => {

  const formatDate = (date)=>{
    return (new Date(date)).toDateString();
  }
  const navigate = useNavigate();
  return (
    <div className='chkbox'>
    <div className='people'>
        <div className='names'>{data.guestFirstName}</div>
        {/* <div>{(data.status==='Booked'|| data.status==="Check In" )&& formatDate(data.checkInDate)}</div> */}
        {/* <div>{(data.status==='Check Out' )&& formatDate(data.checkOutDate)}</div> */}
        {/* <div>{formatDate(data.checkOutDate)}</div> */}
        
    </div>
    <div>{data.room.roomNumber}</div>
    <div></div>

    {/* <Button text={text} /> */}
    <div className='inorout' onClick={()=>{navigate(`/booking/${data.id}`)}} >{data.status}</div>
   
</div>



  )
}


export default Box