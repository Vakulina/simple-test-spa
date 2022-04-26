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
      <p>ФИО: {name}</p>
      <p>город: {city}</p>
      <p>компания: {company}</p>
    </div>
  )
}
export default Card;