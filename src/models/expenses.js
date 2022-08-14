import mongoose from 'mongoose';

const { Schema } = mongoose;

const expensesSchema = new Schema({
    coupleId: {
        type: String,
        required: true,
        ref: 'Couples',
    },
    userId: {
        type: String,
        required: true,
        ref: 'Users',
    },
    amount: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: () => Date.now() + 7*24*60*60*1000,
        require: true
    },
});

export default mongoose.model('Expenses', expensesSchema);