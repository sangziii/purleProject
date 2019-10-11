import express from 'express';
import path from 'path';
import globalRouter from './routers/globalRouter';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));
app.use('/static', express.static('static'));

app.use('/', globalRouter);

export default app;
