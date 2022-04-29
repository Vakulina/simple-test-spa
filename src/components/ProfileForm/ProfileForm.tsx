import React from "react";
import { IUser } from '../../types/types';
import Button from "../Button/Button";
import { useForm, IValues } from "../useForm/useForm";
import './ProfileForm.scss'

interface ProfileFormProps {
  user: IUser | undefined;
  isDisabled: boolean;
}


const ProfileForm: React.FC<ProfileFormProps> = ({ user, isDisabled }) => {
  /*  value?: string;
    type?: string;
    label?: string;
    error?: string;
    isValid?: boolean;
    required?: boolean;
    touched?: boolean;
    setState?: (event: ChangeEvent<HTMLInputElement>) => {};
    validators?: IValidatorFN[];*/
  const formInputs = {
    name: {
      value: `${(user && user.name)}`,
      type: 'text',
      label: "Name",
      required: true,
    },
    username: {
      value: `${(user && user.username)}`,
      type: 'text',
      label: "User name",
      required: true,
    },
    email: {
      value: `${user && user.email}`,
      type: 'text',
      label: "E-mail",
      required: true,
    },
    street: {
      value: `${user && user.address.street}`,
      type: 'text',
      label: "Street",
      required: true,
    },
    city: {
      value: `${user && user.address.city}`,
      type: 'text',
      label: "City",
      required: true,
    },
    zipcode: {
      value: `${user && user.address.zipcode}`,
      type: 'text',
      label: "Zip code",
      required: true,
    },
    phone: {
      value: `${user && user.phone}`,
      type: 'text',
      label: "Phone",
      required: true,
    },
    website: {
      value: `${user && user.website}`,
      type: 'text',
      label: "Website",
      required: true,
    },

  }

  const { fields, isValid, handleSubmit } = useForm(formInputs);

  const { name, username, email, street, city, zipcode, phone, website } = fields;

  const onSubmit = ({ values }: { values: IValues }) => {
    console.log(values, 'submit');
  }

  const formFields = [name, username, email, street, city, zipcode, phone, website];
  /*const [name, setName] = React.useState<string|undefined>(user?user.name:undefined);
const [username, setUserName] = React.useState<string|undefined>(user?user.username:undefined);



/*const [name, setName] = React.useState<string|undefined>(user?user.name:undefined);
const [name, setName] = React.useState<string|undefined>(user?user.name:undefined);
const [name, setName] = React.useState<string|undefined>(user?user.name:undefined);
const [name, setName] = React.useState<string|undefined>(user?user.name:undefined);
const [name, setName] = React.useState<string|undefined>(user?user.name:undefined);
const [name, setName] = React.useState<string|undefined>(user?user.name:undefined);
const [name, setName] = React.useState<string|undefined>(user?user.name:undefined);*/


  /*      <form className='profile__form' noValidate >
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
    
                 />
             
          
             </fieldset>
             <Button onClick={()=>{handleSubmit(onSubmit)}}  buttonText="Отправить" className="button_submit-form"/>
        </form>*/
  return (

    <>
      <form className='profile__form' onSubmit={handleSubmit(onSubmit)}>

        <fieldset disabled={isDisabled}>

          {formFields.map((field, index) => (

       
              <label key={index}
                className='profile__label'
              >
                {field.label}
                <input
                  type='text'

                  value={field.value}

                />
              </label>

          )

          )}
          <label className='profile__label'>
            Comment
            <textarea className="profile__comment"></textarea>
          </label>
   
 

        </fieldset>
        <Button className="button_send-form" onClick={()=>{}} buttonText="Отправить" disabled={isDisabled}/>
      </form>



    </>

  )
}
export default ProfileForm;
