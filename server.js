import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

// Routes
import authRouter from "./router/authRouter.js";
import categoryRouter from "./router/categoryRouter.js";
import userRouter from "./router/userRouter.js";
import clothingRouter from "./router/clothingRouter.js";
import achivmentsRouter from "./router/achivmentsRouter.js";
import purchaseRouter from "./router/purchaseRouter.js";
import rankRouder from "./router/rankRouder.js";

// Middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';

import { dirname } from 'path';
import { fileURLToPath } from 'url'; 
import path from 'path';

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.static(path.resolve(__dirname, './client/dist')));
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/users', userRouter);
app.use('/api/clothing', clothingRouter);
app.use('/api/achivments', achivmentsRouter);
app.use('/api/purchase', purchaseRouter);
app.use('/api/rank', rankRouder);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/dist', 'index.html'));
});

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
