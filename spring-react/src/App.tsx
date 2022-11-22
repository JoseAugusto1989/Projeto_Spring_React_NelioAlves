import "./App.css";

import React from "react";

import { BrowserRouter } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Header from "./components/Header";
import SalesCard from "./components/SalesCard";
import Login from "./pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Login />

      {/* <ToastContainer />
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main> */}
    </BrowserRouter>
  );
}

export default App;
