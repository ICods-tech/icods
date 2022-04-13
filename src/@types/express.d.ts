declare namespace Express {
  export interface Request {
    user: {
      id: string
    },
    business: {
      id: string
    }
  }
}
