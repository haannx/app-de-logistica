import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const ContainerGeral = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    padding-bottom: 20px;
`
const Container = styled.div`
    max-width: 1000px;
    margin: 20px;
    padding: 20px;
    margin-left: 50px;
`
const TituloPrincipal = styled.h1`
    color: #fff;
    margin-top: 60px;
    margin-left: 60px;
`
const InputPesquisa = styled.input`
    padding: 8px;
    margin-bottom: 20px;
    width: 600px;
    border-radius: 4px;
    border: 1px solid #ccc;
`
const CheckboxContainer = styled.div`
    margin-bottom: 20px;
    color: #fff;
`
const CheckboxLabel = styled.label`
    margin-right: 10px;
`
const Tabela = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
`
const Th = styled.th`
    background-color: #333;
    color: #fff;
    padding: 10px;
    border: 1px solid #ccc;
`
const Td = styled.td`
    padding: 10px;
    border: 1px solid #ccc;
    color: #fff;
`
const CheckBox = styled.input`
    margin: 10px;
`

function ConsultaProdutos() {
  const [produtos, setProdutos] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [searchById, setSearchById] = useState(false)  // Alterado para false
  const [searchByDescricao, setSearchByDescricao] = useState(false)  // Alterado para false
  const [searchByMarca, setSearchByMarca] = useState(false)  // Alterado para false

  useEffect(() => {
    const produtosSalvos = JSON.parse(localStorage.getItem('produtos')) || []
    setProdutos(produtosSalvos)
  }, [])

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const produtosFiltrados = produtos.filter((produto) => {
    const searchTermLower = searchTerm.toLowerCase()

    return (
      (searchById && produto.id.toString().includes(searchTerm)) ||
      (searchByDescricao && produto.descricao.toLowerCase().includes(searchTermLower)) ||
      (searchByMarca && produto.marca.toLowerCase().includes(searchTermLower))
    )
  })

  return (
    <ContainerGeral>
      <TituloPrincipal>Consulta de Produtos</TituloPrincipal>
      <Container>
        <InputPesquisa
          type="text"
          placeholder="Pesquise por ID, descrição ou marca..."
          value={searchTerm}
          onChange={handleSearchChange}
        />

        <CheckboxContainer>
          <CheckboxLabel>
            <CheckBox
              type="checkbox"
              checked={searchById}
              onChange={(e) => setSearchById(e.target.checked)}
            /> 
            ID
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckBox
              type="checkbox"
              checked={searchByDescricao}
              onChange={(e) => setSearchByDescricao(e.target.checked)}
            /> 
            Descrição
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckBox
              type="checkbox"
              checked={searchByMarca}
              onChange={(e) => setSearchByMarca(e.target.checked)}
            /> 
            Marca
          </CheckboxLabel>
        </CheckboxContainer>

        <Tabela>
          <thead>
            <tr>
              <Th>ID</Th>
              <Th>Descrição</Th>
              <Th>Marca</Th>
            </tr>
          </thead>
          <tbody>
            {produtosFiltrados.length > 0 ? (
              produtosFiltrados.map((produto) => (
                <tr key={produto.id}>
                  <Td>{produto.id}</Td>
                  <Td>{produto.descricao}</Td>
                  <Td>{produto.marca}</Td>
                </tr>
              ))
            ) : (
              <tr>
                <Td colSpan="3">Nenhum produto encontrado</Td>
              </tr>
            )}
          </tbody>
        </Tabela>
      </Container>
    </ContainerGeral>
  )
}

export default ConsultaProdutos


