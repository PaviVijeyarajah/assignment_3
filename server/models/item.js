let mongoose = require('mongoose');

// create a model class
let itemModel = mongoose.Schema({
    item: String,
    stock: String,
    price: Number,
    model: String,
    condition: String,
    description: String
},
{
    collection:"items"
});
module.exports = mongoose.model('Item',itemModel);
