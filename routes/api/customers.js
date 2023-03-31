const express = require("express");

const router = express.Router();

const Customer = require("../../models/Customers");

router.get("/", async (req, res) => {
  try {
    const items = await Customer.find().sort({ date: -1 });
    console.log(items);
    res.json(items);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
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

router.post("/", async (req, res) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

//update customer in db
router.put("/:id", (req, res) => {
  Customer.updateOne({ _id: req.params.id }, req.body)
    .then(function () {
      Customer.findOne({ _id: req.params.id }).then((customer) => {
        res.send(customer);
      });
    })
    .catch((err) => res.status(404).json({}));
});

router.delete("/:id", (req, res) => {
  Customer.findById({ _id: req.params.id })
    .then((customer) =>
      customer.remove().then(() => res.json({ status: "success" }))
    )
    .catch((error) => res.status(404).json({ status: false }));
});

module.exports = router;
