import styled from "styled-components"
import Horario from '../welhome/index'

const Conteiner = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: absolute;
    align-items: center;
`

function Home() {
    return (
        <Conteiner>
            <Horario></Horario>
        </Conteiner>
    )
}

export default Home