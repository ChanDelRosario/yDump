import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import PUBLIC_VIEW from './pages/PUBLIC_VIEW';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router> 
        <Navbar />
        <Routes>
          <Route path="/" element={<PUBLIC_VIEW />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
//rfce