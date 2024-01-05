import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Result from './pages/Result'
import { MyContextProvider } from './Context/Mycontext'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formt from './components/Formt'
import SecondForm from './pages/SecondForm'
function App() {
  return (
    <BrowserRouter>
      <h1 className='font-bold'>Surevy App</h1>
      <Routes>
        <Route path="/" element={ <Form />} />
        <Route path="/result" element={ <Result />} />
        <Route path="/formt" element={<Formt /> } />
        <Route path="/secondform" element={<SecondForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
