const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    desc: {
        type: String,
        max: 200,
    },
    img: {
        type: String,
    },
},
    {timestamps: true}
);

module.exports = mongoose.model("Product", productSchema);