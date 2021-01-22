import { Schema, model } from 'mongoose';

const courseSchema = Schema({
  title: { type: String, required: true, trim: true },
  teacher: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  topic: { type: String, required: true, trim: true },
});

export default model('Courses', courseSchema);
