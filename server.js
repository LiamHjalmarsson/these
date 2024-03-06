import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

// Routes
import authRouter from "./router/authRouter.js";
import categoryRouter from "./router/categoryRouter.js";
import userRouter from "./router/userRouter.js";


// Middlware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());

app.get('/api/test', (req, res) => {
    res.json({ msg: 'test route' });
});

app.use('/api/auth', authRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/users', userRouter);

app.use('*', (req, res) => {
    res.status(404).json({ msg: 'not found' });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () => {
        console.log(`server running on PORT ${port}....`);
    });
} catch (error) {
    console.log(error);
    process.exit(1);
}