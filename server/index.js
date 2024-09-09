import express from 'express';
import cors from 'cors';
import connectDB from './db/connect.js'; 
import usersRouter from './routes/users.js'; 
import authRouter from './routes/auth.js'; 

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/user', usersRouter);
app.use('/api/auth', authRouter);

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal server error'
    return res.status(statusCode).json({
        success : false,
        statusCode,
        message,
    })

})



const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




