import './style.css'
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Index from './pages/Index'
import Footer from './components/Footer'
import Cities from './pages/Cities'


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cities" element={<Cities />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
