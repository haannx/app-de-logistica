import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ContainerPesquisa = styled.div`
    display: flex;
    margin-bottom: 20px;
    margin-right: 150px;
`
const Descricao = styled.label`
    color: #fff;
    font-family: 'Calibri', 'Cambria', sans-serif;
    font-weight: bold;
    margin-right: 10px; // Espaço entre o label e o input
    width: 150px; // Largura fixa para os labels
    text-align: right; // Alinha o texto à direita para ficar próximo ao input
`
const BarradePesquisa = styled.input`
    width: 400px;
    height: 25px;
    border: 1px solid #ccc;
    border-radius: 7px;
    color: #fff;
    background-color: #000;

`
const Botao = styled.button`
    padding: 7px 10px;
    background-color: #4a90e2;
    color: #fff;
    border: none;
    border-radius: 7px;
    cursor: pointer;

    &:hover {
        background-color: #357ab7;
    }
`
const Titulo = styled.h1`
    color: #fff;
    font-family: 'Calibri', 'Cambria', sans-serif;
    font-weight: bold;
    margin-bottom: 20px;
`

const Resultadopedidos = styled.h2`
    color: #fff;
    margin: 30px;
`

function PesquisaClientes() {
    return(
        <Container>
            <Titulo>Consulta de Clientes</Titulo>
            <ContainerPesquisa>
                <Descricao>ID do Cliente</Descricao>
                <BarradePesquisa />
            </ContainerPesquisa>
            <ContainerPesquisa>
                <Descricao>Nome do Cliente</Descricao>
                <BarradePesquisa />
            </ContainerPesquisa>
            <Botao>Pesquisar</Botao>
            <Resultadopedidos>Clientes</Resultadopedidos>
        </Container>
    )
}

export default PesquisaClientes
