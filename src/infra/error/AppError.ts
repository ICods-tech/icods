import { ValidationError } from "express-validator";

type IMessage = { errors: ValidationError[] } | string
type IStatusCode = number

export default class AppError {
  public readonly message: IMessage;
  public readonly statusCode: IStatusCode;

  constructor(message: IMessage = '', statusCode: number = 400) {
    this.message = message;
    this.statusCode = statusCode
  }
}
