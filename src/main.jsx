import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TelaPrinc from './pages/TelaPrinc/TelaPrinc'
import TelaSec from './pages/TelaSec/TelaSec'
import Cadastro from './pages/CadastroTela/Cadastro'
import Index from './pages/index'
import "./app.css"
import AppBar from './components/AppBar/appBar'

// IMPORT PAR TROCA TELA
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* O BROWER ROOT E PARA FAZER A TROCA DE TELA */}
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>} ></Route>{/* Troca de tela pelo apppbar*/}
        <Route path='/qr-code' element={<TelaSec/>} ></Route>
        <Route path='/cad' element={<Cadastro/>} ></Route>
      </Routes>
      <AppBar/>
    </BrowserRouter>
  </StrictMode>
)
