import React from 'react'
import '../Addroom/Roomtable.css'
import Datatable from './Datatable'

const Roomtable = ({roomData ,setEditingid,setEditbtn ,setdeleteId,deleteRoom}) => {
  return (
   <div className='roomtabletitle'>
    <div className="mainroomtable">
    <div className='room3'>
    <div className='roomtext'>Room Number</div>
    <div className='roomtext'>Adult Capacity</div>
    <div className='roomtext'>Children Capacity</div>
    <div className='roomtext'>Price</div>
    
  
    </div>
    <div>
    <div className='roomtext'>Edit</div>
    </div>
    </div>
    <div className='list'>
    {roomData.map((data,index)=>{
        return(
            <Datatable data={data}  key={data.id}  setEditingid={setEditingid} setEditbtn={setEditbtn}  deleteRoom={deleteRoom}  setdeleteId={setdeleteId} />

        )
    })}
    </div>
   </div>
  )
}
// setEditbtn={setEditbtn} setisEditing={setisEditing

export default Roomtable