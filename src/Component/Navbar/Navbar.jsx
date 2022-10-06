
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import bag from '../Navbar/bag.png'
import { useState } from 'react'
import BurgerButton from '../BurgerButton/BurgerButton'



const Navbar = () => {
  const [burger, setBurger] = useState(false)
  console.log(burger);
  return (
    <div className='navbar'>
      <div className='system'>
        <img src={bag} alt="" className='bagg'  height='80' width='71' />
        <p><NavLink to="/" className='title' >Booking System</NavLink></p>
          <div >
          <NavLink to="/" className={({isActive})=>(isActive?'selected':'link')} >HomePage</NavLink> </div>
   
          <div  >
          <NavLink to="/room"className={({isActive})=>(isActive?'selected':'link')} >Room</NavLink>
          </div>
          <div >
          <NavLink to="/Booking"  className={({isActive})=>(isActive?'selected':'link')} >Booking</NavLink>
          </div>

      

      </div>

      <div className="right">
    <div className='icon2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  height='26' width='34' ><path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM256 272c39.8 0 72-32.2 72-72s-32.2-72-72-72s-72 32.2-72 72s32.2 72 72 72z" /></svg></div>
      <div className='name'>Administrator</div>
        <div className='icon'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height='20' width='34' fill='orange'><path d="M160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96C43 32 0 75 0 128V384c0 53 43 96 96 96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32h64zM504.5 273.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32H320v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z"/></svg></div>
        <div className='menu' onClick={()=>{setBurger(!burger)}} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height='30' width='34' ><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></div>
      </div>
    {burger&&(<BurgerButton/>)}
      

     
    


    </div>
  )
}

export default Navbar