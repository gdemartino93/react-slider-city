import React from 'react'
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';
const City = ({data,prev,next}) => {
    const {id,titolo,descrizione,durata,prezzo,img} = data;
  return (
    <>
    <div className='city'>
        <div className='city-img'>
            <GrFormPreviousLink className='prev' onClick={prev} />
            <img src={img} className=""></img>
            <GrFormNextLink className='next' onClick={next} /> 

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
    <div className='city-btn'>
    </div>
    </>
  )
}

export default City