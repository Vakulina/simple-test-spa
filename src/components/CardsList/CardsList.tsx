import React from "react";
import { IUser } from '../../types/types';
import Card from '../Card/Card';
import './CardList.scss'

interface CardsListProps {
  users: IUser[];
}
const CardsList: React.FC<CardsListProps> = ({ users }) => {

  return (

    <div className="cardsList">
      <p className="cardsList__paragraf">Список пользователей</p>
      {users.map(user => {
        return <Card name={user.name} city={user.address.city} company={user.company.name} key={user.id} id={user.id} />
      })
      }
      <p className="cardList__count">Найдено <span>{users.length}</span> пользователей</p>
    </div>
  )
}
export default CardsList;