import mongoose from 'mongoose';

const { Schema } = mongoose;

const expensesSchema = new Schema({
    couple: {
        type: String,
        required: true,
        ref: 'Couples',
    },
    user: {
        type: String,
        required: true,
        ref: 'Users',
    },
    name: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: () => Date.now() + 7*24*60*60*1000,
        require: true
    },
});

export default mongoose.model('Expenses', expensesSchema);