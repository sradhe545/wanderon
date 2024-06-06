import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import {connect} from './config/database.js';
import cors from 'cors'
import apiRoutes from './routes/user.js'


const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
dotenv.config()

app.use('/api', apiRoutes);


app.listen(process.env.PORT, async () => {
    console.log(`Server started at ${process.env.PORT}`);
    await connect();
    console.log('Mongo db connected');
});