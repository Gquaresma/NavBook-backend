const Purchase = require("../models/purchaseModel");

module.exports = {
  allPurchase: async (req, res) => {
    try {
      console.log("funfoi");
      const purchase = await Purchase.find({});

      if (purchase.length === 0)
        return res.status(404).json({ message: "Nenhuma compra encotrada" });

      return res.status(200).json(purchase);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  madePurchase: async (req, res) => {
    try {
      console.log("epa")
      const purchaseTime = new Date().toLocaleString();
      const { clientName, bookName, bookPrice, bookQuantity } = req.body;

      const newPurchase = new Purchase({
        clientName,
        bookName,
        bookPrice,
        bookQuantity,
        purchaseTime,
      });

      const purchase = await newPurchase.save();

      return res.status(201).json(purchase);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  getPurchase: async (req, res) => {
    try {
      const findPurchase = await Purchase.findById({ _id: req.params.id });

      return res.status(200).json(findPurchase);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  deletePurchase: async (req, res) => {
    try {
      const purchaseId = req.params.id;

      await Purchase.findByIdAndDelete(purchaseId);

      console.log("ihuu");
 
      return res.status(200).json({ message: "Livro deletado" });
    } catch (err) {
      return res.status(500).json(err);
    }
  }
};
