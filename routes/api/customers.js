const express = require("express");

const router = express.Router();

const Customer = require("../../models/Customers");

router.get("/api/customers", async (req, res) => {
  const perPage = 10;
  const page = parseInt(req.query.page) || 1;
  try {
    const items = await Customer.find()
      // .skip(perPage * page - perPage)
      // .limit(perPage)
      .sort({ name: "asc" });
    res.json(items);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.get("/api/customers/:id", async (req, res) => {
  try {
    const item = await Customer.findById(req.params.id).sort({ date: -1 });
    if (item) {
      res.json(item);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.post("/api/customers", async (req, res) => {
  try {
    const newItem = new Customer(req.body);
    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

//update customer in db
router.put("/api/customers/:id", (req, res) => {
  Customer.updateOne({ _id: req.params.id }, req.body)
    .then(function () {
      Customer.findOne({ _id: req.params.id }).then((customer) => {
        res.send(customer);
      });
    })
    .catch((err) => res.status(404).json({}));
});

router.delete("/api/customers/:id", (req, res) => {
  Customer.deleteOne({ _id: req.params.id })
    .then((response) => res.json({ status: "success" }))
    .catch((error) => res.status(404).json({ status: false }));
});

module.exports = router;
