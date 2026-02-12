import { Schema, model } from "mongoose";

// Create cart Schema
const cartSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product', // name of the product
    },
    quantity: {
        type: Number,
        min:1,
        default: 1
    }
});

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]        
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    cart:{
        type:[cartSchema]
    }
    
})
export const Usermodel = model("User", userSchema);