const mongoose = require(`mongoose`);

const productSchema = mongoose.Schema({
  image: String,
  name: String,
  price: String,
  discount: {
    type: Number,
    default: 0,
  },
  bgcolour: String,
  panelcolour: String,
  textcolour: String,
});

module.exports = mongoose.model("product", productSchema);
