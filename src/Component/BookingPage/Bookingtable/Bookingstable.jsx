import React from 'react'
import '../Bookingtable/Bookingstable.css'
import DatasBooking from './DatasBooking'

const Bookingstable = ({bookData}) => {
  return (
    <div className='booktabletitle'>
      <div className='Bookigstable'>
      <div className='bookingtext'>Guest Fist Name</div>
      <div className='bookingtext'>Guest Last Name</div>
      <div className='bookingtext'>Room Number</div>
      <div className='bookingtext' >Check in Date</div>
      <div className='bookingtext'>Check out Date</div>
      <div className='bookingtext'>Status</div>
      </div>
      <div className='bookslist'>
        {bookData.map((data,index)=>{
          return(
            <DatasBooking data={data} key={index} />
          )


        })}
         


      </div>



    </div>
  )
}

export default Bookingstable