import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AppContextProvider from "./context/AppContext";
import { AddNewCustomerForm, EditCustomerForm, HomePage } from "./pages";
import { AcceptModal, Header } from "./components/organisms";

const App = () => (
  <AppContextProvider>
    <>
      <BrowserRouter>
        <div className="relative">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/edit/:id" element={<EditCustomerForm />} />
            <Route path="/add" element={<AddNewCustomerForm />} />
          </Routes>
          <AcceptModal />
        </div>
      </BrowserRouter>
    </>
  </AppContextProvider>
);

export default App;
