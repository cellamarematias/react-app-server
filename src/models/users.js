import mongoose from 'mongoose';

const { Schema } = mongoose;

const usersSchema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    couples: [{
        type: Schema.Types.ObjectId,
        ref: 'Couples',
    }],
});

export default mongoose.model('Users', usersSchema);