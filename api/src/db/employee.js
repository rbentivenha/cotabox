import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  particip: {
    type: Number,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now
  },
});

export default mongoose.model('Employee', employeeSchema);