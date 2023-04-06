import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import HomePage from "./pages/HomePage";
import { AddNewCustomerForm, EditCustomerForm } from "./pages";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/edit/:id" element={<EditCustomerForm />} />
      <Route path="/add" element={<AddNewCustomerForm />} />
      {/* <Route exact path="/items/add" component={AddCustomer} />
      <Route exact path="/items/:id" component={CustomerDetails} />
      <Route exact path="/items/edit/:id" component={EditCustomer} /> */}
    </Routes>
  </BrowserRouter>
);

export default App;
