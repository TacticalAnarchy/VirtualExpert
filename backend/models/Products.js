const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productsSchema = new Schema({
  title: {
    type: String
  },
  desc: {
    type: String
  },
  key: {
    type: String
  },
}, {
  collection: 'products'
})

module.exports = mongoose.model('products', productsSchema)