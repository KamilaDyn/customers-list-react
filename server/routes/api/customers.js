const customersRouter = require("express").Router();
const Customer = require("../../models/Customers");

customersRouter.get("/", async (req, res) => {
  const perPage = 10;
  const page = parseInt(req.query.page) || 1;
  const items = await Customer.find().sort({ name: "asc" });
  res.status(200).json(items);
});

customersRouter.get("/:id", async (req, res) => {
  const item = await Customer.findById(req.params.id).sort({ date: -1 });

  if (item) {
    res.status(202).json(item);
  } else {
    res.status(500).send({ error: err.message });
  }
});

customersRouter.post("/", async (req, res) => {
  try {
    const newItem = new Customer(req.body);
    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

//update customer in db
customersRouter.put("/:id", (req, res) => {
  Customer.updateOne({ _id: req.params.id }, req.body)
    .then(function () {
      Customer.findOne({ _id: req.params.id }).then((customer) => {
        res.send(customer);
      });
    })
    .catch((err) => res.status(404).json({}));
});

customersRouter.delete("/:id", (req, res) => {
  Customer.deleteOne({ _id: req.params.id })
    .then((response) => res.json({ status: "success" }))
    .catch((error) => res.status(404).json({ status: false }));
});

module.exports = customersRouter;
