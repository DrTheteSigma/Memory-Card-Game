import React from 'react'

const EachItem = ({id,title,link, modifyList}) => {
  return (
    <div className='card' onClick={()=> modifyList(id)} >
        <img src={link} className="pics"></img>
        <div>{title}</div>
    </div>
  )
}

export default EachItem