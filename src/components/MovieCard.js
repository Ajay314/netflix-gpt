import React from 'react'


const MovieCard = ({primaryImage}) => {
  return (
    <div className='w-48 pr-4'>
        <img alt='Movie Card' 
        src={primaryImage} />
    </div>
  )
}

export default MovieCard