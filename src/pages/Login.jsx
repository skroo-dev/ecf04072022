import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../context/LoginContext'
import {
  LoginContainer,
  FormContainer,
  FormInput,
  Formbtn,
  InfoPass,
} from '../components/Styled'

const user = { email: 'admin@admin.fr', password: 'admin' }

const Login = () => {
  const navigate = useNavigate()
  //J'importe les states de mon contexte
  const { isLogin, setIsLogin } = useContext(LoginContext)
  const { setUserName } = useContext(LoginContext)
  //j'initialise un state qui mettra à jour le mail+mdp
  const [data, setData] = useState({ email: null, password: null })

  //si le mail+mdp entrés sont les memes que ceux défini plus haut alors isLogin passe à true
  const handleSubmit = (e) => {
    e.preventDefault()
    if (data.email === user.email && data.password === user.password) {
      setIsLogin(true)
    }
  }
  //si isLogin est true alors je suis redirigé sur la page TabList
  useEffect(() => {
    if (isLogin) {
      navigate('/TabList')
    }
  }, [isLogin, navigate])

  return (
    <LoginContainer>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            placeholder="pseudo "
            onChange={(e) => setUserName(e.target.value)}
          />

          <FormInput
            type="email"
            placeholder="e-mail"
            onChange={(e) =>
              setData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <FormInput
            type="password"
            placeholder="password"
            onChange={(e) =>
              setData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          <Formbtn type="submit" />
        </form>
      </FormContainer>

      <InfoPass> email: 'admin@admin.fr', password: 'admin' </InfoPass>
    </LoginContainer>
  )
}

export default Login
