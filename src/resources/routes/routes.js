import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PesquisaPedidos from '../sidebar/sidebaritens/pedidos/consultadepedidos/pedidos'
import Home from './Home'
import ConsultaClientes from '../sidebar/sidebaritens/clientes/consultadeclientes/index'
import PesquisaProdutos from '../sidebar/sidebaritens/estoque/consultadeprodutos'
import CadastroClientes from '../sidebar/sidebaritens/clientes/cadastrodeclientes'

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/consultarpedidos' element={<PesquisaPedidos />} />
    <Route path='/consultarclientes' element={<ConsultaClientes />} />
    <Route path='/consultarprodutos' element={<PesquisaProdutos />}/>
    <Route path='/cadastrarclientes' element={<CadastroClientes/>}/>
  </Routes>
)

export default AppRoutes
