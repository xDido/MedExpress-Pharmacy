const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicineSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter the medicine name'],
    },
    Description :{
        type: String,
        required: [true, 'Please enter the medicine description'],
    },
    Picture : {
        type: String,
        required: [true, 'Please enter the medicine picture']
    },
    activeIngredients: {
        type: [String],
        required: [true, 'Please enter the active ingredients'],
    },
    price: {
        type: Number,
        required: [true, 'Please enter the price'],
        min: [0, 'Price cannot be negative'],
    },
    medicalUse: {
        type: String,
        required: [true, 'Please enter the medical use'],
    },
    sales:{
        type: Number,
    
        default :0,
    },
    availableQuantity: {
        type: Number,
        required: [true, 'Please enter the available quantity'],
     
    },
    
}, { timestamps: true });


const Medicine = mongoose.model('Medicine', medicineSchema);

module.exports = Medicine;