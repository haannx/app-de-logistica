import { useState } from "react"
import { useEffect } from "react"
import styled from "styled-components"

const SubContainer = styled.div`
    margin: 40px;
    top: 10px;
    position: absolute;
`
const UserMessage = styled.p`
  color: #fff;
  font-size: 18px;
  margin: 10px;
`
const StyledHour = styled.div`
  font-size: 24px;
  color: #fff;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: inline-block;
  margin: 10px;
`
const DateStyle = styled.div`
  font-size: 24px;
  color: #fff;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: inline-block;
  margin: 10px;
`

const Hour = () => {
const [Time, setTime] = useState(new Date())

useEffect(() => {
  const interval = setInterval(() => {
  setTime(new Date())
  }, 1000)

  return () => clearInterval(interval)
  }, [])

  return <StyledHour>{Time.toLocaleTimeString()}</StyledHour>
  
}

const Dates = () => {
const [Day, setDay] = useState(new Date())

useEffect(() => {
  const interval = setInterval(() => {
  setDay(new Date())
  }, 1000)
  return () => clearInterval(interval)
  }, [])

  return <DateStyle>{Day.toLocaleDateString()}</DateStyle>

}


function Horario(){
    return (
      <SubContainer>
        <Dates/>
        <Hour />
        <UserMessage>Olá usuário, por onde começamos hoje?</UserMessage>
      </SubContainer>
    )
}

export default Horario