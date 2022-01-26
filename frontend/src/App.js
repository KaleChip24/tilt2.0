import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import Nav from './components/Nav/Nav';
import Layout from './components/Layout/Layout.jsx';


function App() {
  return (
    <div className="App">
      <Layout />
      <p>THIS IS MY APP</p>
    </div>
  );
}

export default App;
