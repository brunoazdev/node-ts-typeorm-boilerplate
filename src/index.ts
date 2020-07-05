import express from 'express';
import Routes from './routes';

import './database/connect';

const app = express();
app.use(express.json());
app.use(Routes);

app.listen(3333, () => {
  console.log('server running on 3333');
});