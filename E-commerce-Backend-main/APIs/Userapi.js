import exp from "express";
import { Usermodel } from "../Models/Usermodel.js";
import { Productmodel } from "../Models/Productmodel.js";
import { hash } from "bcryptjs";

export const userRoute = exp.Router();

/* GET ALL USERS */
userRoute.get("/users", async (req, res, next) => {
  try {
    const users = await Usermodel.find();
    res.status(200).json({ message: "users", payload: users });
  } catch (err) {
    next(err);
  }
});

/* CREATE USER */
userRoute.post("/users", async (req, res, next) => {
  try {
    const newUser = req.body;

    await new Usermodel(newUser).validate();

    const hashedPassword = await hash(newUser.password, 12);
    newUser.password = hashedPassword;

    const newUserDoc = new Usermodel(newUser);
    await newUserDoc.save({ validateBeforeSave: false });

    res.status(201).json({ message: "User created" });
  } catch (err) {
    next(err);
  }
});

/* GET USER WITH CART */
userRoute.get("/users/:uid", async (req, res, next) => {
  try {
    const { uid } = req.params;

    const user = await Usermodel
      .findById(uid)
      .populate("cart.product", "productName price");

    if (!user)
      return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "User", payload: user });
  } catch (err) {
    next(err);
  }
});

/* ADD PRODUCT TO CART */
userRoute.put(
  "/users/user-id/:uid/product-id/:pid",
  async (req, res, next) => {
    try {
      const { uid, pid } = req.params;

      const user = await Usermodel.findById(uid);
      if (!user)
        return res.status(404).json({ message: "User not found" });

      const product = await Productmodel.findById(pid);
      if (!product)
        return res.status(404).json({ message: "Product not found" });

      const productInCart = user.cart.find(
        (item) => item.product.toString() === pid
      );

      let modifiedUser;

      if (productInCart) {
        modifiedUser = await Usermodel.findOneAndUpdate(
          { _id: uid, "cart.product": pid },
          { $inc: { "cart.$.quantity": 1 } },
          { new: true }
        ).populate("cart.product");
      } else {
        modifiedUser = await Usermodel.findByIdAndUpdate(
          uid,
          { $push: { cart: { product: pid, quantity: 1 } } },
          { new: true }
        ).populate("cart.product");
      }

      res.status(200).json({
        message: "Product added to cart",
        payload: modifiedUser
      });
    } catch (err) {
      next(err);
    }
  }
);
