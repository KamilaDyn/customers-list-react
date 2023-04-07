import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AppContextProvider from "./context/AppContext";
import { AddNewCustomerForm, EditCustomerForm, HomePage } from "./pages";
import { Header } from "./components/organisms";

const App = () => (
  <AppContextProvider>
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/edit/:id" element={<EditCustomerForm />} />
          <Route path="/add" element={<AddNewCustomerForm />} />
        </Routes>
      </BrowserRouter>
    </>
  </AppContextProvider>
);

export default App;
