import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import routes from './routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

const port = process.env.API_PORT || 5000;

app.listen(port, () => {
  console.log(`App listening on port ${port}! 🚀`);
});

