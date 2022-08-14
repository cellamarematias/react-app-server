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
        required: false,
        ref: 'Users',
    },
    balance: {
        type: Number,
        default: 0,
        required: true,
    },
    default: {
        type: Boolean,
        required: false,
        unique: true,
    },
});

export default mongoose.model('Couples', couplesSchema);