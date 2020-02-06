const express = require("express");

const router = express.Router();

const Customer = require("../../models/Customers");

router.get("/", (req, res) => {
  Customer.find()
    .sort({ date: -1 })
    .then(customers => res.status(200).json(customers));
});

router.get("/:id", (req, res) => {
  Customer.findById({ _id: req.params.id }, req.body)
    .sort({ date: -1 })
    .then(customer =>
      customer ? res.status(200).json(customer) : res.sendStatus(404)
    );
});

router.post("/", (req, res) => {
  const newCustomer = new Customer({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    cell_phone: req.body.cell_phone,
    phone: req.body.phone,
    shipping_street: req.body.shipping_street,
    shipping_number: req.body.shipping_number,
    shipping_postcode: req.body.shipping_postcode,
    shipping_city: req.body.shipping_city,
    shipping_state: req.body.shipping_state,
    shipping_country: req.body.shipping_country,
    billing_street: req.body.billing_street,
    billing_number: req.body.billing_number,
    billing_postcode: req.body.billing_postcode,
    billing_city: req.body.billing_city,
    billing_state: req.body.billing_state,
    billing_country: req.body.billing_country
  });

  newCustomer
    .save()
    .then(customer => {
      res.status(201).json(customer);
    })
    .catch(err => {
      res.send(err);
    });
});

//update customer in db
router.put("/:id", (req, res) => {
  Customer.updateOne({ _id: req.params.id }, req.body)
    .then(function() {
      Customer.findOne({ _id: req.params.id }).then(customer => {
        res.send(customer);
      });
    })
    .catch(err => res.status(404).json({}));
});

router.delete("/:id", (req, res) => {
  Customer.findById({ _id: req.params.id })
    .then(customer =>
      customer.remove().then(() => res.json({ status: "success" }))
    )
    .catch(error => res.status(404).json({ status: false }));
});

module.exports = router;
