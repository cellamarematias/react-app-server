import mongoose from 'mongoose';

const { Schema } = mongoose;

const couplesSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    userOne: {
        type: String,
        required: true,
        ref: 'Users',
    },
    userTwo: {
        type: String,
        required: true,
        ref: 'Users',
    },
    balance: {
        type: Number,
        default: 0,
        required: true,
    },
});

export default mongoose.model('Couples', couplesSchema);