import mongoose from 'mongoose';

const { Schema } = mongoose;

const tasksSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: 'Users',
  },
//   projectId: {
//     type: Schema.Types.ObjectId,
//     required: true,
//     ref: 'Project',
//   },
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
    type: Boolean,
    default: false,
    required: true,
  },
});

export default mongoose.model('Tasks', tasksSchema);