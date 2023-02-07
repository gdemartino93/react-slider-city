import React from 'react'

const City = ({data}) => {
  return (
    <div className='city'>
        <div className='city-img'>
            <img src={data.img}></img>
        </div>
        <div className='city-info'>
            <h2>{data.titolo}</h2>
            <p>{data.descrizione}</p>
            <div>
                <span>{data.durata}</span>
                <span>{data.prezzo}</span>
            </div>

            
        </div>
    </div>
  )
}

export default City