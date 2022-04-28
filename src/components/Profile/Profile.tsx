import React from "react";
import {IUser} from '../../types/types';
import {useParams} from 'react-router-dom';
interface ProfileProps {
  users: IUser[];
}

const Profile: React.FC<ProfileProps>= ({users}) => {
  const { id } = useParams<{ id: string }>();

const index = Number(id)

const user:IUser|undefined =users.length>0? users.find((item:IUser )=> item.id===index):undefined

  return (
    <div className='profile'>
   
  {user?user.name:null}

  </div>
  )
}
export default Profile;


