import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors'


var app = express();

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

import indexRouter from './routes/index'
import recordsRouter from './routes/records'

app.use('/', indexRouter);
app.use('/records', recordsRouter);

export default app;
