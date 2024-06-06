import './App.css'
import Form from './components/Form'
import Result from './pages/Result'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SecondForm from './pages/SecondForm'
function App() {
  return (
    <BrowserRouter>
      <h1 className='survey-app-header'>Form Ease</h1>
      <Routes>
        <Route path="/" element={ <Form />} />
        <Route path="/result" element={ <Result />} />
        <Route path="/secondform" element={<SecondForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
