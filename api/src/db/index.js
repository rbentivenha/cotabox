import mongoose from 'mongoose';
import Employee from './employee';

// SET UP Mongoose Promises.
mongoose.Promise = global.Promise;

export const startDB = ({ url, db }) => mongoose.connect(`mongodb://${url}/${db}`);

export const models = {
  Employee,
}
