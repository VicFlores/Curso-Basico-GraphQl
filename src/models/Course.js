import { Schema, model } from 'mongoose';

const courseSchema = Schema({
  title: { type: String, required: true, trim: true },
  teacher: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  topic: { type: String, required: true, trim: true },
  level: { type: String, required: true },
  student: { type: Schema.Types.ObjectId, ref: 'Student' },
});

export default model('Courses', courseSchema);
