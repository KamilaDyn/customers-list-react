import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import HomePage from "./pages/HomePage";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route exact path="/items/add" component={AddCustomer} />
      <Route exact path="/items/:id" component={CustomerDetails} />
      <Route exact path="/items/edit/:id" component={EditCustomer} /> */}
    </Routes>
  </BrowserRouter>
);

export default App;
