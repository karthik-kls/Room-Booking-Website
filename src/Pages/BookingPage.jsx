import React from 'react'
import Bookings from '../Component/BookingPage/Bookings'
import { Bookingsdata } from '../Component/BookingPage/Bookingtable/Bookingsdata'
import Navbar from '../Component/Navbar/Navbar'
// import NewBookingsCmp from '../Component/NewBookings/NewBookingsCmp'

const BookingPage = () => {
  return (
    <div>
        <Navbar/>
        <div>
        <Bookings bookingdata={Bookingsdata}/>
        </div>
        <div>
          {/* <NewBookingsCmp/> */}
        </div>
        
    </div>
  )
}

export default BookingPage