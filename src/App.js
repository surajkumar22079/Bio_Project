import React from "react";
import logo from './logo.svg';
import events from './App/Components/events.js';
import Header from "./App/Components/Header";
import Events from './App/Components/events.js';
import Footer from "./App/Components/Footer";

// import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <Header />
      <Events />
      <Footer/>
    </div>
    
  )
}

export default App;
