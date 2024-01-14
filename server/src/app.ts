import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors'
import fs from 'fs/promises'
import con from './services';

var app = express();

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

import indexRouter from './routes/index'
import recordsRouter from './routes/records'
import ordersRouter from './routes/orders'

app.use('/', indexRouter);
app.use('/records', recordsRouter);
app.use('/orders', ordersRouter);

const loadRecords = async () => {
    const parentDir = 'C:\\Users\\peter\\Documents\\skol\\RPJ\\vinyl\\client\\public\\records'
    const covers = await fs.readdir(parentDir)
    let records: any = []
    
    covers.forEach(cover => {
        const hook = cover.split('.')[0]

        // cover, hook
        records.push(['/records/' + cover, hook])
    });
    con.query('INSERT INTO records (cover, hook) VALUES ?', [records], (err, results) => {
        if(err?.errno == 1062) console.log('DUPLICATE ENTRY ERROR WHILE LOADING RECORDS');

        console.log('Records loaded.')
    })
}

loadRecords();

export default app;
