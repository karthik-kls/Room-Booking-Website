import React from 'react'
import Box from '../Box/Box'

    const Checkbox = ({boxicon,title,data,text}) => {
  return (
    <div className='box'>
        <div className='text'>
        <img src={boxicon} alt="" height='25px' width='25px' />
        <div style={{fontSize:"26px"}} className="Title" >{title}</div>
        </div>
        <div className='datas'>
          {data.map((data,index)=>
          {return(
          <Box data={data} key={index} text={text}/>
          )}
          
          )}

        </div>
       
    </div>
  )
}

export default Checkbox