import UserModel from "../models/users.js";
import bcryptjs from 'bcryptjs'


export const signup = async (req,res) => {
  const {username,email,password} = req.body;
  const hashpassword = bcryptjs.hashSync(password,10)
  const newUser = new UserModel({username,email,password:hashpassword})
  try {
    await newUser.save()
    res.status(201).json('user create successfully')
  }catch (error){
    res.status(500).json(error.message)
  }
 
}