import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Header from './components/header/Header';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
