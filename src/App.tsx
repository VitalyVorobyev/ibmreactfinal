import './App.css'

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import LandingPage from './components/LandingPage';
import Products from './components/Products';

const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<LandingPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    );
};

export default App;
