import React from 'react'

const EachItem = ({id,title,link, modifyList, randomlist}) => {

const theClick = () =>{
    
    modifyList(id)
    randomlist()

}

  return (
    <div className='card' onClick={()=> theClick() } >
        <img src={link} className="pics"></img>
        <div className='text'>{title}</div>
    </div>
  )
}

export default EachItem