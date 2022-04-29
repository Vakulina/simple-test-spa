import React from "react";
import { IUser } from '../../types/types'

interface ProfileFormProps {
  user: IUser | undefined;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ user }) => {
const [name, setName] = React.useState<string|undefined>(user?user.name:undefined);

  return (
    <section className='profile'>
      
      <form className='profile__form ' noValidate>
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
              readOnly
               />
           

      </form>

    </section>
  )
}
export default ProfileForm;
