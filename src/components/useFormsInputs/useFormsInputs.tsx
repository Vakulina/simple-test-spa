import { ChangeEvent, useState } from 'react';

type IValidatorFN = (s: string) => {};

export interface IField {
  value: string;
  type?: string;
  label: string;
  error?: string;
  isValid?: boolean;
  required?: boolean;
  setState?: (event: ChangeEvent<HTMLInputElement>) => {};
  validators?: IValidatorFN[];
}

export type ICustomField<T = {}> = IField & T;

export type ICustomObject<T = {}> = {
  [key: string]: ICustomField & T;
}

export type IValues = {
  [key: string]: string;
}

export type IForm = {
  fields: ICustomObject;
  isValid: boolean;

}

type IOptions = {
  [key: string]: string;
}

export const useFormsInputs = (initialFields: ICustomObject): IForm => {
  const form = Object.entries(initialFields).reduce((fields, [name, value]: any[]) => {
    const isString = typeof value === 'string';

    const field = {
      [name]: {
        type: 'text',
        value: (isString && value) || ((!isString && value.value) || ''),
        error: (!isString && value.error) || null,
        validators: (!isString && value.validators) || null,
        isValid: (!isString && value.isValid) || true,
        required: (!isString && value.required) || false,
        setState: (value: ChangeEvent<HTMLInputElement>) => handleInput(value, name),
        ...(!isString && value),
      },
    };

    return { ...fields, ...field };
  }, {});

  const [fields, setState] = useState<ICustomObject>(form);
  const [isValid, setFormValid] = useState<boolean>(true);

  const getFormValidationState = (fields: ICustomObject): boolean =>
    Object.entries(fields).reduce((isValid: boolean, [_, value]: any) => Boolean(Number(isValid) * Number(value.isValid)), true);


  const fieldValidation = (field: ICustomField, options: IOptions = {}) => {
    const { value, required, validators } = field;

    let isValid = true, error;


    if (required) {
      isValid = !!value;
    }

    if (validators && Array.isArray(validators)) {
      const results = validators.map(validateFn => {
        if (typeof validateFn === 'string') return validateFn;

        const validationResult = validateFn(value || '');

        return typeof validationResult === 'string' ? validationResult : '';
      }).filter(message => message !== '');

      if (results.length) {
        isValid = false;
        error = results[0];
      }
    }

    return { ...field, isValid, error, ...options };
  };

  const handleInput = (element: ChangeEvent<HTMLInputElement>, name: string) => {
    const input = fields[name];
    const value = element.target.value;

    const field = {
      ...input,
      value,
      isValid: true,
    };

    const validatedField = fieldValidation(field);

    setState((prevState: ICustomObject) => {
      const items = { ...prevState, [name]: validatedField };

      setFormValid(getFormValidationState(items));
      return items;
    });
  }


  return {
    fields,
    isValid
  }
}