import './style.css'
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Index from './pages/Index'
import Footer from './components/Footer'
import Cities from './pages/Cities'
import ScrollToUp from './components/ScrollToUp'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cities" element={<Cities />} />
      </Routes>
      <ScrollToUp />
      <Footer />
    </>
  );
}

export default App;
