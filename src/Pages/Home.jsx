import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar/Navbar'
import './Home.css'
import Checkbox from '../Component/Checking/Checkbox';
import icon3 from './out.svg'
import icon4 from './in.svg'
// import {indata} from '../Component/Checking/Data'
// import {outdata} from '../Component/Checking/Outdata'
import apiCall from '../Services/apiCall';
const Home = () => {
  const [CheckinData, setCheckinData] = useState([])
  useEffect(() => {
    // fetch("http://localhost:8000/rooms")
    apiCall("/booking/today-check-in")
    // .then(res=>res.json())
    .then(response=>{
      console.log(response);
      setCheckinData(response);
    })
  
  }, [])


  const [CheckOutData, setCheckOutData] = useState([])
  useEffect(() => {
    // fetch("http://localhost:8000/rooms")
    apiCall("/booking/today-check-out")
    // .then(res=>res.json())
    .then(response=>{
      console.log(response);
      setCheckOutData(response);
    })
  
  }, [])
  return (
    <div>
    <Navbar/>
    <div className='roomimg'></div>
    <div className='details'>
    <Checkbox boxicon={icon4} data={CheckinData} title='Checked In Today'  text='Checked in'  />
    <Checkbox boxicon={icon3} data={CheckOutData} title='Checked Out Today' text='Checked out' />
    </div>
    </div>

  )
}

export default Home