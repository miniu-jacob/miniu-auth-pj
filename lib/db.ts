import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);

    console.log(`Successfully connected to MongoDB`);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error('An unknown error occurred');
    }
    process.exit(1);
  }
};

export default connectDB;
