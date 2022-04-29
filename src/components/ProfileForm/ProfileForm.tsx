import React from "react";
import { IUser } from '../../types/types';
import './ProfileForm.scss'

interface ProfileFormProps {
  user: IUser | undefined;
  isDisabled: boolean;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ user, isDisabled }) => {
const [name, setName] = React.useState<string|undefined>(user?user.name:undefined);
const [username, setUserName] = React.useState<string|undefined>(user?user.username:undefined);

/*const [name, setName] = React.useState<string|undefined>(user?user.name:undefined);
const [name, setName] = React.useState<string|undefined>(user?user.name:undefined);
const [name, setName] = React.useState<string|undefined>(user?user.name:undefined);
const [name, setName] = React.useState<string|undefined>(user?user.name:undefined);
const [name, setName] = React.useState<string|undefined>(user?user.name:undefined);
const [name, setName] = React.useState<string|undefined>(user?user.name:undefined);
const [name, setName] = React.useState<string|undefined>(user?user.name:undefined);*/
  return (
       
      <form className='profile__form' noValidate>
        <fieldset disabled={isDisabled}>
            <label
              className='profile__label'
              htmlFor='name'>Name</label>
            <input
              className='profile__input'
              name='name'
              type="text"
              minLength={2}
              maxLength={30}
              pattern='[A-Za-zа-яА-Я -_.]+'
              required
              id='name'
              value={name}
               />
                           <label
              className='profile__label'
              htmlFor='user'>User</label>
            <input
              className='profile__input'
              name='user'
              type="text"
              minLength={2}
              maxLength={30}
              pattern='[A-Za-zа-яА-Я -_.]+'
              required
              id='user'
              value={username}
               />
           
           </fieldset>
      </form>


  )
}
export default ProfileForm;
