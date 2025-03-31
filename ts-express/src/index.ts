import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import express from 'express';
import { AppRouter } from './AppRouter';

const app = express();
const router = AppRouter.getInstance();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["asdf"] }))
app.use(router);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
