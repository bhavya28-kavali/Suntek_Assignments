import exp from "express";
import { connect } from "mongoose";
import { productRoute } from "./APIs/Productapi.js";
import { userRoute } from "./APIs/Userapi.js";

// Create HTTP server
const app = exp();
const port = 4000;

// body parser middleware
app.use(exp.json());

// forward requests to APIs
app.use("/user-api", userRoute);
app.use("/product-api", productRoute);

// DB connection
async function connectDb() {
  try {
    await connect("mongodb://localhost:27017/ecomdb");
    console.log("Connected to db");
  } catch (err) {
    console.error("DB connection error:", err);
  }
}

// call DB connection
connectDb();

// start server
app.listen(port, () =>
  console.log(`Server listening on port ${port} ..`)
);

// Error-handling middleware (ALWAYS LAST)
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Server error",
    error: err.message
  });
});
