const express = require("express");
const router = express.Router();

const purchaseController = require("../controllers/purchaseController");

router.use(express.urlencoded({ extended: true }));

router
  .route("/")
  .get(purchaseController.allPurchase)
  .post(purchaseController.madePurchase);

router
  .route("/:id")
  .get(purchaseController.getPurchase)
  .delete(purchaseController.deletePurchase);

module.exports = router;
