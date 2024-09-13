import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FaTrash } from 'react-icons/fa'

const ContainerGeral = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    padding-bottom: 20px;
`
const Container = styled.div`
    display: flex;
    justify-content: center;
`
const TituloGeral = styled.h1`
    color: #fff;
    margin: 20px;
`
const InputPesquisa = styled.input`
    margin: 20px;
    padding: 10px;
    width: 300px;
    color: #fff;
`
const TabelaClientes = styled.table`
    margin: 20px;
    width: 80%;
    border-collapse: collapse;
    color: #99AFBB;
`
const TituloTabela = styled.th`
    border: 1px solid #ccc;
    padding: 10px;
`
const LinhaTabela = styled.tr`
    border: 1px solid #ccc;
    padding: 10px;
`
const BotaoExcluir = styled.button`
    background: transparent;
    border: none;
    color: #ff0000;
    cursor: pointer;
    font-size: 20px;

    &:hover {
        color: #cc0000;
    }
`

const ConsultaClientes = () => {
  const [clientes, setClientes] = useState([])
  const [pesquisa, setPesquisa] = useState('')

  // Carregar clientes do localStorage quando o componente for montado
  useEffect(() => {
    const clientesSalvos = JSON.parse(localStorage.getItem('clientes')) || []
    setClientes(clientesSalvos)
  }, [])

  // Função para filtrar clientes pela pesquisa
  const clientesFiltrados = clientes.filter(cliente =>
    cliente.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||
    cliente.cpf.includes(pesquisa) ||
    cliente.id.toString().includes(pesquisa)
  )

  // Função para excluir um cliente
  const excluirCliente = (id) => {
    const clientesAtualizados = clientes.filter(cliente => cliente.id !== id)
    setClientes(clientesAtualizados)
    localStorage.setItem('clientes', JSON.stringify(clientesAtualizados))
  }

  return (
    <ContainerGeral>
        <Container>
            <TituloGeral>Consulta de Clientes</TituloGeral>
        </Container> 
        <Container>
            <InputPesquisa
                type="text"
                placeholder="Pesquisar por nome, CPF/CNPJ ou ID"
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
            />
        </Container>
        <Container>
            <TabelaClientes>
                <thead>
                <tr>
                    <TituloTabela>Nome</TituloTabela>
                    <TituloTabela>CPF</TituloTabela>
                    <TituloTabela>Email</TituloTabela>
                    <TituloTabela>Telefone</TituloTabela>
                    <TituloTabela>ID</TituloTabela>
                    <TituloTabela>Excluir</TituloTabela>
                </tr>
                </thead>
                <tbody>
                {clientesFiltrados.map((cliente) => (
                    <LinhaTabela key={cliente.id}>
                    <td>{cliente.nome}</td>
                    <td>{cliente.cpf}</td>
                    <td>{cliente.email}</td>
                    <td>{cliente.telefone}</td>
                    <td>{cliente.id}</td>
                    <td>
                        <BotaoExcluir onClick={() => excluirCliente(cliente.id)}>
                            <FaTrash />
                        </BotaoExcluir>
                    </td>
                    </LinhaTabela>
                ))}
                </tbody>
            </TabelaClientes>
        </Container>
    </ContainerGeral>
  )
}

export default ConsultaClientes

