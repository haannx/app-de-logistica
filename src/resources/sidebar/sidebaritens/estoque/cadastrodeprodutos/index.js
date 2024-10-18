import styled from "styled-components"
import React, { useState } from 'react'

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
const Input = styled.input`  
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #fff;
    width: 600px;
`
const Select = styled.select`
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #fff;
    width: 600px;
`
const Label = styled.label`
  width: 120px;
  color: #fff;
  display: inline-block; 
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
const Titulos = styled.h2`
    color: #fff;
    padding-bottom: 40px;
`
const Descricao = styled.div`
    color: #99AFBB;
    
`

const Option = styled.option`
    color: #000;
`

function CadastroProdutos() {
    // Estado único para controlar todos os campos do formulário, incluindo a marca
    const [formData, setFormData] = useState({
        descricao: '',
        marca: '',
        data: ''
    })

    const handleChangeCadastros = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { descricao, marca} = formData

        if (!descricao || !marca) {
            alert('Preencha todos os campos obrigatórios')
            return
        }

        // Recupera dados já armazenados no localStorage ou cria um array vazio
        let produtos = JSON.parse(localStorage.getItem('produtos')) || []

        // Encontra o maior ID existente
        const maxId = produtos.reduce((max, produto) => Math.max(max, produto.id || 0), 0)

        // Cria um novo produto com um ID único
        const newProduct = {
            id: maxId + 1,
            ...formData
        }

        // Adiciona o novo produto
        produtos.push(newProduct)

        // Salva novamente no localStorage
        localStorage.setItem('produtos', JSON.stringify(produtos))

        // Limpar o formulário após o cadastro
        setFormData({
            descricao: '',
            marca: '',
            data: ''
        })

        alert('Produto cadastrado com sucesso!')
    }

    return (
        <ContainerGeral>
            <TituloPrincipal>Cadastro de Produtos</TituloPrincipal>
            <form onSubmit={handleSubmit}>
                <Container>
                    <Titulos>Dados Básicos</Titulos>  
                    <Descricao>
                        <Label>Descrição: </Label>
                        <Input 
                            type="text" 
                            name="descricao" 
                            value={formData.descricao} 
                            onChange={handleChangeCadastros} 
                            required
                        />
                    </Descricao>
                    <Descricao>
                        <Label>Marca: </Label>
                        <Select 
                            name="marca" 
                            value={formData.marca} 
                            onChange={handleChangeCadastros} 
                            required
                        >
                            <Option value="" disabled>Selecione uma marca</Option>
                            <Option value="CASUMINA">CASUMINA</Option>
                            <Option value="XBRI">XBRI</Option>
                            <Option value="PROVATO">PROVATO</Option>
                        </Select>
                    </Descricao>
                </Container>
                <Button type="submit">Cadastrar</Button>
            </form>
        </ContainerGeral>
    )
}

export default CadastroProdutos

