import React, { useState } from 'react'
import data from './Data'
import EachItem from './EachItem'

const Items = ({modifyList}) => {

    const [dataList, SetDataList] = useState(data.cards)
    console.log(dataList)

    const randomlist = () =>{
        const newsample = dataList
        newsample.sort( () => .5 - Math.random() );
        SetDataList(newsample)

    }

  return (
    <div className='container'>
    {dataList.map(card =>(
        <EachItem key={card.id} id={card.id} title={card.title} link={card.link} modifyList={modifyList} randomlist={randomlist}></EachItem>
    ))}
    </div>
    
  )

}

export default Items