import './style.css'
import React, {useEffect} from 'react'
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Index from './pages/Index'
import Footer from './components/Footer'
import Cities from './pages/Cities'
import ScrollToUp from './components/ScrollToUp'
import Detail from './pages/Detail'
import Credentials from "./components/Credentials";
import { useSelector, useDispatch } from 'react-redux'
import userActions from './redux/actions/userActions'
import toast, { Toaster } from 'react-hot-toast';


function App() {
  
  const dispatch = useDispatch()
  const user = useSelector(store => store.userReducer.user)

  useEffect(()=>{
    if(localStorage.getItem('token') !== null){
      const token = localStorage.getItem('token')
      dispatch(userActions.verifyToken(token))
    }
  }, [])

  return (
    <>
      <Header />
      <Toaster />
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="*" element={<Index />}/>
        <Route path="/cities" element={<Cities/>} />
        <Route path="/itineraries/city/:id" element={<Detail />} />
        <Route path="/credentials" element={<Credentials />} />
      </Routes>
      <ScrollToUp />
      <Footer />
    </>
  );
}

export default App;
