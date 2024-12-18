const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema(
    {
       card_number: { type: String, required: true, unique: true },
       cvc: { type: String, required: true },
       exp_month: { type: String, required: true },
       exp_year: { type: String, required: true },
       user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    }
        
    },
    {
        timestamps: true
    }

);
module.exports = mongoose.model('payment', paymentSchema);