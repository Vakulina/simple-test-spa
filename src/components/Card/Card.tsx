import React from 'react';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import './Card.scss'
interface CardProps {
  id: number,
  name: string,
  city: string,
  company: string,
}

const Card: React.FC<CardProps> = ({ id, name, city, company }) => {
  const navigation = useNavigate();
  
  const handleClick=(e: React.MouseEvent<HTMLButtonElement>)=>{
    console.log("fff")
    navigation(`/${id}`)
  }

  return (
    <div className='card'>
      <p>ФИО: <span>{name}</span></p>
      <p>город: <span>{city}</span></p>
      <p>компания: <span>{company}</span></p>
      <Button onClick={handleClick} buttonText="Подробнее" className="button_at-card" />
    </div>
  )
}
export default Card;