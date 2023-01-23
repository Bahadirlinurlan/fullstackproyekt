import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import  Add from './components/Add'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Add" element={<Add />}/>

     
    </Routes>
    
  </BrowserRouter>
  );
}

export default App;
