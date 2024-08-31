import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PesquisaPedidos from '../sidebar/sidebaritens/pedidos/consultadepedidos/pedidos'
import Home from './Home'
import PesquisaClientes from '../sidebar/sidebaritens/clientes/consultadeclientes/index'
import PesquisaProdutos from '../sidebar/sidebaritens/estoque/consultadeprodutos'

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/consultarpedidos' element={<PesquisaPedidos />} />
    <Route path='/consultarclientes' element={<PesquisaClientes />} />
    <Route path='/consultarprodutos' element={<PesquisaProdutos />}/>
  </Routes>
)

export default AppRoutes
