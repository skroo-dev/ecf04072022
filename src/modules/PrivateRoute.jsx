import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from '../context/LoginContext'

const PrivateRoute = () => {
  //j'importe isLogin de mon contexte
  const { isLogin } = useContext(LoginContext)
  //si isLogin est true alors je peux aller vers le chrildren sinon je reste en premiere page
  return isLogin ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRoute
