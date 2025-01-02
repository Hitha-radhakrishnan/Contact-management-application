import React from 'react'
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import './App.css'
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import Create from './Components/Create';
import EditContact from './Components/EditContact';
import Landing from './Components/Landing';



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/edit/:id" element={<EditContact/>}/>
      </Routes>
    </Router>
  )
}

export default App