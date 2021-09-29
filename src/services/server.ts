import express, { Request, Response } from 'express';
import * as http from 'http';
import { mongoose } from '../db/mongoose'
import apiRouter from '../routes/index';

mongoose();
const app = express();
const server = new http.Server(app);

app.set('json spaces', 2);
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
	res.json({ msg: 'Connected to the API' });
});
app.use('/api', apiRouter);

export default server;