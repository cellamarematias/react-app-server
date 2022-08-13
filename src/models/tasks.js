import mongoose from 'mongoose';

const { Schema } = mongoose;

const tasksSchema = new Schema({
  user: {
    type: String,
    required: false,
    ref: 'Users',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: () => Date.now() + 7*24*60*60*1000,
    require: true
},
  done: {
    type: String,
    default: 'pending',
    required: true,
  },
  uid: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Tasks', tasksSchema);