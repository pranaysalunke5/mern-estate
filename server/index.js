import express from 'express';
import cors from 'cors';
import connectDB from './db/connect.js'; // Import the database connection function
import usersRouter from './routes/users.js'; // Import the users router

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', usersRouter); // Mount the usersRouter under the '/api' prefix

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




