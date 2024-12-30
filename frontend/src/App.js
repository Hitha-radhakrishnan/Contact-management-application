import React from 'react'
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import './App.css'
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import Create from './Components/Create';



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/" element={<Create/>}/>
      </Routes>
    </Router>
  )
}

export default App