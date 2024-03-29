const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  thumbnail: {
    type: [String]
  },
  stock: {
    type: Number,
    required: true
  },
  status: {
    type: Boolean,
    required: true
  },
  category: {
    type: String,
    required: true
  }
})

const ProductModel = mongoose.model("products", productSchema)

module.exports = ProductModel