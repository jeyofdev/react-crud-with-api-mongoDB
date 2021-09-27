import { model, Schema } from 'mongoose';

const userSchema = new Schema({
    name: { type: String, unique: true },
    content: String,
    skills: [{ title: String, votes: Number }],
});

const UserModel = model('user', userSchema);

export default UserModel;
