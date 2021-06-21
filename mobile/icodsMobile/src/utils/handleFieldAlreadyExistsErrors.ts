import { Dispatch, SetStateAction } from 'react';
import Toast from 'react-native-toast-message';
import { IRouteErrors } from '../pages/Register';
import { capitalizeWords } from './capitalizeWords';
import { delay } from './delay';

interface FieldExistsErrors {
  message: string
  statusCode: number
}

const fieldAlreadyExistsErrors = {
  "Usuário com esse Email já existe": 'email',
  "Usuário com esse Username já existe": 'username'
}

type fieldExistsMessages = "Usuário com esse Username já existe" | "Usuário com esse Username já existe"


export async function handleFieldAlreadyExistsErrors(
  errors: FieldExistsErrors[],
  setErrorState: Dispatch<SetStateAction<IRouteErrors>>
) {

  for (let { message } of errors) {
    setErrorState((previousErrors) => ({
      ...previousErrors,
      [fieldAlreadyExistsErrors[message as fieldExistsMessages]]: true
    }))
  }

  for (let { message } of errors) {
    Toast.show({
      type: 'error',
      position: 'bottom',
      text1: capitalizeWords(fieldAlreadyExistsErrors[message as fieldExistsMessages]),
      text2: message,
      visibilityTime: 2500,
      bottomOffset: 100,
    })

    await delay(2000)
  }
}