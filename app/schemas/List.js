const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
    lender: {
        type: String,
        required: true
    },
    borrower: {
        type: String,
        required: true
    },
    money: {
        type: Number,
        required: true
    },
    list: {
        type: String,
        required: true
    },
},{
    timestamps: true
});

const List = mongoose.models.List || mongoose.model('List', listSchema);

// Export the Mongoose model
module.exports = List;
