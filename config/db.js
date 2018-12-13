import mongoose from 'mongoose';
import {} from 'dotenv/config';

import { DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD } from './credentials';

const mongoDB = `mongodb://${DATABASE_USER}:${DATABASE_PASSWORD}@ds117164.mlab.com:17164/${DATABASE_NAME}`;

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
