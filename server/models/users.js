import mongoose from 'mongoose';
 const { Schema } = mongoose;

const UserSchema = new Schema({
    username: { type: String, required: true ,unique:true}, 
    email: { type: String, trim: true, required: true ,unique:true},
    password: { type: String, trim: true, required: true, min: 6, max: 20 },
}, { timestamps: true });

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;


