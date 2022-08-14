import React from 'react'
import data from './Data'
import EachItem from './EachItem'

const Items = ({modifyList}) => {

  return (
    <div className='container'>
    {data.cards.map(card =>(
        <EachItem key={card.id} id={card.id} title={card.title} link={card.link} modifyList={modifyList}></EachItem>
    ))}
    </div>
    
  )

}

export default Items