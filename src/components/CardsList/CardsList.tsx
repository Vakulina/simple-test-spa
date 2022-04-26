import React from "react";
import { IUser } from '../../types/types';
import Card from '../Card/Card';

interface CardsListProps {
users: IUser[];
}
const CardsList: React.FC<CardsListProps> = ({ users }) => {
  console.log(users[0])
  return (

    <div >
  {users.map(user => {
    return <Card name={user.name} city={user.address.city} company={user.company.name} key={user.id}/>  
     })}
    </div>
  )
}
export default CardsList;