import React from 'react'

const City = ({data}) => {
    const {id,titolo,descrizione,durata,prezzo,img} = data;
  return (
    <div className='city'>
        <div className='city-img'>
            <img src={img}></img>
        </div>
        <div className='city-info'>
            <h2>{titolo}</h2>
            <p>{descrizione}</p>
            <div>
                <span>{durata}</span>
                <span>{prezzo}</span>
            </div>

            
        </div>
    </div>
  )
}

export default City