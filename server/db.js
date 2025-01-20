import mongoose from 'mongoose';

const mongoURI =
process.env.NODE_ENV === 'production'
  ? process.env.MONGO_URI 
  : 'mongodb://localhost:27017/AJIO'; 

mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected successfully');
});

mongoose.connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

export default  mongoose;
