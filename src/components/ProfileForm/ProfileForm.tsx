import React from "react";
import { IUser } from '../../types/types';
import Button from "../Button/Button";
import { useFormsInputs, IValues } from "../useFormsInputs/useFormsInputs";
import './ProfileForm.scss'

interface ProfileFormProps {
  user: IUser | undefined;
  isDisabled: boolean;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ user, isDisabled }) => {
  const [errors, showErrors ] = React.useState<boolean>(false)
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
      validators: [
        (s: string) => !s.length && 'Поле обязательно для заполнения',
        (s: string) => s.length < 2 && 'Минимальная длина строки 2',
        (s: string) => s.length > 60 && 'Мфксимальная длина строки 60',
      ],
    },
    username: {
      value: `${(user && user.username)}`,
      type: 'text',
      label: "User name",
      required: true,
      validators: [
        (s: string) => s.length < 2 && 'Минимальная длина строки 2',
        (s: string) => s.length > 60 && 'Максимальная длина строки 60',
      ],
    },
    email: {
      value: `${user && user.email}`,
      type: 'text',
      label: "E-mail",
      required: true,
      validators: [
        (s: string) => !(/[^@\s]+@[^@\s]+\.[^@\s]+/).test(s)&& 'Введите валидный e-mail',
      ],
    },
    street: {
      value: `${user && user.address.street}`,
      type: 'text',
      label: "Street",
      required: true,
      validators: [
        (s: string) => s.length < 2 && 'Минимальная длина строки 2',
        (s: string) => s.length > 60 && 'Максимальная длина строки 60',
      ],
    },
    city: {
      value: `${user && user.address.city}`,
      type: 'text',
      label: "City",
      required: true,
      validators: [
        (s: string) => s.length < 2 && 'Минимальная длина строки 2',
        (s: string) => s.length > 60 && 'Максимальная длина строки 60',
      ],
    },
    zipcode: {
      value: `${user && user.address.zipcode}`,
      type: 'text',
      label: "Zip code",
      required: true,
      validators: [
        (s: string) => !(/[1-9-]+/).test(s)&& 'Введите валидный zipcode',
      ],
    },
    phone: {
      value: `${user && user.phone}`,
      type: 'text',
      label: "Phone",
      required: true,
      validators: [
        (s: string) => s.length < 2 && 'Минимальная длина строки 2',
        (s: string) => s.length > 60 && 'Максимальная длина строки 60',
      ],
    },
    website: {
      value: `${user && user.website}`,
      type: 'text',
      label: "Website",
      required: true,
      validators: [
        (s: string) => !(/^(https?:\/\/)?([\w\.]+)\.([a-z]{2,6}\.?)(\/[\w\.]*)*\/?$/).test(s)&& 'Введите валидный website',
      ],
      
    },

  }

  const { fields, isValid } = useFormsInputs(formInputs);

  const { name, username, email, street, city, zipcode, phone, website } = fields;

  const onSubmit = ({ values }: { values: IValues }) => {
    console.log(values, 'submit');
  }

  const formFields = [name, username, email, street, city, zipcode, phone, website];
  
  return (
    <>
      <form className='profile__form' onSubmit={(e) => {
        e.preventDefault()

        if (isValid) {
          console.log(fields)
        }
        else {
          showErrors(true)
        }
      }}>
        <fieldset disabled={isDisabled}>
          {formFields.map((field, index) => (
            <>
              <label key={index} className='profile__label'>
                {field.label}
                <input
                  type='text'
                  className={!field.isValid ? 'profile__input_invalid' : ''}
                  value={field.value}
                  onChange={field.setState}
                />
              </label>
              {errors&&field.error && <span className="profile__error">{
                field.error
              }</span>}
            </>
          )
          )}
          <label className='profile__label'>
            Comment
            <textarea className="profile__comment"></textarea>
          </label>
        </fieldset>
        <Button className="button_send-form" onClick={() => { }} buttonText="Отправить" disabled={isDisabled} />
      </form>
    </>
  )
}
export default ProfileForm;
