// Style your elements here
import styled from 'styled-components'

export const PasswordBackgroundContainer = styled.div`
  background-color: #24263c;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const CardContainer = styled.div`
  background-color: #383a4e;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
`

export const PasswordHeading = styled.h1`
  color: white;
  font-size: 40px;
  font-family: 'Roboto';
  font-weight: bold;
`
export const PasswordDescription = styled.p`
  color: white;
  font-family: 'Roboto';
  font-size: 14px;
`

export const InputTypePassword = styled.input`
  background-color: white;
  width: 80%;
  outline: none;
  border-width: 0px;
  padding: 8px;
`

export const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 14px;
  font-family: 'Roboto';
`
