import "reflect-metadata"
import './container'
import 'dotenv/config';
import { startConnection } from './typeorm'
import '@modules/Users/providers'
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import routes from './routes';
import { errors } from 'celebrate'
import AppError from './error/AppError'
const logger = require("./middlewares/Logger");

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

  logger.error(err)

  return res.status(400).json({
    message: 'Internal Server Error',
    status: 'error'
  })
})


app.listen(port, async () => {
  await startConnection()
  logger.info(`App listening on port ${port}! 🚀`)
});

