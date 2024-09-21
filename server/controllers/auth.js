import UserModel from "../models/users.js";
import bcryptjs from 'bcryptjs'


export const signup = async (req,res,next) => {
  const {username,email,password} = req.body;
  const hashpassword = bcryptjs.hashSync(password,10)
  const newUser = new UserModel({username,email,password:hashpassword})
  try {
    
    await newUser.save()
    res.status(201).json('user create successfully')
  }catch (error){
  next(error)
  
  }
}

export const signin = async (req,res,next) => {
  const {email,password} =req.body;
  try {
    const validUser = await User.findOne({email});
    if(!validUser) return next("user not found")
      const validPassword = bcryptjs.compareSync(password,validUser.password)
  }catch(error){
    next(error)
  }
}
