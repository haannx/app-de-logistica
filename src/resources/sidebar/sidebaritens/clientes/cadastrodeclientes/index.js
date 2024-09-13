import React, { useState } from 'react'
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
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-left: 50px;
`
const TitulosPrincipal = styled.h1`
    color: #fff;
    margin-top: 60px;
    margin-left: 60px;
`
const Titulos = styled.h2`
    color: #fff;
    padding-bottom: 40px;
`
const Input = styled.input`  
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #fff;
    width: 600px;
`
const Button = styled.button`
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100px;
    margin-left: 50px;

    &:hover {
        background-color: #218838;
    }
`
const Descricao = styled.div`
    color: #99AFBB;
`

const CadastroClientes = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    observacoes: '',
    endereco: '',
    bairro: '',
    numero: '',
    email: '',
    telefone: '',
    complemento: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Verifica se todos os campos obrigatórios estão preenchidos
    const { nome, cpf, endereco, bairro, numero, email, telefone } = formData

    if (!nome || !cpf || !endereco || !bairro || !numero || !email || !telefone) {
      alert('Por favor, preencha todos os campos obrigatórios!')
      return
    }

    // Recupera dados já armazenados no localStorage ou cria um array vazio
    let clientes = JSON.parse(localStorage.getItem('clientes')) || []

    // Verifica se o CPF/CNPJ já existe
    const cpfExists = clientes.some(cliente => cliente.cpf === cpf)

    if (cpfExists) {
      alert('CPF/CNPJ já cadastrado!')
      return
    }

    // Encontra o maior ID existente
    const maxId = clientes.reduce((max, cliente) => Math.max(max, cliente.id || 0), 0)

    // Cria um novo cliente com um ID único
    const newClient = {
      id: maxId + 1,
      ...formData
    }

    // Adiciona o novo cliente
    clientes.push(newClient)

    // Salva novamente no localStorage
    localStorage.setItem('clientes', JSON.stringify(clientes))

    // Limpa o formulário após o cadastro
    setFormData({
      nome: '',
      cpf: '',
      observacoes: '',
      endereco: '',
      bairro: '',
      numero: '',
      email: '',
      telefone: '',
      complemento: ''
    })

    alert('Cliente cadastrado com sucesso!')
  }

  return (
    <ContainerGeral>
      <TitulosPrincipal>Cadastro de Clientes</TitulosPrincipal>
      <form onSubmit={handleSubmit}>
        <Container>
          <Titulos>Dados Básicos</Titulos>  
          <Descricao>
            <label>Nome: </label>
            <Input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
          </Descricao>
          <Descricao>
            <label>CPF ou CNPJ: </label>
            <Input type="text" name="cpf" value={formData.cpf} onChange={handleChange} required />
          </Descricao>
          <Descricao>
            <label>Observações: </label>
            <Input type="text" name="observacoes" value={formData.observacoes} onChange={handleChange} />
          </Descricao>
        </Container>
        <Container>
          <Titulos>Endereço</Titulos>
          <Descricao>
            <label>Endereço: </label>
            <Input type='text' name='endereco' value={formData.endereco} onChange={handleChange} required />
          </Descricao>
          <Descricao>
            <label>Bairro: </label>
            <Input type='text' name='bairro' value={formData.bairro} onChange={handleChange} required />
          </Descricao>
          <Descricao>
            <label>Nº: </label>
            <Input type='text' name='numero' value={formData.numero} onChange={handleChange} required />
          </Descricao>
          <Descricao>
            <label>Complemento: </label>
            <Input type='text' name='complemento' value={formData.complemento} onChange={handleChange} />
          </Descricao>
        </Container>
        <Container>
          <Titulos>Contatos</Titulos>
          <Descricao>
            <label>Email: </label>
            <Input type='email' name='email' value={formData.email} onChange={handleChange} required />
          </Descricao>
          <Descricao>
            <label>Telefone: </label>
            <Input type='text' name='telefone' value={formData.telefone} onChange={handleChange} required />
          </Descricao>
        </Container>
        <Button type="submit">Cadastrar</Button>
      </form>
    </ContainerGeral>
  )
}

export default CadastroClientes





