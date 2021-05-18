const express = require("express");
const productRoute = express.Router();

// Product model
let ProductsModel = require("../models/Products");

productRoute.route("/").get((req, res) => {
  ProductsModel.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Create Product
productRoute.route("/create-product").post((req, res, next) => {
  ProductsModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Edit Product
productRoute.route("/edit-product/").get((req, res) => {
  ProductsModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update product
productRoute.route("/update-product/:id").post((req, res, next) => {
  ProductsModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
        console.log("Product successfully updated!");
      }
    }
  );
});

// Delete product
productRoute.route("/delete-product/:id").delete((req, res, next) => {
  ProductsModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = productRoute;
