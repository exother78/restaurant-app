const { Schema, model } = require("mongoose");

const OrderSchema = new Schema(
  {
    orderNumber: {
      type: Number,
      required: true,
      trim: true,
      unique: true,
    },
    // userID: {
    //   type: String,
    //   required: true,
    //   trim: true,
    // },

    email: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    postalCode: {
      type: Number,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    street: {
      type: String,
    },
    basket: {
      type: Array,
      required: true,
      default: [],
    },
    time: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Order", OrderSchema);
