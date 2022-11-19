import "./App.css";

import React from "react";

import Header from "./components/Header";
import SalesCard from "./components/SalesCard";
import Login from "./components/login/Login";

function App() {
  return (
    <div>
      <Login />

      {/* <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main> */}
    </div>
  );
}

export default App;
