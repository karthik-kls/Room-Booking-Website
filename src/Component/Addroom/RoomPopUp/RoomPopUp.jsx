import React, { useState } from 'react'
import Button from '../../Button/Button'
import '../RoomPopUp/Roomspop.css'
import InputComponent from './InputText/InputComponent'
import Selected from '../RoomPopUp/Amenities/Selected'
import { useEffect } from 'react'
import apiCall from '../../../Services/apiCall'


const 
RoomPopUp = ({setAddroom,roomData,Editingid,setEditingid}) => {

  const [formData,setFormData] = useState({
    roomNumber: "",
    adultCapacity: "",
    childCapacity: "",
    price: "",
    amenities:[]
  });

  useEffect(()=>{

  //   if(data)setFormData({roomNumber: data.roomnumber,
  //   adultCapacity: data.adultcapacity,
  //   childCapacity: data.childrencapacity,
  //   price: data.price});

  // },[data])

  if(Editingid) { setFormData (roomData.find(r=>r.id===Editingid))
  } 
  },[Editingid])

  const {roomNumber,adultCapacity,childCapacity,price,amenities} = formData;

  const onChange = (value,key)=>{
    setFormData({
      ...formData,
      [key]: value
    })
  }
  // const [select,setSelect]=useState([])
  


  const sentData=async(e)=>{
    e.preventDefault();
    let res;
    if(Editingid){
      res=await updateRoom()

    }
    else{
      res=await addRoom()
    }
    console.log(res);
 

  
    console.log(formData);
    //  apiCall("/rooms","POST",formData)
    // .then((res)=>console.log(res))
    closeWindow();
  };
  // const updateRoom=()=>apiCall(`/rooms/${formData.id}`,"PUT",formData)
  const updateRoom=()=>apiCall(`/rooms/${formData.id}`,"PUT",{...formData,amenities:formData.amenities.map(({text})=>({text}))})
  const addRoom=()=>apiCall("/rooms","POST",formData)

  const closeWindow=()=>{
    setAddroom(false)
    setEditingid(null)
  }

  const addAmenities=(value)=>{
    if( value && !amenities.map(a=>a.text).includes(value)){
    onChange([...amenities,{text:value}],"amenities")
    }
  }
  
  return (
    
    <div className='roomtablepop'>

    <div className='roomtitle2'>Room {roomNumber}
    
    <div className="close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height='28' width='38'onClick={
      closeWindow} ><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" /></svg></div>
    </div>

    <form onSubmit={sentData} >
    <InputComponent value={roomNumber} type='Number' text='Room Number'  setState={(value)=>onChange(value,"roomNumber")}/>
    <InputComponent value={adultCapacity} type='Number' text='Adult Capacity' setState={(value)=>onChange(value,"adultCapacity")}/>
    <InputComponent value={childCapacity}  type='Number' text='Children Capacity'setState={(value)=>onChange(value,"childCapacity")}/>
    <InputComponent value={price} type='Number' text='Price' setState={value=>onChange(value,"price")} />
    {Editingid &&  
    
    <div className="ammn">
    <div className="addtitle">Amenities</div>
    {/* <div className="addamm">Add Amenities</div> */}
    {/* <form action="" method='post'className='amneties' >
    <input className='boxdesign'  type="text" placeholder='Add Amneties' />
    <Button text='+Add' className='admentiesbttn' />
    </form> */}
    
    
    <select className='addselect'  onChange={(e)=>{addAmenities(e.target.value)}}>
          <option >Select</option>
          <option value="Television">Teleivsion</option>
          <option value="A/C">A/C</option>
          <option value="Fridge">Fridge</option>
          <option value="Water Heater">Water Heater</option>
          <option value="Coffe Make">Coffe Maker</option>
          <option value="Extra Bed">Extra Bed</option>
          <option value="Crib">Crib</option>


        </select>

      </div>
}
      <div className='selectdata'>
        {amenities.map((data, index) => {
          return (
            <Selected data={data.text} key={index} index={index} select={amenities} setSelect={(value)=>onChange(value,"amenities")} />
          )
        })}
   
   </div>
   <div className='pop-bttn'>
    <Button  text='Save'/> 
    </div>
    </form>
    </div>
    

  )
}
export default RoomPopUp;