import UserModel from '../models/users.js';
import bcrypt from 'bcrypt'

export const register = async (req, res) => {
    try {
        const { name, email, password, secret } = req.body;

        // Validate required fields
        if (!name || !email || !password || !secret) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

        // Create new user
        const newUser = new UserModel({
            name,
            email,
            password: hashedPassword, // Store hashed password
        });

        // Save user to the database
        await newUser.save();

        res.status(201).json(newUser);
        
    } catch (error) {
        console.error('Error in registration:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

