import React from 'react'
import { Link } from 'react-router-dom';

function CardItems(props) {
  const { path, src, text, label } = props
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={path}>
          <figure className='cards__item__pic-wrap' data-category={label}>
            <img
              className='cards__item__img'
              alt='Projekty'
              src={src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{text}</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
        </Link>
      </li>
    </>
  )
}

export default CardItems;
