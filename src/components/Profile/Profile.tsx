import './Profile.scss';
import React from "react";
import { IUser } from '../../types/types';
import { useParams } from 'react-router-dom';
import ProfileForm from '../ProfileForm/ProfileForm'
import Button from '../Button/Button';
interface ProfileProps {
  users: IUser[];
}

const Profile: React.FC<ProfileProps> = ({ users }) => {
  const { id } = useParams<{ id: string }>();

  const [isDisabled, changeDisabled] = React.useState<boolean>(true)

  const index = Number(id)

  const handleEditBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    changeDisabled(false)
  }

  const user: IUser | undefined = users.length > 0 ? users.find((item: IUser) => item.id === index) : undefined

  return (
    <section className='profile'>
      <div>
        <h2>Профиль пользоватeля</h2>
        <Button onClick={handleEditBtn} buttonText="Редактировать" className='button_edit-form' />
      </div>
      {user && <ProfileForm user={user} isDisabled={isDisabled} />}

    </section>
  )
}
export default Profile;


