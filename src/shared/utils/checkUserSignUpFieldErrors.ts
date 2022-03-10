import { Request } from "express";
import { validationResult,  } from "express-validator";
import AppError from "../../infra/error/AppError";

export function checkUserSignUpFieldErrors(request: Request) {
  const errors = validationResult(request)

  if (!errors.isEmpty()) throw new AppError({ errors: errors.array() }, 404);
}
