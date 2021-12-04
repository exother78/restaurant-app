const { Schema, model } = require("mongoose");

const OrderSchema = new Schema(
  {
    orderNumber: {
      type: Number,
      required: true,
      trim: true,
      unique: true,
    },
    userID: {
      type: String,
      trim: true,
    },
    paymentID: {
      type: String,
      required: true,
    },

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
      trim: true,
    },
    phone: { type: String, trim: true },
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
    building: {
      type: String,
    },
    basket: {
      type: Array,
      required: true,
      default: [],
    },
    total: {
      type: Number,
      required: true,
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
