import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import AuthRoute from './Routes/AuthRoute.js';
import UserRoute from './Routes/UserRoute.js';
import PostRoute from './Routes/PostRoute.js';
import UploadRoute from './Routes/UploadRoute.js';


//Routes
const app = express();


//to serve image for public (public folder)
app.use(express.static('public'));
app.use('/images', express.static('images'));


//middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const MONGO_URI= 'mongodb+srv://abhilasha047:abhilasha047@cluster0.l1x8z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const PORT = process.env.PORT || 5000;

mongoose.connect(MONGO_URI) 
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

    // mongoose.set('useFindAndModify', false);
dotenv.config();

// mongoose.connect
//     (process.env.MANGO_DB, { useNewUrlParser: true, useUnifiedTopology: true}
//     ).then(() =>
//         app.listen(process.env.PORT, () => console.log(listening at ${process.env.PORT}))
//     ).catch((error) =>
//         console.log('error')
//     )


    //use of routes

    app.use('/auth', AuthRoute);
    app.use('/user', UserRoute);
    app.use('/post', PostRoute);
    app.use('/upload', UploadRoute);