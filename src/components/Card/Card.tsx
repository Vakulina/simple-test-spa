import React from 'react';
import './Card.scss'
interface CardProps {
  name: string,
  city: string,
  company: string,
}

const Card: React.FC<CardProps> = ({ name, city, company }) => {
  return (

    <div className='card'>
      <p>ФИО: <span>{name}</span></p>
      <p>город: <span>{city}</span></p>
      <p>компания: <span>{company}</span></p>
    </div>
  )
}
export default Card;