import { Dispatch, SetStateAction } from 'react';
import Toast from 'react-native-toast-message';
import { IRouteErrors } from '../pages/Register';
import { delay } from './delay';

interface IErrorsResponse {
  message: {
    errors: {
      value: string,
      msg: string,
      param: string,
      location: Body
    }[]
  }
}

const fieldTypes = {
  "name": "Nome",
  "username": "Username",
  "email": "Email",
  "password": "Senha",
  "passwordConfirmation": "Confirmar senha"
}

type fields = 'name'|'username'|'email'|'password'|'passwordConfirmation'

export async function handleRegisterRouteErrors(
  errors: IErrorsResponse,
  setErrorState: Dispatch<SetStateAction<IRouteErrors>>
) {
  const errorsData = errors.message.errors
  
  for (let { param } of errorsData) {
    setErrorState((previousErrors) => ({
      ...previousErrors,
      [param]: true
    }))
  }

  for (let { param, msg } of errorsData) {
    Toast.show({
      type: 'error',
      position: 'bottom',
      text1: fieldTypes[param as fields],
      text2: msg,
      visibilityTime: 2500,
      bottomOffset: 100,
    })
    await delay(2000)
  }
}