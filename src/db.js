import mongoose from 'mongoose';

require('dotenv').config({ path: '.env' });

const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGODB, config);
    console.log('🔌 Database is connected 🔌');
  } catch (error) {
    console.error(`Database error: ${error}`);
  }
};

export default db;
