import React from 'react'

const City = ({nome}) => {
  return (
    <div className='city'>
        <div className='city-img'>

        </div>
        <div className='city-info'>
            <h2>nome {nome} città</h2>
            <p>Descrizione</p>
            <div>
                <span>Durata giorni</span>
                <span> Costo</span>
            </div>

            
        </div>
    </div>
  )
}

export default City