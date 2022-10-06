import React from 'react'
import { useState } from 'react'
import InputComponent from '../Addroom/RoomPopUp/InputText/InputComponent'
import Button from '../Button/Button'
import Button2 from '../Button/Button2'
import '../../Pages/Home.css'
import { useNavigate, useParams } from 'react-router-dom'
import apiCall from '../../../src/Services/apiCall'
import '../NewBookings/NewBookingCmp.css'
import { updateStatus } from '../../Services/api'
import { useEffect } from 'react'
// import { useEffect } from 'react'
const NewBookingsCmp = () => {
  const {id} = useParams();
  const Navigate =useNavigate()
  const [room, setRoom] = useState(null)
  const [Booking, setBooking] = useState(null)
  const [status,setStatus] = useState();
 const [submitData, setSubmitData] = useState({
  guestFirstName:"",
  guestLastName:"",
  checkInDate:"",
  checkOutDate:"",
  numberOfAdults:"",
  numberOfChildren:""
 })

 useEffect(()=>{
  if(!id) return;
  getBookingData();
 },[id]);


 const getBookingData = async()=>{
  const data = await apiCall(`/booking/${id}`);
  if(data){
    setSubmitData({
      ...data,
      checkInDate: data.checkInDate.split("T")[0],
      checkOutDate: data.checkInDate.split("T")[0]
    })
    setRoom(data.room);
    setStatus(data.status)
    setBooking(data)
  }
  console.log(data);
}


  const {guestFirstName,guestLastName,checkInDate,checkOutDate,numberOfAdults,numberOfChildren}=submitData
  const onChange = (value,key)=>{
    if(room)return
    setSubmitData({
      ...submitData,
      [key]: value
    })
  }

const book=async()=>{
  const booking=await addBook();
  setBooking(booking);
  // setBook(true)
  setStatus("Booked")
  setBooknow(true)

}

const formatBooking=()=>{
  return{
    ...submitData,
    checkInDate:new Date(submitData.checkInDate).toISOString(),
    checkOutDate: new Date(submitData.checkOutDate).toISOString()
  }
}

const getAvailableroom=async()=>{
  let room=await getRooms();
  if(room.id){
    setRoom(room);
    setGetAvailableroom(true)
    setShow(true)
  }
}

const changeStatus = async(status)=>{
  await updateStatus(Booking.id,status);
  setStatus(status)
}

const [Show, setShow] = useState(false)
  // const Bookroom =async(e)=>{
  //   e.preventDefault(); 
  //   console.log(submitData);
  //    let res=await addBook();
  
  // };



  const addBook=()=>apiCall("/booking","POST",{...formatBooking(),roomId:room.id,status:"Booked"})
  const getRooms=()=>apiCall("/get-rooms","POST",formatBooking())

  const [GetAvailableroom, setGetAvailableroom] = useState(false)
  const [Booknow, setBooknow] = useState(false)

  return (
    <div className='bookingbox' >
        <div className='bookingtitle'>New Bookings</div>
    
            <InputComponent value={guestFirstName} type='Text' text='Guest First Name' setState={(value)=>onChange(value,"guestFirstName") }/>
            <InputComponent value={guestLastName} type='Text' text='Guest Last Name' setState={(value)=>onChange(value,"guestLastName") }/>
            <InputComponent value={checkInDate} type='Date' text='Check In Date' setState={(value)=>onChange(value,"checkInDate") }/>
            <InputComponent value={checkOutDate} type='Date' text='Check Out Date' setState={(value)=>onChange(value,"checkOutDate") }/>
            <InputComponent value={numberOfAdults} type='Number' text='Number of Adult' setState={(value)=>onChange(value,"numberOfAdults") }/>
            <InputComponent value={numberOfChildren} type='Number' text='Number of Children' setState={(value)=>onChange(value,"numberOfChildren") }/>
            <div className="showget">
            {room&& <div className="room">
            <div className="roomshow-01">
              <div>Room No.</div>  <div className="roomshow">{room.roomNumber}</div> </div>
              <div className="priceshow-01"><div>at</div>
              <div className="priceshow"> Rs {room.price}</div>
              <div>per night</div> </div> 
              {status}
            </div> }
            </div>
            <div className='bookingbttns'>
              <div className='getbttn'>
           { <Button text='Get Available Room' disabled={room} func={getAvailableroom} />}
            </div>
            
              <div>
                {room &&
                <>
                <div className='getbttn'> 

               <Button2 classN='bttn2' disabled={status} text='Book' funcbtn={book} />
                <div className='back' onClick={()=>{Navigate(-1)}} >Back</div>
              </div>
                  <div style={{
                    display: "flex"
                  }}>
                    <Button2 classN='bttn2' disabled={status !== "Booked"} text="Check In" funcbtn={()=>{changeStatus("Check In")}}/>
                    <Button2 classN='bttn2' disabled={status !== "Check In"} text="Check Out" funcbtn={()=>{changeStatus("Check Out")}}/>
                    <Button2 classN='bttn2' disabled={status !== "Booked"} text="Cancel" funcbtn={()=>{changeStatus("Cancelled")}} />
                  </div>
                </>
              }
              </div>
              </div>
    </div>
  )
}

export default NewBookingsCmp