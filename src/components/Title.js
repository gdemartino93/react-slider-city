import React from 'react'

const Title = ({name}) => {
  return (
    <div className='d-flex justify-content-center'>
        <h1>{name || "Titolo"}</h1>
    </div>
  )
}

export default Title