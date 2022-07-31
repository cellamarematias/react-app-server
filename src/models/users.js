import mongoose from "mongoose";
const { Schema } = mongoose;

const usersSchema = new Schema ({
    tasks:[
        {
        type: Schema.Types.ObjectId,
        required: false,
        ref: 'Tasks',
    }
    ],
    fullName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        default: () => Date.now() + 7*24*60*60*1000,
        require: true
    }
}
);

export default mongoose.model('Users', usersSchema);

