import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const SidebarContainer = styled.div`
  width: ${props => (props.isOpen ? '210px' : '20px')};
  height: 100vh;
  background: #17080f;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.isOpen ? 'flex-start' : 'center')};
  justify-content: flex-start;
  position: fixed;
  left: 0;
  top: 0;
  transition: width 0.6s ease;
  overflow: hidden;
  border-right: 1px solid #ccc;
  z-index: 1;
`

const SidebarItem = styled.div`
  width: 100%;
  padding: ${props => (props.isOpen ? '10px' : '0')};
  cursor: ${props => (props.isOpen ? 'pointer' : 'default')};
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: ${props => (props.isOpen ? 'flex-start' : 'center')};
  border-bottom: 1px solid #444;
  font-size: 14px;

  &:hover {
    background: #444;
  }
`

const SidebarSubItem = styled.div`
  width: 100%;
  padding: ${props => (props.isOpen ? '5px 30px' : '0')};
  cursor: ${props => (props.isOpen ? 'pointer' : 'default')};
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #444;
  font-size: 12px;

  &:hover {
    background: #444;
  }
`

const SidebarConfig = ({ isOpen }) => {
  const [whenClick, setActive] = useState(null)
  const navigate = useNavigate()

  const handleItemClick = (item) => {
    setActive(whenClick === item ? null : item)
  }

  const handleSubItemClick = (route) => {
    navigate(route)
  }

  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarItem isOpen={isOpen} onClick={() => handleSubItemClick('/')}>Home</SidebarItem> 
      <SidebarItem isOpen={isOpen} onClick={() => handleItemClick('Estoque')}>Estoque</SidebarItem>
      {isOpen && whenClick === 'Estoque' && (
        <>
        <SidebarSubItem isOpen={isOpen}>Cadastro de Produtos</SidebarSubItem>
        <SidebarSubItem isOpen={isOpen} onClick={() => handleSubItemClick('/consultarprodutos')}>Consulta de Produtos</SidebarSubItem>
        </>
      )}
      <SidebarItem isOpen={isOpen} onClick={() => handleItemClick('Cadastros')}>Cadastros</SidebarItem>
      {isOpen && whenClick === 'Cadastros' && (
        <>
        <SidebarSubItem isOpen={isOpen}>Cadastrar Cliente</SidebarSubItem>
        <SidebarSubItem isOpen={isOpen} onClick={() => handleSubItemClick('/consultarclientes')}>Consultar Clientes</SidebarSubItem>
        </>
      )}
      <SidebarItem isOpen={isOpen} onClick={() => handleItemClick('Pedidos')}>Pedidos</SidebarItem>
      {isOpen && whenClick === 'Pedidos' && (
        <SidebarSubItem
          isOpen={isOpen}
          onClick={() => handleSubItemClick('/consultarpedidos')}>Consulta de Pedidos</SidebarSubItem>
      )}
      <SidebarItem isOpen={isOpen}>Relatórios</SidebarItem>
    </SidebarContainer>
  )
}

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleMouseEnter = () => {
    setIsSidebarOpen(true)
  }

  const handleMouseLeave = () => {
    setIsSidebarOpen(false)
  }

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SidebarConfig isOpen={isSidebarOpen} />
      </div>
      <div style={{ marginLeft: isSidebarOpen ? '200px' : '50px', transition: 'margin-left 0.3s ease' }}>
        {/* Conteúdo principal aqui */}
      </div>
    </>
  )
}

export default Sidebar



