import React from 'react'
import '../Addroom/Roomdetails.css' 
import Roomtable from './Roomtable'
import Button from '../Button/Button'
import RoomPopUp from './RoomPopUp/RoomPopUp'
import { useState , useEffect } from 'react'
import apiCall from '../../Services/apiCall'
import Button2 from '../Button/Button2'
const Roomdetails = ({data, amdata, setEditbtn}) => {

   const [addroom,setAddroom]=useState(false);
    const [roomData,setRoomdata]=useState([]);
    const [Editingid, setEditingid] = useState(null)
    const [deleteId, setdeleteId] = useState(null)
  
    // const [editbtn, setEditbtn] = useState(false)

    useEffect(() => {
      // fetch("http://localhost:8000/rooms")
      apiCall("/rooms")
      // .then(res=>res.json())
      .then(response=>{
        console.log(response);
        setRoomdata(response);
      })
    
    }, [addroom ,deleteId])
    

    const deleteRoom=async()=>{
      const res=await apiCall(`/rooms/${deleteId}`,"DELETE")
      setdeleteId(null)
    }


    function Popuproom() {
      setAddroom(true);
      
    }



  return (
    <div className='roombox'>
        <div className='room01'>
        <div className='roomtitle'>Rooms</div>

        {/* <Addroombtn className='btnroom'/> */}
        <Button text='+AddRoom' func={Popuproom}/>
        </div>
        <Roomtable roomData={roomData} setEditbtn={setAddroom}  setEditingid={setEditingid} Editingid={Editingid} deleteRoom={deleteRoom}  setdeleteId={setdeleteId} />
        
        
      <div className={addroom || deleteId?"Popuproom":""}  >
      {addroom && <RoomPopUp roomData={roomData} setAddroom={setAddroom} setEditingid={setEditingid}  Editingid={Editingid}/>}
      

      {deleteId &&
      <div className="deleteId">
      <div className="warning">Are you sure, you want to Delete ?</div>
      <div className="deletebttns">
      <Button2 text='Delete' funcbtn={deleteRoom} classN='deletebttn'/>
      <Button2 text='No' funcbtn={()=>setdeleteId(null)} classN='deletebttn' />
      </div>
    


      </div>
    }
</div>

    </div>



  )
}

export default Roomdetails;