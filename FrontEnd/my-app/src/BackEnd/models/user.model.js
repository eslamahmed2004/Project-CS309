const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        id :{type: String,unique: true, required: true},
        fullName: { type: String, required: true },
        email: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        phoneNumber: { type: String, required: false },
        image: { type: String, required: false },
        address: { type: String, required: false },
        payments: [
            {type: mongoose.Schema.Types.ObjectId,ref: 'Payment', },]

    },
    {
        timestamps: true
    }

);
userSchema.method("toJSON", function () {
    const { __v, id, ...object } = this.toObject();
    object._id = id;
    return object; 
});

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ id: this.id }, 'your_jwt_secret'); // Use a secure secret
    return token;
};
module.exports = mongoose.model('User', userSchema);