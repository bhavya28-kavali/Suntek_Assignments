import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: [true, "Product name is required"]
    },
    price: {
      type: Number,
      required: [true, "Product price is required"]
    },
    brand: {
      type: String,
      required: [true, "Product brand is required"]
    }
  },
  {
    strict: "throw",
    timestamps: true,
    versionKey: false
  }
);

export const Productmodel = model("Product", productSchema);
