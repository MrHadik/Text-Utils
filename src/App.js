import './App.css';
import Nevbar from './compornet/Nevbar';
import Textfoam from './compornet/Textfoam';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from './compornet/Footer';

function App() {
  return (
    <>
      <Router>
      <Nevbar title="Netflix" />
        <Routes>
          <Route exact path="/" element={<Textfoam />} />
          <Route exact path="/Textfoam" element={<Textfoam />} />
          <Route exact path="/Footer" element={<><Textfoam /><Footer /></>} /> 
          
        </Routes>
      </Router>
    </>
  );
}

export default App;