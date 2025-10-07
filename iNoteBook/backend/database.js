import mongoose from 'mongoose';

const mongoURI = 'mongodb://127.0.0.1:27017/iNoteBook'; 

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    process.exit(1);
  }
};

export default connectToMongo;
