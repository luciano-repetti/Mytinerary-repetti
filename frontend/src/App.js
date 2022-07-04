import './style.css'
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Index from './pages/Index'
import Footer from './components/Footer'
import Cities from './pages/Cities'
import ScrollToUp from './components/ScrollToUp'
import Detail from './pages/Detail'
import CredentialsPage from './pages/CredentialsPage'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/cities" element={<Cities/>} />
        <Route path="/itineraries/city/:id" element={<Detail />} />
        <Route path="/credentials" element={<CredentialsPage />} />
      </Routes>
      <ScrollToUp />
      <Footer />
    </>
  );
}

export default App;
