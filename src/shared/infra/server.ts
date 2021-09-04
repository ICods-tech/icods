import "reflect-metadata"
import '../container'
import { startConnection } from '@shared/infra/typeorm'
import '@modules/Users/providers'
import express, { Request, Response, NextFunction } from 'express';
import 'dotenv/config';
import cors from 'cors';
import routes from './routes';
import { errors } from 'celebrate'
import AppError from '@shared/error/AppError'

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

const port = process.env.API_PORT || 5000;

app.use(errors())
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
      status: 'error'
    })
  }

  console.error(err)

  return res.status(400).json({
    message: 'Internal Server Error',
    status: 'error'
  })
})


app.listen(port, async () => {
  await startConnection()
  console.log(`App listening on port ${port}! 🚀`);
});

