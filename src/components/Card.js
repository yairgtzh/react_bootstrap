import React from 'react'


export default function Card({id, title, image, instructor, url}) {
  return (
    <div className='card text-center bg-dark'>
      <div className='card-body text-light'>
        <img src={image} alt='no image' className='image-widht'></img>
        <h4 className='card_title'>{title}</h4>
        <p className='card-text text-secondary text-light'>
         Instructor: {instructor}
        </p>
        <a href={url} className='btn btn-outline-secondary rounded-0 text-light'>
          Ir al sitio web
          </a>
      </div>
    </div>
  )
}
