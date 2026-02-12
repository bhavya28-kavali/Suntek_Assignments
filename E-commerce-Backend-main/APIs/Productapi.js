import exp from "express";
import { Productmodel } from "../Models/Productmodel.js";

export const productRoute = exp.Router();

productRoute.post("/products", async (req, res, next) => {
  try {
    const productObj = req.body;

    const productDocument = new Productmodel(productObj);
    await productDocument.save();

    res.status(201).json({ message: "Product created" });
  } catch (err) {
    next(err);
  }
});

