import mongoose from 'mongoose';

 
mongoose.connect(process.env.MONGO_URI, {
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
