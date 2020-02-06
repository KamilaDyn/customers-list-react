import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";
import AddNewCustomer from "./pages/add-new-customer/add-new-customer";
import EditCustomer from "./pages/edit-customer/edit-customer";
import Footer from "./components/footer/footer";
import "./App.css";

const App = () => (
  <div className="App">
    <Header />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/add" component={AddNewCustomer} />
        <Route path="/edit/:id" component={EditCustomer} />
      </Switch>
    </BrowserRouter>
    <Footer />
  </div>
);

export default App;
