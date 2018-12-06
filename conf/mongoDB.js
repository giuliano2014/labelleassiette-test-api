import mongoose from 'mongoose';
import {} from 'dotenv/config';

const mongoDB = `mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@ds117164.mlab.com:17164/${process.env.DATABASE_NAME}`;

mongoose.connect(mongoDB, {
  useCreateIndex: true,
  useNewUrlParser: true,
});

mongoose.Promise = global.Promise;

const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Bind connection to success event
db.once('open', () => console.log('MongoDB connection success'));
