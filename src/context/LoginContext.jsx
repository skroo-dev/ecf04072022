import { createContext, useState } from 'react'

export const LoginContext = createContext()

const LoginProvider = ({ children }) => {
  // j'initialtise un setstate pour connaitre l'etat du login, si il est true je suis redirigé vers la page TabList
  const [isLogin, setIsLogin] = useState(false)
  // j'initialtise un setstate vide pour y inseré le pseudo entré par l'utilisateur (que j'utilises dans la page TabList)
  const [userName, setUserName] = useState('')

  return (
    <LoginContext.Provider
      value={{
        isLogin: isLogin,
        setIsLogin: setIsLogin,
        userName: userName,
        setUserName: setUserName,
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}

export default LoginProvider
