import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TelaPrinc from './pages/TelaPrinc/TelaPrinc'
import TelaSec from './pages/TelaSec/TelaSec'
import Cadastro from './pages/CadastroTela/Cadastro'
import Index from './pages/index'


import "./app.css"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBar from './components/appBar/appBar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>} ></Route>
        <Route path='/qr-code' element={<TelaSec/>} ></Route>
        <Route path='/cad' element={<Cadastro/>} ></Route>
      </Routes>
      <AppBar/>
    </BrowserRouter>
  </StrictMode>
)
