import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Result from './pages/Result'
import { MyContextProvider } from './Context/Mycontext'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <h1>Surevy App</h1>
      <Routes>
        <Route path="/" element={ <Form />} />
        <Route path="/result" element={ <Result />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
