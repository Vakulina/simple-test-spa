import React from "react";
import { IUser } from '../../types/types';
import './ProfileForm.scss'

interface ProfileFormProps {
  user: IUser | undefined;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ user }) => {
const [name, setName] = React.useState<string|undefined>(user?user.name:undefined);

  return (
       
      <form className='profile__form' noValidate>
        <fieldset disabled>
            <label
              className='profile__label'
              htmlFor='profile-name'>Name</label>
            <input
              className='profile__input'
              name='name'
              type="text"
              minLength={2}
              maxLength={30}
              pattern='[A-Za-zа-яА-Я -]+'
              required
              id='register-name'
              value={name}
             
               />
           
           </fieldset>
      </form>


  )
}
export default ProfileForm;
