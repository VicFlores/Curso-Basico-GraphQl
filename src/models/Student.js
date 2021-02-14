import { Schema, model } from 'mongoose';

const studentSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  avatar: { type: String, required: true },
  phone: { type: Number, required: true, trim: true },
});

export default model('Student', studentSchema);
