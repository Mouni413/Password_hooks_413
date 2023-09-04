// Write your code here
import {useState} from 'react'
import {
  PasswordBackgroundContainer,
  CardContainer,
  PasswordHeading,
  PasswordDescription,
  InputTypePassword,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const onChangeInputPassword = event => {
    setPassword(event.target.value)
  }
  let message = ''
  if (password.length < 8) {
    message = 'Your password must be at least 8 characters'
  }
  return (
    <PasswordBackgroundContainer>
      <CardContainer>
        <PasswordHeading>Password Validator</PasswordHeading>
        <PasswordDescription>
          Check how strong and secure is your password
        </PasswordDescription>
        <InputTypePassword type="password" onChange={onChangeInputPassword} />
        <ErrorMessage>{message}</ErrorMessage>
      </CardContainer>
    </PasswordBackgroundContainer>
  )
}

export default PasswordValidator
